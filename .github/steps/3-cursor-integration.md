## ✅ Step 2 complete — Graphify CLI proof found!

Great — your CLI install is recorded in the repo.

---

# Step 3 — Connect Graphify to Cursor

Wire Graphify into Cursor so the assistant prefers graph queries for this project.

## :keyboard: Activity: Install Cursor rule

1. From the project root:

```bash
graphify cursor install --project
```

2. Confirm this file exists: `.cursor/rules/graphify.mdc`

3. Commit and push:

```bash
git add .cursor/rules/graphify.mdc
git commit -m "Add Graphify Cursor rule"
git push
```

4. Wait ~20 seconds — the bot will reply on the **exercise issue** with **Step 4**.

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

<details>
<summary>Having trouble? 🤷</summary>

- Use `--project` so the rule is stored in the repo.
- Path must be `.cursor/rules/graphify.mdc`.

</details>
