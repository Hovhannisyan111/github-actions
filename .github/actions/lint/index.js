const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const target = core.getInput('target');
    console.log(`Running ESLint on target: ${target}`);

    // Run ESLint
    await exec.exec(`npx eslint ${target}`);
  } catch (error) {
    core.setFailed(`Linting failed: ${error.message}`);
  }
}

run();
