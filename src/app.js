const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Simple tenant configuration
const tenant = {
  name: process.env.TENANT_ID || 'demo-tenant',
  environment: process.env.ENVIRONMENT || 'staging',
  region: process.env.REGION || 'us-east-1'
};

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    tenant: tenant.name,
    environment: tenant.environment,
    timestamp: new Date().toISOString()
  });
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({
    message: `Hello from ${tenant.name}!`,
    tenant: tenant,
    deployedAt: new Date().toISOString()
  });
});

// Simple tenant info endpoint
app.get('/info', (req, res) => {
  res.json({
    tenant: tenant.name,
    environment: tenant.environment,
    region: tenant.region,
    version: '1.0.0'
  });
});

app.listen(port, () => {
  console.log(`🚀 ${tenant.name} running on port ${port}`);
  console.log(`🌍 Environment: ${tenant.environment}`);
  console.log(`🗺️  Region: ${tenant.region}`);
});

module.exports = app;