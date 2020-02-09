const core = require('@actions/core');
const request = require('request');

function sendApiRequest(options) {
  const callback = function (error, response, body) {
    console.log('API response:', body);

    if (response.statusCode !== 200) {
      core.setFailed(`The request to the API failed with status code ${response.statusCode}`);
    }
  };

  console.log(`Sending API request to ${options.url}`);

  request(options, callback);
}

async function run() {
  try {
    const username = core.getInput('username', {required: true});
    const password = core.getInput('password', {required: true});
    const subject = core.getInput('subject', {required: false}) || username;
    const repo = core.getInput('repo', {required: false}) || 'maven';
    const package_ = core.getInput('package', {required: true});
    const version = core.getInput('version', {required: true});

    sendApiRequest({
      method: 'POST',
      'url': `https://api.bintray.com/maven_central_sync/${encodeURIComponent(subject)}/${encodeURIComponent(repo)}/${encodeURIComponent(package_)}/versions/${encodeURIComponent(version)}`,
      'auth': {
        'user': username,
        'pass': password
      },
      json: true,
      body: {
        'close': 1
      }
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();