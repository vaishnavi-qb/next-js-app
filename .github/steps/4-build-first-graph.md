## ✅ Step 3 complete — Cursor rule is in place!

Your AI assistant can now prefer the Graphify knowledge graph for this repo.

---

# Step 4 — Build the first knowledge graph

Generate Graphify output for SimpleShop and commit the report.

## :keyboard: Activity: Run Graphify and commit output

1. From the project root:

```bash
graphify .
```

2. Confirm these exist:

- `graphify-out/GRAPH_REPORT.md`
- `graphify-out/graph.json` (optional but recommended)

3. Commit and push:

```bash
git add graphify-out/GRAPH_REPORT.md graphify-out/graph.json
git commit -m "Add first Graphify knowledge graph"
git push
```

4. Wait ~20 seconds — the bot will post the **finish** comment on the exercise issue 🎉

## How CI grades you

Workflow `4-build-first-graph.yml` checks that `graphify-out/GRAPH_REPORT.md` exists and is not empty.

<details>
<summary>Having trouble? 🤷</summary>

- Run from the repo root (where `package.json` is).
- Open `graphify-out/graph.html` in a browser to explore the graph.

</details>
