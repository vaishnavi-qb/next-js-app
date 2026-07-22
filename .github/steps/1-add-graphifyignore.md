# Step 1 — Add `.graphifyignore`

_Welcome to Graphify Skills!_ 👋

Graphify should skip junk folders like `node_modules` and `.next`. A **`.graphifyignore`** file does that (same idea as `.gitignore`).

## Why

Without ignore rules, Graphify wastes time on dependencies and build output.

## :keyboard: Activity: Create `.graphifyignore`

1. In this repository root (same level as `package.json`), create **`.graphifyignore`**.
2. Paste:

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

3. Commit and push to `main`:

```bash
git add .graphifyignore
git commit -m "Add .graphifyignore for Graphify course"
git push
```

4. Wait about **20 seconds** and watch the **exercise issue** — the bot will check your work and post **Step 2** in the comments.

## How CI grades you

Workflow `1-add-graphifyignore.yml` checks that `.graphifyignore` exists and mentions `node_modules` and `.next`.

<details>
<summary>Having trouble? 🤷</summary>

- File name must be exactly `.graphifyignore`.
- It must include `node_modules/` and `.next/`.
- Check the **Actions** tab if the job is red.

</details>
