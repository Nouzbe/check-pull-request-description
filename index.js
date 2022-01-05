const core = require("@actions/core");
const github = require("@actions/github");

function run() {
  const pullRequest = github.context.payload.pull_request;

  console.log("pullRequest", JSON.stringify(pullRequest, undefined, 2))

  if(pullRequest) {
    const body = pullRequest.body;

    console.log("body", JSON.stringify(body, undefined, 2))

    if (body === "") {
      core.setFailed(
        "The pull request description is empty. Please add a description."
      );
    }
  }
}

run();
