# Step 2 — Install Graphify CLI

## Goal

Install the `graphify` command on your laptop once.

## Why

Graphify is a Python CLI (`graphifyy` package). Each developer installs it locally; CI only checks your proof file.

## Do this

```bash
uv tool install graphifyy
# or: pipx install graphifyy

mkdir -p graphify-setup
graphify --version > graphify-setup/CLI_OK.md
```

Commit `graphify-setup/CLI_OK.md`.

## How CI grades you

Workflow `2-install-graphify-cli.yml` checks that `graphify-setup/CLI_OK.md` exists and is not empty.
