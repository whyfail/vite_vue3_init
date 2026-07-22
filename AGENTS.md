# AGENTS.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## Defensive Code

Do not hide unexpected failures with fallback values, empty returns, or broad `try/catch`. Validate external input at boundaries; fail fast for invalid config, programmer errors, and missing required dependencies.

Env vars must be read only in config code and validated at startup. Never default or auto-`trim()` secrets. Avoid `process.env.X || default`; distinguish missing, blank, invalid, and valid values.

If adding a fallback, empty return, or catch block, explain why the error is recoverable.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

## AI Project Notes

- New features go under `src/features/<name>`; pages in `pages`, business components in `components`, feature api/store stay inside the feature.
- App-level composition stays in `src/app`; routes are aggregated in `src/app/routes`, and feature routes should lazy-load pages.
- Shared primitives stay in `src/shared/ui`; cross-feature infra stays in `src/shared/api`, `src/shared/lib`, or `src/shared/config`.
- Use Tailwind CSS for styling. Import Heroicons from `@heroicons/vue/24/outline` for business UI icons; keep shadcn-vue generated internals aligned with `components.json` `iconLibrary`.
- shadcn-vue components are source files under `src/shared/ui`; add them with `pnpm dlx shadcn-vue@latest add`.
- Session side effects stay in `features/auth/session`; navigation and notifications stay behind `app/navigation` and `app/notifications`.
- Business requests should use shared API wrappers instead of scattered raw Axios instances.
- When adding or changing any component, add or update a component test for it; every component should have at least a render smoke test.
- Validate with `pnpm test`, `pnpm test:coverage`, `pnpm test:component-coverage`, `pnpm typecheck`, `pnpm lint`, `pnpm test:e2e`, and `pnpm build`.
- After dependency upgrades also run `pnpm peers check` so Vite/plugin peer range drift is caught before handoff.
- Test reports are written to `coverage/`, `test-results/`, and `playwright-report/`; inspect them before lowering coverage thresholds.
- Format code with `pnpm format`; check formatting with `pnpm format:check`.
- Current dependency baseline: pnpm 11.10.0, Vite 8.1.5, Vue 3.5.40, Vue Router 5.2.0, Pinia 4.0.2, TypeScript 6.0.3, Axios 1.18.1, Vue DevTools 8.1.5.

## 项目结构约定

- `src/app` 只放应用级组合代码：路由、布局、通知、导航、全局样式。
- `src/features/*` 放业务模块：page、component、api、store、business logic 都跟随 feature。
- `src/shared/ui` 只放 shadcn-vue 基础组件，不放业务逻辑。
- `src/shared/api`、`src/shared/lib`、`src/shared/config` 放跨业务基础能力。
- 不新增 `common*` 万能目录；按能力或业务归属放文件。
