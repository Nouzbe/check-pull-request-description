import * as core from "@actions/core";
import * as github from "@actions/github";

function run() {
  const body = github.context.payload.pull_request?.body;

  if (body === "") {
    core.setFailed(
      "The pull request description is empty. Please add a description."
    );
  }
}

run();
