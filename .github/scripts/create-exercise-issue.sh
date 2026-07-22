#!/usr/bin/env bash
# Create the exercise issue once (Skills-style).
# Usage: create-exercise-issue.sh
set -euo pipefail

TITLE="Exercise: Graphify Skills — SimpleShop"
REPO="${GITHUB_REPOSITORY:?GITHUB_REPOSITORY required}"

EXISTING="$(gh issue list --repo "$REPO" --state open --json number,title \
  --jq ".[] | select(.title == \"$TITLE\") | .number" | head -n1 || true)"

if [[ -n "${EXISTING}" ]]; then
  echo "Issue already exists: #$EXISTING"
  echo "issue_number=$EXISTING" >> "$GITHUB_OUTPUT"
  exit 0
fi

BODY="$(cat <<'EOF'
## Graphify Skills — SimpleShop

👋 Hey there! Welcome to your **Graphify Skills** exercise on the SimpleShop Next.js app.

If you are new to GitHub, you might find developers use **issues** to organize work and collaborate. We will do the same here!

---

✨ **This is an interactive, hands-on exercise!**

As you complete each step, I’ll leave updates in the comments:

- ✅ Check your work and guide you forward
- 💡 Share helpful tips
- 🚀 Celebrate your progress and completion

You can also follow along in the README.

Let’s get started — good luck and have fun!

— Graphify Bot
EOF
)"

NUMBER="$(gh issue create --repo "$REPO" --title "$TITLE" --body "$BODY" --json number --jq .number)"
echo "Created issue #$NUMBER"
echo "issue_number=$NUMBER" >> "$GITHUB_OUTPUT"
