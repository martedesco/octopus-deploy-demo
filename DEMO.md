# 🎯 Customer Demo Script

## 🎬 Demo Overview (5 minutes)

**Objective**: Show how GitHub Actions replaces Octopus Deploy for multi-tenant deployments

---

## 📋 Demo Steps

### 1. **Repository Overview** (30 seconds)
- Show this is a **simple Node.js application**
- Point out **3 tenants**: customer-a, customer-b, demo-tenant
- Highlight **2 deployment workflows** in `.github/workflows/`

### 2. **Matrix Strategy Demo** (2 minutes)
1. Navigate to **Actions** → **Multi-Tenant Deploy (Matrix Strategy)**
2. Click **"Run workflow"**
3. **Configure**: 
   - Environment: `staging`
   - Test Mode: ✅ **Enable** (for faster demo)
4. Click **"Run workflow"** and explain:
   - **Deploys to ALL tenants simultaneously**
   - **Uses GitHub Actions matrix strategy**
   - **Similar to Octopus Deploy "Deploy to All"**

**Watch**: All 3 tenants deploy in parallel in about 30 seconds

### 3. **Dynamic Selection Demo** (2 minutes)  
1. Navigate to **Multi-Tenant Deploy (Dynamic Selection)**
2. Click **"Run workflow"**
3. **Configure**:
   - Environment: `production`
   - Tenants: `customer-a,customer-b` (exclude demo-tenant)
   - Test Mode: ✅ **Enable**
4. Explain:
   - **Selective tenant deployment**
   - **Production-only customers**
   - **Flexible tenant targeting**

**Watch**: Only selected tenants deploy

### 4. **Benefits Summary** (30 seconds)
Point out key advantages:
- ✅ **No separate infrastructure** (vs Octopus Deploy server)
- ✅ **Native GitHub integration** 
- ✅ **Matrix strategy** for parallel deployments
- ✅ **Dynamic tenant selection**
- ✅ **Cost effective** (included with GitHub)

---

## 🗣️ Key Talking Points

### **Opening**
*"This demo shows how GitHub Actions can replace Octopus Deploy for multi-tenant deployments with simpler configuration and better integration."*

### **Matrix Strategy**
*"The matrix strategy deploys to all tenants simultaneously - just like Octopus Deploy's 'Deploy to All Tenants' but without the separate infrastructure."*

### **Dynamic Selection**  
*"Dynamic selection gives you the flexibility to deploy to specific tenants - perfect for staged rollouts or tenant-specific releases."*

### **Closing**
*"GitHub Actions provides the same multi-tenant capabilities as Octopus Deploy, but with better source control integration and no additional infrastructure costs."*

---

## ⚡ Quick Reference

- **Test Mode**: Always enable for demos (5x faster)
- **Tenant Names**: customer-a, customer-b, demo-tenant
- **Environments**: staging, production
- **Demo Duration**: 5 minutes total
- **Expected Questions**: Cost, migration effort, complexity

## 🔧 Troubleshooting

**If workflow fails**: Check that Test Mode is enabled
**If too slow**: Ensure Test Mode is checked  
**If questions about complexity**: Point to simplified configuration vs Octopus Deploy