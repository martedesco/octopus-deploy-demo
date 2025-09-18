const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Get tenant configuration from environment variables
const tenantConfig = {
  name: process.env.TENANT_ID || 'default',
  environment: process.env.ENVIRONMENT || 'development',
  database: process.env.DATABASE_URL || 'mock://localhost/default_db',
  apiUrl: process.env.API_URL || 'https://api.default.com',
  region: process.env.REGION || 'us-east-1',
  version: process.env.APP_VERSION || '1.0.0'
};

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    tenant: tenantConfig.name,
    environment: tenantConfig.environment,
    version: tenantConfig.version
  });
});

// Main application endpoint
app.get('/', (req, res) => {
  res.json({
    message: `Welcome to ${tenantConfig.name} Multi-Tenant Application!`,
    tenant: tenantConfig,
    deployedAt: new Date().toISOString()
  });
});

// Tenant-specific configuration endpoint
app.get('/config', (req, res) => {
  res.json({
    tenant: tenantConfig,
    features: {
      analytics: tenantConfig.environment === 'production',
      debugMode: tenantConfig.environment !== 'production',
      multiRegion: tenantConfig.region !== 'us-east-1'
    }
  });
});

// Simulate tenant-specific data
app.get('/data', (req, res) => {
  const mockData = {
    tenant: tenantConfig.name,
    users: Math.floor(Math.random() * 1000) + 100,
    requests: Math.floor(Math.random() * 10000) + 1000,
    uptime: `${Math.floor(Math.random() * 30) + 1} days`,
    lastDeployment: new Date().toISOString()
  };
  
  res.json(mockData);
});

app.listen(port, () => {
  console.log(`🚀 Multi-tenant app running on port ${port}`);
  console.log(`📊 Tenant: ${tenantConfig.name}`);
  console.log(`🌍 Environment: ${tenantConfig.environment}`);
  console.log(`🗺️  Region: ${tenantConfig.region}`);
  console.log(`💾 Database: ${tenantConfig.database}`);
});