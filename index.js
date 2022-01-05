import * as core from '@actions/core'
import * as github from '@actions/github'

function run() {
  const pullRequest = github.context.payload.pull_request;

  if(pullRequest) {
    const body = pullRequest.body;
  
    if (body === '') {
      core.setFailed(
        'The pull request description is empty. Please add a description.',
      )
    }
  }
}

run()
