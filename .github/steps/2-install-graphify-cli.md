## ✅ Step 1 complete — `.graphifyignore` looks good!

Nice work. Graphify will now skip build folders and dependencies.

---

# Step 2 — Install the Graphify CLI

Install Graphify **once on your laptop**, then leave a small proof file so Actions can grade this step.

## Why

Graphify is a Python CLI (`graphifyy` package). Each developer installs it locally; CI only checks your proof file.

## :keyboard: Activity: Install CLI + commit proof

1. In a terminal:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
uv tool install graphifyy
graphify --version
```

2. Create the proof file:

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

4. Wait ~20 seconds — the bot will reply on the **exercise issue** with **Step 3**.

## How CI grades you

Workflow `2-install-graphify-cli.yml` checks that `graphify-setup/CLI_OK.md` exists and is not empty.

<details>
<summary>Having trouble? 🤷</summary>

- If `graphify: command not found`, open a new terminal or add `~/.local/bin` to `PATH`.
- Alternative: `pipx install graphifyy`
- `graphify-setup/CLI_OK.md` must not be empty.

</details>
