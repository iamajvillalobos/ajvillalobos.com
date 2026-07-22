import type { BlogPost } from '../types'

export const ampOrbsCloudAgents: BlogPost = {
  slug: 'amp-orbs-cloud-agents',
  title: 'Cloud agents that keep working when you close the laptop',
  description:
    'Amp Orbs give each remote thread its own machine. Why that beats babysitting a VPS, and how Timekeep is set up so agents can actually run.',
  date: '2026-07-22',
  content: PostBody,
}

function PostBody() {
  return (
    <>
      <p>
        Local agents are great until they are not. They eat RAM. They fight your
        editor for CPU. They stop when the lid closes.
      </p>
      <p>
        Cloud agents flip that. You hand off a task, walk away, and come back to
        a diff, a test run, and a note about what still needs your call. I built{' '}
        <a href="https://timekeep.ph" rel="noopener noreferrer">
          Timekeep
        </a>
        , a Philippine payroll app, 100% with agents. That does not mean 100%
        unattended. I still own the product decisions, payroll rules, and final
        review.
      </p>

      <h2>Before orbs: rent a VPS and live in SSH</h2>
      <p>
        The old way was simple on paper. Rent a server. Add an SSH key. Open a
        terminal. Hope typing does not feel like wet cement. Then install Node,
        Postgres, tools, clone the repo, copy env files, and remember which
        branch this box was for last week.
      </p>
      <p>
        Once is fine. The fifth time is not. Two agents, two clean copies of the
        code, half-set-up boxes, and a list in your head of which IP has which
        unfinished work.
      </p>
      <p>
        The lag is what drains you. Not only slow typing. Your editor is here.
        The tests and the agent are there. You paste errors one way and fixes
        the other. You copy files because you forgot which machine has the real
        version. The remote machine stops feeling useful. It just feels far
        away.
      </p>

      <aside className="post-note" aria-label="What is Amp?">
        <p className="post-note-label">What is Amp?</p>
        <p>
          <a href="https://ampcode.com" rel="noopener noreferrer">
            Amp
          </a>{' '}
          is a coding agent. You give it a task in a chat. It reads the repo,
          runs commands, edits files, and shows you the diff. Terminal, web, or
          phone. Local laptop, or a remote machine Amp calls an orb. Same
          interface either way.
        </p>
      </aside>

      <h2>What Orbs change</h2>
      <p>
        Amp&rsquo;s{' '}
        <a
          href="https://ampcode.com/news/agents-in-orbs"
          rel="noopener noreferrer"
        >
          Agents in Orbs
        </a>{' '}
        post names it cleanly: a remote machine where the agent keeps working
        without you watching. Not &ldquo;SSH with a nicer skin.&rdquo; Start an orb
        thread and Amp provisions the machine for it.
      </p>
      <ul>
        <li>
          Fresh machine per chat, with your code and project settings.
        </li>
        <li>
          Familiar controls: review diffs, open a terminal, browse files.
        </li>
        <li>
          <code>amp sync &lt;thread&gt;</code> pulls changes to your laptop while
          the agent keeps going.
        </li>
        <li>
          Spawn with <code>amp -ox &quot;…&quot;</code>, or{' '}
          <code>thread: new in orb</code> in the TUI.
        </li>
        <li>
          Idle orbs pause and stop billing. No forgotten always-on server.
        </li>
      </ul>
      <p>
        I still run agents locally. That is where I inspect a bug, try a fix, or
        shape a plan against the checkout already on my Mac. When the work no
        longer needs me, I ask the local agent to spin up an orb thread with
        what it knows and continue there.
      </p>
      <pre>
        <code>{`Spin up an orb thread with what you know about this bug.
Ask it to fix it, then keep working here.`}</code>
      </pre>
      <p>
        Amp&rsquo;s{' '}
        <a
          href="https://ampcode.com/news/from-agent-to-agent"
          rel="noopener noreferrer"
        >
          agent-to-agent tools
        </a>{' '}
        pass the context and relevant files to the orb while the local thread
        keeps going. That is the part I like. I do not have to choose local or
        cloud at the start. I can research locally, execute remotely, and pull
        the changes back with <code>amp sync</code>.
      </p>

      <h2>Make the repo ready</h2>
      <p>
        A bare clone is not a place to work. Amp runs setup files from the repo
        root. See their{' '}
        <a
          href="https://ampcode.com/notes/putting-an-agent-in-an-orb"
          rel="noopener noreferrer"
        >
          setup note
        </a>{' '}
        and{' '}
        <a href="https://ampcode.com/manual/orbs" rel="noopener noreferrer">
          orbs manual
        </a>
        . Timekeep&rsquo;s shape:
      </p>
      <ul>
        <li>
          <code>.agents/setup</code>: Node, Postgres, <code>npm ci</code>,
          Playwright, migrate, seed. Writes <code>.env.local</code> from{' '}
          <code>.env.agent.example</code> (dummy keys only, never production).
        </li>
        <li>
          <code>.agents/resume</code>: short. Wake Postgres if it is down. Fail
          loudly if tools are missing.
        </li>
        <li>
          <code>.amp/services.yaml</code>: run the Next dev server. Amp gives it
          a <code>PUBLIC_URL</code>, and Timekeep uses that for login redirects
          because the app opens from a portal, not <code>localhost</code>.
        </li>
        <li>
          <code>AGENTS.md</code>: how to test, what needs your approval, and
          that orb chats need ticket details pasted in (a Linear link alone is
          not enough).
        </li>
      </ul>
      <p>
        Those file names are Amp-specific. The rule travels: setup should leave
        the agent able to install, migrate, seed, test, and open the app without
        asking you for a missing step. If setup is wrong, the agent burns tokens
        learning how to boot the app. If it is right, the first agent turn can
        stay on the real task.
      </p>

      <h2>The loop</h2>
      <ol>
        <li>Pick a task with a clear end.</li>
        <li>
          Start an orb chat with the context it cannot fetch itself.
        </li>
        <li>Let setup finish. Review the diff. Open the app if UI changed.</li>
        <li>
          Sync or open a PR when the checks pass. Spend your review where being
          wrong costs the most.
        </li>
      </ol>
      <p>
        Do not give an agent the final call on business rules, access control,
        or irreversible data changes. Tests can pass while the real-world rule
        is wrong. Do not send production secrets, fuzzy product calls, or work
        that still needs details you have not gathered. Wrong merges cost more
        than late ones.
      </p>
      <p>
        I still use{' '}
        <a href="/blog/act-orbstack-local-ci">act and OrbStack</a> for a full
        verification pass on my Mac before a push. Orbs for work without
        watching. GitHub Actions for the final remote gate.
      </p>

      <h2>Bottom line</h2>
      <p>
        You can still rent a server, SSH in, and fight the lag. Amp Orbs remove
        that dance. Put the real work in setup, resume, safe env defaults, and a
        way to open the app from the chat.
      </p>
      <p>
        Once that is in the repo, closing the laptop is not the end of the
        workday. It is a handoff.
      </p>

      <h2>Appendix: other cloud agents</h2>
      <p>
        Amp is not the only way to run coding agents remotely. Alternatives
        include{' '}
        <a
          href="https://developers.openai.com/codex/cloud"
          rel="noopener noreferrer"
        >
          OpenAI Codex
        </a>
        ,{' '}
        <a
          href="https://code.claude.com/docs/en/claude-code-on-the-web"
          rel="noopener noreferrer"
        >
          Claude Code on the web
        </a>
        ,{' '}
        <a
          href="https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent"
          rel="noopener noreferrer"
        >
          GitHub Copilot cloud agent
        </a>
        ,{' '}
        <a href="https://cursor.com/docs/cloud-agent" rel="noopener noreferrer">
          Cursor Cloud Agents
        </a>
        , and{' '}
        <a
          href="https://docs.devin.ai/get-started/devin-intro"
          rel="noopener noreferrer"
        >
          Devin
        </a>
        . I have not used all of them enough to rank them. Compare the loop:
        where a task starts, how the machine gets ready, how you steer it, and
        how the changes come home.
      </p>
    </>
  )
}
