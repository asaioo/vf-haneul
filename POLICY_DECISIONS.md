# Approved policy decisions

## 2026-09-15 — Canonical pre-review validation

Repository owners approved the following durable rule for both human contributors and coding agents:

> Run `npm run check` successfully before requesting human review.

The command is the stable policy interface; its implementation may evolve without requiring every instruction document to enumerate individual checks. This evidence change intentionally does not edit `AGENTS.md`. Central governance should integrate the approved decision into shared agent instructions through a separate human-reviewed policy PR.
