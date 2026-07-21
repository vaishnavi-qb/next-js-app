# Step 4 — Build the first knowledge graph

## Goal

Generate Graphify output for SimpleShop and commit the report.

## Do this

```bash
graphify .
git add graphify-out/GRAPH_REPORT.md graphify-out/graph.json
git commit -m "Add first Graphify knowledge graph"
git push
```

Optional: open `graphify-out/graph.html` in a browser.

## How CI grades you

Workflow `4-build-first-graph.yml` checks that `graphify-out/GRAPH_REPORT.md` exists and is not empty.
