const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const target = core.getInput('target'); // Get the target files
    console.log(`Running ESLint on: ${target}`);

    // Run ESLint on the target files
    await exec.exec(`npx eslint ${target} --fix`);
    core.setOutput('lint-result', 'Linting completed successfully!');
  } catch (error) {
    core.setFailed(`Linting failed: ${error.message}`);
  }
}

run();
