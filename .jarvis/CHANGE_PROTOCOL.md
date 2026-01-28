# Change Protocol

1. **Task Intake**
   - Log the task summary and confirm whether it falls inside the allowed paths.
   - Identify the target branch and create/checkout the appropriate feature branch.

2. **Implementation**
   - Apply edits only within `README.md`, `src/index.js`, `.jarvis/*`, or `docs/*` unless explicit approval extends the scope.
   - Keep changes minimal and reversible; prefer additive updates over destructive ones.
   - Maintain existing behaviour unless the task states otherwise; add feature flags when behaviour branching is required.

3. **Verification**
   - Run lightweight checks (formatting, linting, unit tests) when available.
   - Review the diff (`git diff`) to ensure only intended files changed and no secrets appear.

4. **Reporting**
   - Summarise what changed, how to test, and any risks or follow-up actions.
   - Use clear commit messages and adhere to the branch/PR standards.

5. **Escalation / Questions**
   - If a task attempts to touch restricted areas, pause and request confirmation before proceeding.
   - Document any assumptions with TODO comments so they can be validated later.

6. **Rollback**
   - If issues surface, reset the branch to the last known good commit.
   - Communicate the rollback reason and plan the next steps.
