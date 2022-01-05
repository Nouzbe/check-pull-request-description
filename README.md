# Check Pull Request Description

![Version](https://img.shields.io/github/v/release/nouzbe/check-pull-request-description?style=flat-square)

A GitHub action ensuring that PRs have descriptions.

# Example Workflow

```yml
name: "PR description check"
on:
  pull_request:
    types:
      - opened
      - edited
      - reopened

jobs:
  publish:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v1
      - uses: nouzbe/check-pull-request-description@v1.7
```
