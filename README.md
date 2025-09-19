# Multi-Tenant GitHub Actions Demo

> **A simple demonstration of multi-tenant deployment strategies using GitHub Actions**

## 🎯 What This Demo Shows

This repository demonstrates **two key patterns** for deploying applications to multiple tenants using GitHub Actions - replacing traditional Octopus Deploy tenant functionality.

### 🚀 Deployment Patterns

1. **Matrix Strategy Deploy** - Deploy to all tenants simultaneously using GitHub Actions matrix
2. **Dynamic Tenant Deploy** - Selectively deploy to specific tenants with flexible configuration

### 🏢 Sample Tenants
- **acme-corp** (Staging + Production, US East)  
- **beta-solutions** (Staging + Production, EU West)
- **startup-demo** (Staging only, US West)

## 🧪 Quick Demo

### Manual Testing (Recommended)
1. **Go to your repository** → **Actions** tab
2. **Select a workflow** to test
3. **Click "Run workflow"**
4. **Enable "Test Mode"** for faster execution ⚡
5. **Configure parameters** and click "Run workflow"

### Available Workflows

#### 🚀 **Simple Matrix Deploy** (Automatic + Manual)
- **Triggers**: Automatic on push to main + Manual dispatch
- **Deploys to**: All tenants using GitHub Actions matrix strategy
- **Environment Override**: Choose specific environment (staging/production) or auto
- **Parameters**: Environment Override, Test Mode
- **Best for**: Regular deployments with environment filtering

#### 🎯 **Dynamic Tenant Deploy** (Manual Only)  
- **Triggers**: Manual dispatch only
- **Deploy to**: Specific tenants or all tenants
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

The project includes 3 realistic tenant configurations:

| Tenant | Environments | Region | Features | Port |
|--------|-------------|--------|----------|------|
| **acme-corp** | Staging + Production | us-east-1 | Analytics, Premium Support | 3001 |
| **beta-solutions** | Staging + Production | eu-west-1 | Analytics | 3002 |
| **startup-demo** | Staging only | us-west-2 | Basic features | 3003 |

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

- **Triggers:** Automatic on push to main branch + Manual workflow dispatch
- **Strategy:** Matrix deployment across tenants and environments with override capability
- **Best for:** Regular deployments with environment filtering

**Features:**
- ✅ Runs tests before deployment
- ✅ Deploys to multiple tenants simultaneously  
- ✅ **Environment Override:** Choose specific environment (staging/production) or auto
- ✅ **Smart filtering:** When override is selected, skips non-matching environments
- ✅ **Clear summary:** Shows which deployments ran vs. skipped

**Environment Override Examples:**
- `auto` → Deploys all: acme-corp (staging+production), beta-solutions (staging+production), startup-demo (staging)
- `staging` → Deploys only: acme-corp (staging), beta-solutions (staging), startup-demo (staging) 
- `production` → Deploys only: acme-corp (production), beta-solutions (production)

### 2. Dynamic Tenant Deployment  
**File:** `.github/workflows/dynamic-tenant-deploy.yml`

- **Triggers:** Manual workflow dispatch only
- **Strategy:** Dynamic tenant selection with flexible configuration
- **Best for:** Selective deployments and testing scenarios

**Configuration Options:**
- **Tenants:** `all` or specific tenants (e.g., `acme-corp`, `[beta-solutions]`, `acme-corp,startup-demo`)
- **Environment:** `staging` or `production` 
- **Test Mode:** Enable for faster execution

**Tenant Input Examples:**
- `all` → Deploy to all available tenants
- `acme-corp` → Deploy to acme-corp only
- `[acme-corp]` → Deploy to acme-corp only (supports brackets)
- `acme-corp,beta-solutions` → Deploy to multiple specific tenants

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

**🚀 Simple Matrix Deploy**
- **Environment Override**: `auto`, `staging`, or `production`
- **Test Mode**: ✅ Enable for 5x faster execution
- **How it works**: 
  - `auto` → Deploys to all tenant/environment combinations
  - `staging` → Only deploys staging environments (skips production)
  - `production` → Only deploys production environments (skips staging)

**🎯 Dynamic Tenant Deploy**  
- **Environment**: Choose target environment (`staging` or `production`)
- **Tenants**: `all` or specific tenants (e.g., `acme-corp`, `[beta-solutions]`, `acme-corp,startup-demo`)
- **Test Mode**: ✅ Enable for 5x faster execution
- **How it works**: Deploy only to selected tenants in chosen environment

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

1. **Automatic trigger - Make any change to trigger the workflow:**
   ```bash
   echo "# Test change" >> README.md
   git add README.md
   git commit -m "Test simple matrix deployment"
   git push
   ```

2. **Manual trigger - Test environment override:**
   - Go to **Actions** tab → **Simple Matrix Deploy**
   - Click **"Run workflow"**
   - **Try different environment overrides:**
     - `auto` → Deploys to all environments
     - `staging` → Only staging deployments  
     - `production` → Only production deployments

3. **Check the Actions tab** in your GitHub repository
4. **Watch the workflow run** and see environment filtering in action

### Step 3: Test Dynamic Deployment

1. Go to **Actions** tab in GitHub
2. Select **"🎯 Multi-Tenant Deploy (Dynamic Selection)"**
3. Click **"Run workflow"**
4. **Try different configurations:**

**Example Test Configurations:**
```yaml
# Deploy all tenants to staging
Tenants: all
Environment: staging
Test Mode: true

# Deploy specific tenant with brackets
Tenants: [acme-corp]
Environment: staging  
Test Mode: true

# Deploy multiple specific tenants
Tenants: acme-corp,beta-solutions
Environment: production
Test Mode: true

# Deploy single tenant to production
Tenants: acme-corp
Environment: production
Test Mode: true
```

### Step 4: Watch the Results

**Simple Matrix Deploy will show:**
- 🎯 **Environment filtering in action** - See which deployments run vs. skip
- 📋 **Clear summary** showing deployed vs. skipped tenants
- ⚡ **Parallel execution** across multiple tenants

**Dynamic Tenant Deploy will show:**
- 🎯 **Selective tenant deployment** based on your input
- 🔍 **Tenant lookup and validation** 
- 📊 **Flexible environment targeting**

## 📊 Expected Results

Each workflow demonstrates:

- ✅ **Pre-deployment validation** - Configuration and application checks
- 🏗️ **Application building** - NPM install and build process  
- 🚀 **Multi-tenant deployment** - Realistic deployment simulation per tenant
- 🔍 **Health checks** - Post-deployment verification
- 📊 **Deployment reporting** - Comprehensive status and metrics with skip/deploy details
- 📢 **Smart summaries** - Clear visibility into what ran vs. what was skipped

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
      "port": "3005",
      "features": {
        "analytics": true,
        "premium_support": false
      }
    }
  ]
}
```

**Note:** The environment (staging/production) is determined dynamically by the workflow, not stored in tenant config.

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

## � GitHub Actions Resources

Learn more about the patterns used in this demo:

- **[GitHub Actions Documentation](https://docs.github.com/actions)** - Complete guide to GitHub Actions
- **[Reusable Workflows](https://docs.github.com/actions/using-workflows/reusing-workflows)** - Create shared workflows across repositories
- **[Environments & Approvals](https://docs.github.com/actions/deployment/targeting-different-environments)** - Set up deployment environments with approval gates
- **[Matrix Strategies](https://docs.github.com/actions/using-jobs/using-a-matrix-for-your-jobs)** - Deploy to multiple targets simultaneously
- **[Workflow Syntax Reference](https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions)** - Complete YAML syntax guide

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