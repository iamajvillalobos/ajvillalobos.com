<!-- intent-skills:start -->
## Skill Loading

Before editing files for a substantial task:
- Run `npx @tanstack/intent@latest list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `npx @tanstack/intent@latest load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

## Project Context

- Scaffolded on 2026-07-07 with:

  ```bash
  npx @tanstack/cli@latest create ajvillalobos --agent --package-manager pnpm --tailwind
  ```

- CLI choices: React, file-router mode, blank starter with no demo/example pages, default CLI toolchain (`None`), pnpm, Tailwind enabled by the Start scaffold, Nitro (agnostic) deployment adapter, no add-ons, git initialized.
- The CLI reported that `--tailwind` is deprecated and ignored because Tailwind is always enabled in TanStack Start scaffolds.
- The CLI summary reported `Agent skills: no` despite `--agent`; TanStack Intent was installed afterward and created this `AGENTS.md`.
- Follow-up TanStack Intent commands run:

  ```bash
  npx @tanstack/intent@latest install
  npx @tanstack/intent@latest list
  ```

- After dependencies were installed, Intent was listed again with:

  ```bash
  mise exec -- npx @tanstack/intent@latest list
  ```

- Relevant local Intent skills loaded before Start-specific changes:

  ```bash
  mise exec -- pnpm dlx @tanstack/intent@latest load @tanstack/start-client-core#start-core
  mise exec -- pnpm dlx @tanstack/intent@latest load @tanstack/react-start#react-start
  mise exec -- pnpm dlx @tanstack/intent@latest load @tanstack/router-plugin#router-plugin
  ```

## Tooling

- Use mise for local tooling. The project pins Node and pnpm in `.mise.toml`.
- Typical commands:

  ```bash
  mise install
  mise exec -- pnpm install
  mise exec -- pnpm generate-routes
  mise exec -- pnpm dev
  mise exec -- pnpm build
  mise exec -- pnpm test
  ```

- `pnpm-workspace.yaml` approves the `esbuild` build script for pnpm 11 and records the current Nitro nightly minimum-release-age exemption added by pnpm.

## Architecture

- This is a blank TanStack Start React app using file-based routes in `src/routes`.
- `src/router.tsx` imports the generated `src/routeTree.gen.ts`; regenerate it with `mise exec -- pnpm generate-routes` after route changes when needed.
- `src/routes/__root.tsx` owns the document shell and must keep `HeadContent` in `<head>` and `Scripts` in `<body>`.
- Vite plugin order matters: keep Start/route-generation-related plugins before `viteReact()`. Do not convert this project to Next.js, Remix, or manual router-provider patterns.
- No auth, database, form, table, AI, shadcn, ORM, API route, or example/demo feature scaffolding is installed.

## Environment

- No application environment variables are required for the blank scaffold.
- `.env` is ignored by git. Client-exposed variables should use the `VITE_` prefix; server-only secrets should stay behind TanStack Start server functions or server routes.

## Deployment

- Production runs on Cloudflare Workers as `ajvillalobos`, serving `ajvillalobos.com` and `www.ajvillalobos.com` through the routes in `wrangler.jsonc`.
- When asked to ship, commit and push, or deploy the site, follow `.agents/skills/shipping-site/SKILL.md` as the source of truth. In Amp, invoke it with `/shipping-site`.
- The shipping workflow must verify the specific change at its affected public URL. For exact content checks, use `.agents/skills/shipping-site/scripts/verify-live.mjs`; a successful deployment or HTTP `200` alone is not sufficient verification.
- Build with `mise exec -- pnpm build`.
- Deploy with `mise exec -- pnpm deploy`.
- Nitro writes the deployable Worker to `.output`; Wrangler uses the generated redirected configuration under `.output/server/wrangler.json`.

## Known Gotchas

- `pnpm` and Corepack were not available directly in this environment, so setup uses mise-managed pnpm.
- The initial generated `nitro: npm:nitro-nightly@latest` lock resolved to an older higher-semver prerelease that did not peer cleanly with Vite 8 and broke Vitest startup. The alias is pinned to the current npm `latest` dist-tag version, `nitro-nightly@3.0.1-20260707-141752-f3a1aa6d`, which supports Vite 8 and passes peer checks.
- The blank scaffold has no test files. The test script uses `vitest run --passWithNoTests` so CI can pass until real tests are added.

## Next Steps

- Run `mise exec -- pnpm dev` to start local development.
- Add real routes under `src/routes` as product requirements become clear.
- Add tests when user-facing behavior is introduced.
