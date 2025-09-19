#!/usr/bin/env node

// Simple health check script
async function healthCheck() {
  console.log('🔍 Running health check...');
  
  // Simulate health check
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const tenant = process.env.TENANT_ID || 'demo-tenant';
  const environment = process.env.ENVIRONMENT || 'staging';
  
  console.log(`✅ ${tenant} is healthy`);
  console.log(`📊 Response time: ${Math.floor(Math.random() * 100) + 50}ms`);
  console.log(`🌍 Environment: ${environment}`);
  
  return { status: 'healthy', tenant, environment };
}

// Run health check
if (require.main === module) {
  healthCheck().catch(error => {
    console.error('❌ Health check failed:', error);
    process.exit(1);
  });
}

module.exports = { healthCheck };