#!/usr/bin/env bash
# Advance the Skills-style README from one step to another.
# Usage: update-step.sh <from_step> <to_step>
# Example: update-step.sh 0 1
# Finish step id is: X

set -euo pipefail

FROM_STEP="${1:?from_step required}"
TO_STEP="${2:?to_step required}"
README_FILE="${README_FILE:-README.md}"

if [[ ! -f "$README_FILE" ]]; then
  echo "Missing $README_FILE"
  exit 1
fi

python3 - "$README_FILE" "$FROM_STEP" "$TO_STEP" <<'PY'
import re
import sys
from pathlib import Path

path = Path(sys.argv[1])
from_step = sys.argv[2]
to_step = sys.argv[3]
text = path.read_text(encoding="utf-8")

# Close all step details (ids 0-9 and X)
text2 = re.sub(
    r'<details id="([0-9X])" open>',
    r'<details id="\1">',
    text,
)

# Open the target step
pattern = rf'<details id="{re.escape(to_step)}">'
repl = f'<details id="{to_step}" open>'
text3, n = re.subn(pattern, repl, text2, count=1)
if n != 1:
    raise SystemExit(f"Could not open step id={to_step} in {path}")

path.write_text(text3, encoding="utf-8")
print(f"Updated {path}: {from_step} -> {to_step}")
PY
