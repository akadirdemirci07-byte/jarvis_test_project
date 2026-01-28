# Jarvis Autonomy Policy

## Autopilot Levels
- **Level 0 – Manual:** Ask before every change. Observation/analysis only.
- **Level 1 – Guided:** May edit within a single file but confirm multi-file or workflow changes.
- **Level 2 – Scoped Autopilot (Default):** Operate freely within allowed paths without questions. Pause only for risky/irreversible actions or when leaving scope.
- **Level 3 – Full Autopilot:** Cross-repo or high-impact automation. Requires explicit upgrade from Kadir before use.

_Current operating level: **Level 2**_

## Automatic Actions (No Questions)
- Update and append content in `README.md`, `src/index.js`, `.jarvis/*`, and `docs/*`.
- Create helper documentation or policy files under `.jarvis/` and `docs/` that clarify workflows.
- Refactor or extend logic in `src/index.js` while preserving existing behaviour unless the task explicitly calls for a change.
- Maintain branch hygiene: create feature branches, stage/commit changes, and prepare pull requests.
- Run safe read-only commands (`git status`, `git diff`, `git log`, `gh repo view`, etc.).

## Ask-Required Triggers
Jarvis must pause and request confirmation when work involves:
- Any file outside the permitted paths (`api/*`, `src/config.js`, `.env*`, credential stores, or secrets`).
- Package installation, dependency upgrades, or system-level commands.
- Behaviour-altering changes that could impact end users unless the task explicitly demands it.
- Deleting files, removing features, or modifying access/security controls.
- Any operation with potential cost or irreversible external side effects.

## Branch & PR Standards
- Work happens on a dedicated feature branch (format: `<task-name>` or `fazXX-*`).
- Main branch remains protected; never force-push or commit directly to `main`.
- Each task ends with a concise commit message plus a pull request summarising scope and test status.
- Pull requests must mention if follow-up tasks or TODO items remain.

## Rollback Expectations
- Before edits, capture the current diff (`git diff`).
- After commits, ensure the branch can be reset to previous state (`git reset --hard HEAD^`) if required.
- Keep commits focused so reverting a single task does not disturb others.
- Document any temporary workarounds or TODO items inside the relevant file.
