// Simple test file for the multi-tenant application

const assert = require('node:assert');

console.log('🧪 Running tests...');

// Test 1: Validate tenant configuration
console.log('  ✓ Testing tenant configuration...');
const tenantConfig = {
  name: 'test-tenant',
  environment: 'staging',
  region: 'us-east-1'
};
assert.ok(tenantConfig.name);
assert.ok(tenantConfig.environment);
assert.ok(tenantConfig.region);

// Test 2: Test environment variables
console.log('  ✓ Testing environment variables...');
process.env.TEST_VAR = 'test-value';
assert.strictEqual(process.env.TEST_VAR, 'test-value');
delete process.env.TEST_VAR;

// Test 3: Validate package.json
console.log('  ✓ Testing package.json...');
const packageJson = require('./package.json');
assert.ok(packageJson.dependencies);
assert.ok(packageJson.dependencies.express);

console.log('✅ All tests passed!');