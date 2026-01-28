# Scope & Guardrails

## Allowed Paths
- `README.md`
- `src/index.js`
- `.jarvis/` (all policy and automation docs)
- `docs/` (reference material, specifications, changelogs)

## Restricted Paths
- `api/` (API client logic – requires separate approval)
- `src/config.js` (environment-sensitive configuration)
- `.env*`, `secrets`, credentials, or any sensitive stores
- Package management or system-level scripts (npm/yarn install, winget, etc.)

## Behavioural Boundaries
- No direct pushes to `main`; all work must flow through a feature branch and pull request.
- Maintain backwards compatibility unless a breaking change is explicitly approved.
- Prefer feature flags or opt-in toggles for experimental behaviour.
- Avoid long-lived branches; merge or archive once the task is complete.

## Rollback Rule
- Every task should be undoable with a single `git revert` or branch reset.
- Keep commits atomic; do not batch unrelated changes.
- Record any manual steps necessary to recover state inside `.jarvis/CHANGE_PROTOCOL.md` or the relevant doc.
