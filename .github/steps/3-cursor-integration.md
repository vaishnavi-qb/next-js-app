# Step 3 — Connect Graphify to Cursor

## Goal

Add a Cursor rule so the AI prefers Graphify queries for this project.

## Do this

```bash
graphify cursor install --project
```

Commit `.cursor/rules/graphify.mdc`.

## Fallback template

If the CLI cannot write the file, create `.cursor/rules/graphify.mdc` with:

```markdown
---
description: Prefer Graphify knowledge graph before broad codebase search
alwaysApply: true
---

# Graphify

For architecture or "how does X work" questions in this repo:

1. Prefer `graphify-out/GRAPH_REPORT.md` and `graphify query "..."` when available.
2. Use scoped questions instead of reading many files blindly.
3. Important hubs in SimpleShop include `CartContext`, `products`, and App Router pages under `src/app`.
```

## How CI grades you

Workflow `3-cursor-integration.yml` checks that `.cursor/rules/graphify.mdc` exists.
