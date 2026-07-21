# Step 1 — Add `.graphifyignore`

## Goal

Stop Graphify from scanning build folders and dependencies.

## Why

Without ignore rules, Graphify wastes time on `node_modules` and `.next`.

## Do this

Create `.graphifyignore` in the repo root with at least:

```gitignore
node_modules/
.next/
```

Full recommended content is in the README Step 1 activity.

## How CI grades you

Workflow `1-add-graphifyignore.yml` checks that `.graphifyignore` exists and mentions `node_modules` and `.next`.
