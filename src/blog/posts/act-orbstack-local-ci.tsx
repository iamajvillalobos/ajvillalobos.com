import type { BlogPost } from '../types'

export const actOrbstackLocalCi: BlogPost = {
  slug: 'act-orbstack-local-ci',
  title: 'Using act and OrbStack to save on GitHub Actions CI cost',
  description:
    'Run GitHub Actions locally with act and OrbStack on a Mac: the right event, a real .actrc, and a lighter Docker runtime.',
  date: '2026-07-22',
  content: PostBody,
}

function PostBody() {
  return (
    <>
      <p>
        GitHub Actions is easy. It is also not free once you burn through the
        free minutes. In the age of AI, that bill grows faster than before.
      </p>
      <p>
        You push more often. Agents open more PRs. Tokens already cost real
        money. Waiting on a hosted runner for a check you already know will fail
        wastes both time and cash.
      </p>
      <p>Your Mac is fast. Use it.</p>

      <h2>The idea</h2>
      <p>
        Run the same workflow locally first. Fix issues on your machine. Open or
        update the PR when the suite is green. Keep GitHub Actions as the final
        gate on the remote, not as your every-edit feedback loop.
      </p>
      <p>Two tools make this smooth on a Mac:</p>
      <ul>
        <li>
          <a href="https://github.com/nektos/act" rel="noopener noreferrer">
            <strong>act</strong>
          </a>{' '}
          runs your GitHub Actions workflows in containers on your machine.
        </li>
        <li>
          <a href="https://orbstack.dev" rel="noopener noreferrer">
            <strong>OrbStack</strong>
          </a>{' '}
          is a light Docker runtime for Mac. It uses fewer resources than Docker
          Desktop, so CI containers feel less heavy on battery and RAM.
        </li>
      </ul>
      <p>
        I use this on{' '}
        <a href="https://timekeep.ph" rel="noopener noreferrer">
          Timekeep
        </a>
        , my payroll product. The notes below follow that shape of CI.
      </p>

      <h2>What the CI actually looks like</h2>
      <p>
        Timekeep has one main workflow file and one main job. The important
        details for local runs are:
      </p>
      <ul>
        <li>
          On GitHub it runs for <strong>pull requests</strong> to{' '}
          <code>main</code>. It also allows a manual{' '}
          <code>workflow_dispatch</code> run.
        </li>
        <li>
          The job id is <code>verify</code>. That is the name act cares about,
          not the pretty label in the GitHub UI.
        </li>
        <li>
          That job is a full check: install, typecheck, lint, unit tests,
          database tests against Postgres, then a production build.
        </li>
        <li>
          Postgres comes from a workflow service container, the same way GitHub
          Actions would start it.
        </li>
      </ul>
      <p>
        So local CI is not &ldquo;run your unit tests alone.&rdquo; It is
        &ldquo;run the same <code>verify</code> job the workflow defines.&rdquo;
      </p>

      <h2>Setup</h2>

      <h3>1. Install OrbStack</h3>
      <p>Install it, then open it once so the Docker engine is running.</p>
      <pre>
        <code>{`# confirm docker works
docker version`}</code>
      </pre>
      <p>
        act talks to Docker. OrbStack provides that engine without the Docker
        Desktop tax on RAM and CPU.
      </p>

      <h3>2. Install act</h3>
      <pre>
        <code>brew install act</code>
      </pre>
      <p>Or use the install script from the project readme.</p>

      <h3>3. List what act can see</h3>
      <p>From the repo root:</p>
      <pre>
        <code>act -l</code>
      </pre>
      <p>
        You should see the <code>verify</code> job under the events your
        workflow actually declares. For Timekeep that includes{' '}
        <code>pull_request</code> and <code>workflow_dispatch</code>, not the
        default <code>push</code> event.
      </p>

      <h2>The command I actually type</h2>
      <p>
        Day to day, with <code>.actrc</code> in place:
      </p>
      <pre>
        <code>act workflow_dispatch</code>
      </pre>
      <p>
        <code>workflow_dispatch</code> is GitHub&rsquo;s &ldquo;run this
        workflow by hand&rdquo; event. Locally that is what you want. You are
        not opening a PR. You are saying run CI now.
      </p>
      <p>
        Why not <code>act pull_request</code>? That event is for simulating a
        PR. It can need more PR context, and it is not how you think about a
        local loop. Keep <code>pull_request</code> for GitHub. Use{' '}
        <code>workflow_dispatch</code> on your laptop. The workflow just needs
        both triggers listed under <code>on:</code>.
      </p>
      <p>
        Bare <code>act</code> defaults to <code>push</code>. If your workflow
        does not listen for push, that default can run nothing useful.
      </p>

      <h2>A .actrc line by line</h2>
      <p>
        Put defaults in <code>.actrc</code> so the command stays short. Here is
        the one I use for Timekeep on an Apple Silicon Mac:
      </p>
      <pre>
        <code>{`-W .github/workflows/ci.yml
-j verify
-P ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-24.04
--container-architecture linux/arm64
--rm
-q`}</code>
      </pre>
      <p>
        <code>-W .github/workflows/ci.yml</code>
      </p>
      <p>
        Only load this workflow file. Timekeep has one CI file, so there is no
        need to scan every YAML under <code>.github/workflows</code>.
      </p>
      <p>
        <code>-j verify</code>
      </p>
      <p>
        Always run the <code>verify</code> job. That is the job id under{' '}
        <code>jobs:</code>, not the display name in the GitHub UI.
      </p>
      <p>
        <code>
          -P ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-24.04
        </code>
      </p>
      <p>
        Map <code>runs-on: ubuntu-latest</code> to a full Ubuntu image act can
        run in Docker. Without this, act may pick a smaller default image that
        is missing tools your workflow expects.
      </p>
      <p>
        <code>--container-architecture linux/arm64</code>
      </p>
      <p>
        Run containers as arm64. That matches Apple Silicon. On an Intel Mac,
        drop this line or use <code>linux/amd64</code>.
      </p>
      <p>
        <code>--rm</code>
      </p>
      <p>
        Remove the containers when the job finishes. Keeps Docker from filling
        up with leftover act containers after each run.
      </p>
      <p>
        <code>-q</code>
      </p>
      <p>
        Quiet mode. Less act chatter in the terminal so you can focus on the
        workflow output.
      </p>
      <p>
        With that file in place, <code>act workflow_dispatch</code> is enough.
        act fills in the workflow, job, image, arch, and cleanup flags for you.
      </p>

      <h2>Secrets and env</h2>
      <p>
        Many apps only need dummy values in CI. Timekeep&rsquo;s workflow sets
        those inline for things like session secrets and fake cloud credentials,
        so a local act run can reuse the same approach.
      </p>
      <p>
        If you do need real secrets locally, use a file you never commit:
      </p>
      <pre>
        <code>{`# .secrets (gitignored)
SOME_TOKEN=...`}</code>
      </pre>
      <pre>
        <code>act workflow_dispatch --secret-file .secrets</code>
      </pre>

      <h2>A simple loop with agents</h2>
      <ol>
        <li>Change code, or let an agent change it.</li>
        <li>
          Run <code>act workflow_dispatch</code>.
        </li>
        <li>Fix whatever the workflow reports.</li>
        <li>Push or update the PR when green.</li>
      </ol>
      <p>
        That loop keeps GitHub Actions minutes for the check that matters on the
        remote. It also keeps token-heavy agent work off the billable runner.
      </p>

      <h2>When to still use hosted CI</h2>
      <p>
        Local act is great for the full <code>verify</code> path: typecheck,
        lint, tests, service containers, and build.
      </p>
      <p>Keep hosted Actions for:</p>
      <ul>
        <li>the required status check on protected branches</li>
        <li>deploy jobs</li>
        <li>jobs that need private network access only available in the cloud</li>
      </ul>

      <h2>Bottom line</h2>
      <p>
        Use OrbStack for a light Docker engine on Mac. Use{' '}
        <code>.actrc</code> for the long act flags. Use{' '}
        <code>act workflow_dispatch</code> as the local command. Let GitHub keep
        the real <code>pull_request</code> gate.
      </p>
      <p>
        You already pay for a fast laptop. In a world where AI burns tokens and
        CI burns minutes, local first is the cheap path.
      </p>
    </>
  )
}
