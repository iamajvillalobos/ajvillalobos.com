---
name: shipping-site
description: Commits intended changes, pushes the current branch, and deploys ajvillalobos.com to Cloudflare Workers. Use when asked to ship or deploy the site.
---

# Ship the site

Ship the current intended work to GitHub and Cloudflare Workers.

1. Inspect `git status`, the current branch, and the complete diff. Do not include unrelated changes made by the user or another agent. Before shipping, identify the affected public URL and define a concrete live check for the intended change, such as exact text, a link destination, metadata, an HTTP response, or user-visible behavior.
2. Run `git diff --check` and `mise exec -- pnpm build`. Stop if either fails and report the failure without committing, pushing, or deploying.
3. Stage only the intended files and create a concise commit whose message describes the change. Do not amend an existing commit.
4. Push the current branch to its existing upstream with a normal push. Never force-push. Stop and report any rejection rather than rewriting history.
5. Run `mise exec -- pnpm deploy` from the repository root.
6. Confirm Wrangler reports a successful deployment, then verify the concrete check from step 1. For content changes, run `node {baseDir}/scripts/verify-live.mjs <affected-url> <expected-text> [additional-expected-text...]`; it retries during deployment propagation and requires both a successful response and every exact value. For interactive behavior, exercise the relevant public interaction when tooling allows it. A `200` response alone is not proof that the change is live.
7. Report the commit, deployment URL or version, affected public URL, expected result, and observed result. If the specific change cannot be verified remotely, state why and provide the exact manual check needed; do not claim that it is verified.

Invoking this skill is explicit authorization to create the commit, push it, and deploy it. It does not authorize force-pushing, bypassing failed checks, or including unrelated files.
