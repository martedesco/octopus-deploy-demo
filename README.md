# Multi-Tenant GitHub Actions Demo

> **A simple demonstration of multi-tenant deployment strategies using GitHub Actions**

## 🎯 What This Demo Shows

This repository demonstrates **two key patterns** for deploying applications to multiple tenants using GitHub Actions - replacing traditional Octopus Deploy tenant functionality.

### 🚀 Deployment Patterns

1. **Matrix Strategy Deploy** - Deploy to all tenants simultaneously using GitHub Actions matrix
2. **Dynamic Tenant Deploy** - Selectively deploy to specific tenants with flexible configuration

### 🏢 Sample Tenants
- **customer-a** (Production, US East)  
- **customer-b** (Production, EU West)
- **demo-tenant** (Staging, US West)

## 🧪 Quick Demo

### Manual Testing (Recommended)
1. **Go to your repository** → **Actions** tab
2. **Select a workflow** to test
3. **Click "Run workflow"**
4. **Enable "Test Mode"** for faster execution ⚡
5. **Configure parameters** and click "Run workflow"

### Available Workflows

#### 🎯 **Matrix Strategy Deploy**
- Deploys to all tenants using GitHub Actions matrix
- **Parameters**: Environment, Test Mode
- **Best for**: Coordinated releases across all tenants

#### 🎯 **Dynamic Tenant Deploy**  
- Deploy to specific tenants or all tenants
- **Parameters**: Environment, Tenant Selection, Test Mode  
- **Best for**: Selective deployments and tenant-specific releases

## ✨ Key Benefits vs Octopus Deploy

- ✅ **No additional infrastructure** - Uses GitHub's native CI/CD
- ✅ **Built-in matrix strategy** - Deploy to multiple environments simultaneously  
- ✅ **Dynamic tenant selection** - Flexible deployment targeting
- ✅ **Integration with source control** - Deployments triggered by code changes
- ✅ **Cost effective** - No separate deployment server required

## 🚀 Demo Notes

- **Test Mode** reduces execution time from minutes to seconds
- **Matrix strategy** shows parallel multi-tenant deployments
- **Dynamic selection** demonstrates flexible tenant targeting
- All deployments are simulated - safe for demonstration

---

*This demo shows how GitHub Actions can replace Octopus Deploy for multi-tenant deployments with simpler configuration and better integration.*

## 🏗️ Project Structure

```
octopus-deploy-demo/
├── .github/
│   ├── tenants.json                    # Tenant configuration
│   ├── workflows/
│   │   ├── simple-matrix-deploy.yml    # Basic matrix strategy
│   │   ├── dynamic-tenant-deploy.yml   # Dynamic configuration
│   │   └── production-deploy.yml       # Production-ready workflow
│   └── copilot-instructions.md         # Development instructions
├── src/
│   └── app.js                          # Multi-tenant Express.js application
├── scripts/
│   ├── deploy.js                       # Mock deployment script
│   └── health-check.js                 # Health check utility
├── .vscode/
│   └── tasks.json                      # VS Code tasks
├── package.json                        # Node.js project configuration
├── test.js                             # Test suite
├── .gitignore                          # Git ignore rules
└── README.md                           # This file
```

## 🎯 Mock Tenants

The project includes 4 realistic tenant configurations:

| Tenant | Environment | Region | Features | Port |
|--------|-------------|--------|----------|------|
| **acme-corp** | Production | us-east-1 | Analytics, Premium Support, Custom Branding | 3001 |
| **beta-solutions** | Production | eu-west-1 | Analytics, Custom Branding | 3002 |
| **startup-demo** | Staging | us-west-2 | Basic features only | 3003 |
| **enterprise-client** | Production | ap-southeast-1 | All premium features | 3004 |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git for version control
- GitHub account for testing workflows

### Local Development

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd octopus-deploy-demo
   npm install
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

3. **Start the application:**
   ```bash
   npm start
   # App runs on http://localhost:3000
   ```

4. **Test different tenant configurations:**
   ```bash
   # Start as acme-corp tenant
   TENANT_ID=acme-corp ENVIRONMENT=production npm start
   
   # Start as startup-demo tenant
   TENANT_ID=startup-demo ENVIRONMENT=staging npm start
   ```

### Application Endpoints

Once running, test these endpoints:
- `GET /` - Main application info with tenant configuration
- `GET /health` - Health check endpoint
- `GET /config` - Tenant-specific configuration
- `GET /data` - Mock tenant data

## 🔄 GitHub Actions Workflows

### 1. Simple Matrix Deployment
**File:** `.github/workflows/simple-matrix-deploy.yml`

- **Trigger:** Automatic on push to main branch
- **Strategy:** Basic matrix deployment across tenants and environments
- **Best for:** Simple, uniform deployments

**Features:**
- Runs tests before deployment
- Deploys to multiple tenants simultaneously
- Excludes staging tenants from production

### 2. Dynamic Tenant Deployment
**File:** `.github/workflows/dynamic-tenant-deploy.yml`

- **Trigger:** Manual workflow dispatch
- **Strategy:** Dynamic tenant selection with flexible configuration
- **Best for:** Selective deployments and testing scenarios

**Configuration Options:**
- **Tenants:** `all` or specific tenants (e.g., `acme-corp,beta-solutions`)
- **Environment:** `staging` or `production`
- **Skip tests:** For emergency deployments

### 3. Production Deployment
**File:** `.github/workflows/production-deploy.yml`

- **Trigger:** Manual workflow dispatch
- **Strategy:** Production-ready with comprehensive safety checks
- **Best for:** Production deployments with approval gates

**Features:**
- Pre-deployment validation
- Optional manual approval for production
- Comprehensive health checks
- Detailed deployment reporting
- Post-deployment cleanup

## 🧪 Testing the Workflows

### 🚀 Manual Testing (Recommended for Quick Demo)

All workflows support **manual execution** with **test mode** for faster demonstration:

#### Quick Test Instructions
1. Go to your repository on GitHub
2. Click the **Actions** tab  
3. Select any workflow to test
4. Click **Run workflow** button
5. **Enable Test Mode** for faster execution
6. Configure other parameters as needed
7. Click **Run workflow** to start

#### Available Manual Triggers

**🎯 Simple Matrix Deploy**
- **Environment**: `staging` or `production`
- **Test Mode**: ✅ Enable for 5x faster execution
- **Skip Tests**: Skip test suite for quicker demo

**🎯 Dynamic Tenant Deploy**  
- **Environment**: Choose target environment
- **Tenants**: `all` or comma-separated list (e.g., `acme-corp,startup-demo`)
- **Test Mode**: ✅ Enable for 5x faster execution
- **Skip Tests**: Skip test suite for quicker demo

**🎯 Production Deploy**
- **Environment**: `staging` or `production`
- **Tenants**: `all` or specific tenants
- **Approval Required**: Enable/disable approval gate
- **Test Mode**: ✅ Enable for 5x faster execution

#### Test Mode Benefits
- ⚡ **5x faster execution** (seconds instead of minutes)
- 🧪 **Same realistic output** and deployment simulation
- 📊 **Perfect for demonstrations** and workflow validation
- ✅ **No side effects** - safe for testing

### 📋 Automatic Testing (Full Integration)

### Step 1: Setup GitHub Repository

1. **Create a new GitHub repository**
2. **Push this project to your repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Multi-tenant GitHub Actions demo"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### Step 2: Test Simple Matrix Deployment

1. **Make any change to trigger the workflow:**
   ```bash
   echo "# Test change" >> README.md
   git add README.md
   git commit -m "Test simple matrix deployment"
   git push
   ```

2. **Check the Actions tab** in your GitHub repository
3. **Watch the workflow run automatically**

### Step 3: Test Dynamic Deployment

1. Go to **Actions** tab in GitHub
2. Select **"🎯 Dynamic Multi-Tenant Deployment"**
3. Click **"Run workflow"**
4. **Try different configurations:**

**Example Test Configurations:**
```yaml
# Deploy all tenants to staging
Tenants: all
Environment: staging
Skip tests: false

# Deploy specific tenants
Tenants: acme-corp,startup-demo
Environment: staging
Skip tests: false

# Emergency deployment
Tenants: acme-corp
Environment: production
Skip tests: true
```

### Step 4: Test Production Workflow

1. Go to **Actions** tab
2. Select **"🏭 Production Multi-Tenant Deployment"**
3. **Configure for production:**
   ```yaml
   Environment: production
   Tenants: all
   Approval required: true
   ```

## 📊 Expected Results

Each workflow demonstrates:

- ✅ **Pre-deployment validation** - Configuration and application checks
- 🏗️ **Application building** - NPM install and build process
- 🚀 **Multi-tenant deployment** - Realistic deployment simulation per tenant
- 🔍 **Health checks** - Post-deployment verification
- 📊 **Deployment reporting** - Comprehensive status and metrics
- 📢 **Notifications** - Tenant-specific completion messages

### Sample Output

Each deployment will show:
```
🚀 Starting deployment for acme-corp
🌍 Region: us-east-1
🏷️ Environment: production
📊 Features: Analytics=true, Premium=true

📦 Deploying application...
⏳ Validating deployment package...
✅ Validating deployment package completed
⏳ Uploading assets...
✅ Uploading assets completed
⏳ Configuring load balancer...
✅ Configuring load balancer completed
⏳ Starting application...
✅ Starting application completed
⏳ Running health checks...
✅ Running health checks completed

✅ Deployment completed for acme-corp!
```

## 🔧 Customization

### Adding New Tenants

Edit `.github/tenants.json`:

```json
{
  "include": [
    {
      "name": "new-customer",
      "database": "new_customer_db",
      "api_url": "https://api.new-customer.com",
      "region": "us-west-1",
      "environment": "production",
      "port": "3005",
      "features": {
        "analytics": true,
        "premium_support": false,
        "custom_branding": true
      }
    }
  ]
}
```

### Environment Variables

The application responds to these environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `TENANT_ID` | Tenant identifier | `default` |
| `ENVIRONMENT` | Deployment environment | `development` |
| `DATABASE_URL` | Database connection string | `mock://localhost/default_db` |
| `API_URL` | External API endpoint | `https://api.default.com` |
| `REGION` | Deployment region | `us-east-1` |
| `PORT` | Application port | `3000` |

### Adding Secrets for Production Testing

Add these repository secrets in GitHub:

```
# Tenant-specific API keys
ACME_CORP_API_KEY=your-api-key-here
BETA_SOLUTIONS_API_KEY=your-api-key-here
STARTUP_DEMO_API_KEY=your-api-key-here
ENTERPRISE_CLIENT_API_KEY=your-api-key-here

# Environment-specific secrets
ACME_CORP_PRODUCTION_API_KEY=prod-key-here
ACME_CORP_STAGING_API_KEY=staging-key-here
```

## 📈 Monitoring and Reporting

### Workflow Outputs

Each workflow provides:
- 📋 **Step Summary** - Detailed deployment report in GitHub UI
- 🔗 **Direct Links** - Quick access to deployment results
- ⏱️ **Timing Information** - Deployment duration and performance
- 📊 **Health Metrics** - Application status and verification results

### Deployment Reports

Mock deployment scripts generate JSON reports saved to `reports/` directory:

```json
{
  "tenant": "acme-corp",
  "environment": "production",
  "region": "us-east-1",
  "deploymentTime": "2025-09-18T16:32:45.123Z",
  "status": "success",
  "version": "1.0.0",
  "duration": 9500
}
```

## 🔍 Troubleshooting

### Common Issues

1. **Workflows don't trigger:**
   - Ensure GitHub Actions is enabled in repository settings
   - Check file paths are correct
   - Verify YAML syntax is valid

2. **Matrix builds fail:**
   - Validate `tenants.json` JSON syntax
   - Check tenant names match configuration
   - Review workflow logs for specific errors

3. **Dependencies issues:**
   - Run `npm ci` instead of `npm install`
   - Check Node.js version (requires 18+)
   - Clear `node_modules` and reinstall if needed

### Debug Mode

Enable debug logging in GitHub Actions:

1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Add repository variables:
   ```
   ACTIONS_STEP_DEBUG=true
   ACTIONS_RUNNER_DEBUG=true
   ```

## 🚀 Next Steps

After validating these workflows:

1. **Production Adaptation:**
   - Replace mock deployment scripts with real deployment logic
   - Configure actual infrastructure targets
   - Set up proper monitoring and alerting

2. **Security Setup:**
   - Configure environment protection rules
   - Set up required reviewers for production
   - Implement proper secrets management

3. **Advanced Features:**
   - Add rollback strategies
   - Implement blue-green deployments
   - Add integration testing pipelines

## 📚 Documentation References

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [GitHub Environments](https://docs.github.com/actions/deployment/targeting-different-environments)
- [Workflow Syntax](https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions)
- [Matrix Strategies](https://docs.github.com/actions/using-jobs/using-a-matrix-for-your-jobs)

## 🤝 Contributing

Found issues or want to improve the demo?

1. Fork the repository
2. Create a feature branch
3. Test your changes thoroughly
4. Submit a pull request with detailed description

## 📄 License

This project is available under the MIT License.

---

<div align="center">

**🎯 Ready to test your multi-tenant GitHub Actions workflows!**

**⭐ Star this repository if it helped you migrate from Octopus Deploy!**

Made with ❤️ for the DevOps community

</div>