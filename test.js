const { add } = require('./index');

// Simple test for the add function
if (add(2, 3) === 5) {
  console.log('Test passed: add(2, 3) === 5');
} else {
  console.error('Test failed: add(2, 3) !== 5');
}

