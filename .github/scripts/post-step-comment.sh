#!/usr/bin/env bash
# Post a step markdown file as a comment on the exercise issue.
# Usage: post-step-comment.sh <path-to-step.md>
set -euo pipefail

COMMENT_FILE="${1:?step markdown file required}"
REPO="${GITHUB_REPOSITORY:?GITHUB_REPOSITORY required}"
TITLE="Exercise: Graphify Skills — SimpleShop"

if [[ ! -f "$COMMENT_FILE" ]]; then
  echo "Missing file: $COMMENT_FILE"
  exit 1
fi

NUMBER="$(gh issue list --repo "$REPO" --state open --json number,title \
  --jq ".[] | select(.title == \"$TITLE\") | .number" | head -n1 || true)"

if [[ -z "${NUMBER}" ]]; then
  NUMBER="$(gh issue list --repo "$REPO" --state all --json number,title \
    --jq ".[] | select(.title == \"$TITLE\") | .number" | head -n1 || true)"
fi

if [[ -z "${NUMBER}" ]]; then
  echo "Could not find exercise issue titled: $TITLE"
  exit 1
fi

gh issue comment "$NUMBER" --repo "$REPO" --body-file "$COMMENT_FILE"
echo "Posted comment on #$NUMBER from $COMMENT_FILE"
echo "issue_number=$NUMBER" >> "$GITHUB_OUTPUT"
