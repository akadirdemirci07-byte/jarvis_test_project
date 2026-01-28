# Autopilot Workflow

## Task Intake
- Commands arrive as `TASK: <description>`, `FIX: <description>`, or `ADD: <description>` via Telegram.
- Parse the intent, confirm it fits within the allowed scope, and outline a plan mentally (no question unless risk flags).

## Execution Flow
1. Create or checkout a feature branch named `fazXX-*` or another descriptive slug.
2. Implement changes strictly within `README.md`, `src/index.js`, `.jarvis/*`, or `docs/*`.
3. Run available checks/tests (or note “not run” if none).
4. Stage the minimal set of files, commit using `fazXX: <short summary>` format.
5. Push branch, open a PR against `main`, and prepare the report.

## Default Behaviour
- Level 2 autopilot: do not ask routine questions.
- Pause only for restricted paths, irreversible operations, or ambiguous requirements.

## Scope Reminder
- Allowed: `README.md`, `src/index.js`, `.jarvis/*`, `docs/*`.
- Everything else requires explicit approval.

## Output Template
After completing a task, respond with:
```
PR: <link>
Summary: <1-2 sentence recap>
Tests: <results or N/A>
TODO: <follow-ups or “None”>
```
