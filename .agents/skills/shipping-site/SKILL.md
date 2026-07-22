---
name: shipping-site
description: Commits intended changes, pushes the current branch, and deploys ajvillalobos.com to Cloudflare Workers. Use when asked to ship or deploy the site.
---

# Ship the site

Ship the current intended work to GitHub and Cloudflare Workers.

1. Inspect `git status`, the current branch, and the complete diff. Do not include unrelated changes made by the user or another agent.
2. Run `git diff --check` and `mise exec -- pnpm build`. Stop if either fails and report the failure without committing, pushing, or deploying.
3. Stage only the intended files and create a concise commit whose message describes the change. Do not amend an existing commit.
4. Push the current branch to its existing upstream with a normal push. Never force-push. Stop and report any rejection rather than rewriting history.
5. Run `mise exec -- pnpm deploy` from the repository root.
6. Confirm Wrangler reports a successful deployment, then request `https://ajvillalobos.com` and report the commit, deployment URL or version, and verification result.

Invoking this skill is explicit authorization to create the commit, push it, and deploy it. It does not authorize force-pushing, bypassing failed checks, or including unrelated files.
