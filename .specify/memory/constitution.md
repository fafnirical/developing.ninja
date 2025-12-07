<!--
Sync Impact Report
Version change: (unversioned) → 1.0.0
Modified principles:
- Principle 1 placeholder → I. Maintainable Code Quality
- Principle 2 placeholder → II. Verified Testing Discipline
- Principle 3 placeholder → III. Consistent User Experience
- Principle 4 placeholder → IV. Performance Budgets
Added sections:
- Implementation Standards
- Delivery Workflow
Removed sections:
- Placeholder Principle V section
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
Follow-up TODOs:
- None
-->

# Developing.Ninja Constitution

## Core Principles

### I. Maintainable Code Quality

- MUST keep the TypeScript codebase lint-clean (`npm run lint`) before merge; disabling rules requires documented justification in the PR.
- MUST limit modules to a single clear responsibility and keep shared utilities in `app/lib/` with typed contracts to prevent duplication.
- SHOULD use incremental, reviewable PRs under 400 lines of change to keep code review effective.
  Rationale: High baseline quality keeps the React Router stack reliable and prevents regressions that slow delivery.

### II. Verified Testing Discipline

- MUST add automated tests for every change that impacts behavior: unit tests for pure logic, component tests for UI states, and integration tests for router data flows.
- MUST run `npm run test` (or targeted vitest suites) prior to submission and record results in the PR.
- SHOULD employ regression-focused smoke tests for critical routes before release.
  Rationale: Enforced testing isolates breaking changes early and safeguards production stability.

### III. Consistent User Experience

- MUST align new UI with the shared design tokens defined in `app/app.css` and reuse established components in `app/routes/` or `app/welcome/`.
- MUST meet WCAG 2.1 AA accessibility checks (semantic labels, focus order, contrast) for any interactive element.
- SHOULD document UX decisions and edge cases within the feature spec to preserve consistent flows across routes.
  Rationale: A predictable interface maintains user trust and reduces support churn.

### IV. Performance Budgets

- MUST keep primary route transitions under 200 ms p95 on target hardware by using data loaders, memoization, and suspense boundaries where applicable.
- MUST instrument performance-sensitive features with browser performance markers or logging hooks to confirm budgets post-deploy.
- SHOULD monitor bundle size deltas; increases over 10 KB gzip require an optimization plan in the PR.
  Rationale: Guarding latency and weight ensures the app remains responsive as functionality grows.

## Implementation Standards

- Stack: TypeScript + React Router + Vite; server affordances must stay HMR-compatible.
- Styling: Tailwind and CSS modules are permitted when they respect shared tokens.
- Accessibility tooling (eslint-plugin-jsx-a11y, Lighthouse) must be run before accepting UX work.
- Observability: capture notable performance metrics and QA notes in `docs/` when performance features change.

## Delivery Workflow

- Planning artifacts (`plan.md`) must document test strategy, UX considerations, and performance budgets before implementation begins.
- Feature specs must articulate acceptance criteria that map to automated tests; manual-only validation is insufficient.
- Tasks must pair every functional deliverable with its verifying test work item to preserve independence of user stories.
- Code reviews gate on demonstrating lint, test, UX checklist, and performance compliance; violations require either remediation or an approved waiver recorded in the PR description.

## Governance

- The constitution overrides conflicting team customs once ratified.
- Amendments require consensus from repository maintainers, an impact analysis added to the Sync Impact Report, and updates to dependent templates.
- Versioning follows semantic rules: MAJOR for principle reversals, MINOR for new principles or expanded scope, PATCH for clarifications.
- Compliance reviews occur at the end of each feature cycle; outstanding issues convert into tracked backlog items.

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
