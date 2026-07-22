# Graphify Skills — SimpleShop

_Learn to set up Graphify on a real Next.js shopping app, with automatic checks (like GitHub Skills)._

<details id="0">
<summary><h2>Start here — Welcome</h2></summary>

### Who is this for

Beginners who already have **SimpleShop** and want Graphify without repeating manual install steps forever.

### What you'll learn

- How to ignore junk files for Graphify (`.graphifyignore`)
- How to install the Graphify CLI once
- How to connect Graphify to **Cursor**
- How to build and commit your first knowledge graph

### What you'll build

A checked-in Graphify setup for this repo:

- `.graphifyignore`
- `.cursor/rules/graphify.mdc`
- `graphify-out/GRAPH_REPORT.md`

### Prerequisites

- This repository on GitHub
- Python 3.10+ on your laptop
- Cursor (recommended) or any terminal
- About **30–45 minutes** (4 steps)

### How to start

1. Push this repo to GitHub (if you have not already).
2. Enable Actions: **Settings → Actions → General → Allow all actions**.
3. Give workflows write access: **Settings → Actions → General → Workflow permissions → Read and write permissions** → Save.
4. Open the **Actions** tab — workflow `0-start-exercise` should run (or click **Run workflow**).
5. Wait about **20 seconds**, then:
   - **Refresh this README** (Step 1 opens)
   - Open the new **Issues** tab item: `Exercise: Graphify Skills — SimpleShop`  
     (same style as [Introduction to GitHub #1](https://github.com/vaishnavi-qb/skills-introduction-to-github/issues/1) — next steps arrive as comments)

> Shop app docs (how to run Next.js): see [docs/SHOP.md](docs/SHOP.md).

</details>

<!--
  <<< learner step: 1 >>>
-->
<details id="1" open>
<summary><h2>Step 1: Add a .graphifyignore</h2></summary>

### Nice work starting the course

Graphify should skip `node_modules`, `.next`, and secrets. A `.graphifyignore` file does that (same idea as `.gitignore`).

### :keyboard: Activity: Create `.graphifyignore`

1. In this repository, create a file named **`.graphifyignore`** in the **root** (same level as `package.json`).
2. Paste this content:

```gitignore
.git/
node_modules/
.next/
out/
build/
dist/
coverage/
.env
.env.*
*.log
*.zip
package-lock.json
```

3. Commit and push to `main` (or your default branch):

```bash
git add .graphifyignore
git commit -m "Add .graphifyignore for Graphify course"
git push
```

4. Wait about **20 seconds**, open **Actions**, confirm `1-add-graphifyignore` is green, then **refresh this page**.

<details>
<summary>Stuck?</summary>

- File must be named exactly `.graphifyignore` (leading dot).
- It must include at least `node_modules/` and `.next/`.
- Check the failed job log under the Actions tab.

</details>

</details>

<!--
  <<< learner step: 2 >>>
-->
<details id="2">
<summary><h2>Step 2: Install the Graphify CLI</h2></summary>

### Great — ignore rules are in place

Install Graphify on **your machine** once. Then leave a small proof file so Actions can grade this step.

### :keyboard: Activity: Install CLI + commit proof

1. In a terminal:

```bash
# recommended
curl -LsSf https://astral.sh/uv/install.sh | sh
uv tool install graphifyy

# check it works
graphify --version
```

2. Create folder + proof file:

```bash
mkdir -p graphify-setup
graphify --version > graphify-setup/CLI_OK.md
```

3. Commit and push:

```bash
git add graphify-setup/CLI_OK.md
git commit -m "Prove Graphify CLI is installed"
git push
```

4. Wait ~20 seconds, check Actions (`2-install-graphify-cli`), then **refresh**.

<details>
<summary>Stuck?</summary>

- If `graphify: command not found`, open a new terminal or add `~/.local/bin` to your `PATH`.
- Alternative install: `pipx install graphifyy`
- `graphify-setup/CLI_OK.md` must not be empty.

</details>

</details>

<!--
  <<< learner step: 3 >>>
-->
<details id="3">
<summary><h2>Step 3: Connect Graphify to Cursor</h2></summary>

### CLI is ready

Wire Graphify into Cursor so the assistant prefers graph queries for this project.

### :keyboard: Activity: Install Cursor rule

1. From the project root:

```bash
cd /path/to/next-js-app
graphify cursor install --project
```

2. Confirm this file exists:

`.cursor/rules/graphify.mdc`

3. Commit and push:

```bash
git add .cursor/rules/graphify.mdc
git commit -m "Add Graphify Cursor rule"
git push
```

4. Wait ~20 seconds, check Actions (`3-cursor-integration`), then **refresh**.

<details>
<summary>Stuck?</summary>

- Use `--project` so the rule is stored in the repo (team-friendly).
- File path must be `.cursor/rules/graphify.mdc`.
- If the command fails, create the file from the template in `.github/steps/3-cursor-integration.md`.

</details>

</details>

<!--
  <<< learner step: 4 >>>
-->
<details id="4">
<summary><h2>Step 4: Build your first knowledge graph</h2></summary>

### Cursor is connected

Build the graph for SimpleShop and commit the report so CI can verify it.

### :keyboard: Activity: Run Graphify and commit output

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

4. Wait ~20 seconds, check Actions (`4-build-first-graph`), then **refresh**.

<details>
<summary>Stuck?</summary>

- Run from repo root (where `package.json` is).
- Do not commit `node_modules` — `.graphifyignore` / `.gitignore` should exclude it.
- Open `graphify-out/graph.html` locally in a browser to explore the graph.

</details>

</details>

<!--
  <<< learner step: X >>>
-->
<details id="X">
<summary><h2>Finish — You did it</h2></summary>

### Course complete

You now have a repeatable Graphify setup for SimpleShop.

### What you completed

1. Added `.graphifyignore`
2. Installed the Graphify CLI
3. Connected Cursor with `.cursor/rules/graphify.mdc`
4. Built and committed `graphify-out/`

### Daily workflow (after the course)

```bash
# after big changes
graphify . --update

# optional: auto-rebuild on git commit
graphify hook install

# ask the graph questions
graphify query "how does the shopping cart work?"
graphify path AddToCartButton CartContext
```

### Next learning

- Read [docs/SHOP.md](docs/SHOP.md) and explore the cart flow
- Open `graphify-out/GRAPH_REPORT.md` and try a query about `CartContext`
- Add a product in `src/data/products.ts`, then run `graphify . --update`

</details>

---

### Need help?

- Check the **Actions** tab for red X jobs and open the log
- Graphify docs: [https://graphify.net/](https://graphify.net/)
- GitHub Status: [https://www.githubstatus.com/](https://www.githubstatus.com/)

Shop app guide: [docs/SHOP.md](docs/SHOP.md)
