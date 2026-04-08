# Azure Static Web App - React

A React application deployed as an Azure Static Web App.

## Features

- ⚡ Fast global content delivery
- 🔒 HTTPS by default
- 📦 Automatically scales with demand
- 🚀 CI/CD with GitHub Actions
- 💰 Free tier available

## Prerequisites

- Node.js 16.x or later
- npm or yarn
- Azure account
- GitHub account (for deployment)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

3. Build for production:
```bash
npm run build
```

4. Run tests:
```bash
npm test
```

## Deployment to Azure

### Option 1: Using Azure Portal

1. Create a new Static Web App in Azure Portal
2. Connect your GitHub repository
3. Configure build settings:
   - App location: `/`
   - Output location: `build`
4. Azure will automatically set up GitHub Actions workflow

### Option 2: Using Azure CLI

```bash
# Install Azure CLI if not already installed
# https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login to Azure
az login

# Create a resource group
az group create --name myResourceGroup --location eastus2

# Create the static web app
az staticwebapp create \
  --name my-react-app \
  --resource-group myResourceGroup \
  --source https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME> \
  --location eastus2 \
  --branch main \
  --app-location "/" \
  --output-location "build" \
  --login-with-github
```

### GitHub Actions Setup

The repository includes a GitHub Actions workflow (`.github/workflows/azure-static-web-apps.yml`) that automatically deploys your app when you push to the main branch.

To use it:

1. Create a Static Web App in Azure
2. Copy the deployment token from Azure Portal
3. Add it as a GitHub secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`
4. Push to main branch to trigger deployment

## Project Structure

```
az-web-app/
├── public/              # Static files
│   ├── index.html      # HTML template
│   ├── manifest.json   # PWA manifest
│   └── robots.txt      # Search engine instructions
├── src/                # Source files
│   ├── App.js          # Main App component
│   ├── App.css         # App styles
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── staticwebapp.config.json  # Azure Static Web App configuration
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Configuration

### staticwebapp.config.json

This file configures routing, authentication, and other Azure Static Web App features:

- Navigation fallback for SPA routing
- Custom headers
- Redirect rules
- Authentication and authorization

See [Azure Static Web Apps configuration](https://docs.microsoft.com/en-us/azure/static-web-apps/configuration) for more options.

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (⚠️ irreversible)

## Learn More

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://create-react-app.dev/)

## License

See LICENSE file for details.