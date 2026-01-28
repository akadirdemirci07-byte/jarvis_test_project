# Autopilot Workflow

## Flow
1. Receive task (`TASK:`, `FIX:`, `ADD:` command)
2. Create/checkout feature branch (`fazXX-*` or descriptive)
3. Implement change within allowed scope
4. Run available tests/checks
5. Prepare PR against `main` (commit format `fazXX: <summary>`)
6. Merge after review and delete branch

## Telegram Command Format
- `TASK: <description>` – new feature or change request
- `FIX: <description>` – bug fix or remediation
- `ADD: <description>` – incremental improvement or documentation

## Default Behaviour
- Do not ask unnecessary questions.
- Only pause for confirmation on risky or irreversible operations.

## Scope
- `README.md`
- `src/index.js`
- `docs/*`
- `.jarvis/*`

## PR & Commit Standards
- Every task uses a feature branch; never commit directly to `main`.
- Commit message format: `fazXX: <short summary>`
- PR must summarise changes, tests, and next steps.
