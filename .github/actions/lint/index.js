const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    // Get the target input from action.yml
    const target = core.getInput('target');
    console.log(`Running ESLint on: ${target}`);

    // Run ESLint with --fix
    await exec.exec(`npx eslint ${target} --fix`);
    console.log("Linting completed successfully!");
  } catch (error) {
    core.setFailed(`Linting failed: ${error.message}`);
  }
}

run();

