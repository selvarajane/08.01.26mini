# 08.01.26mini - React Forms Collection

This repository contains a React application with multiple form components built using Vite.

## 📁 Project Structure

The main application is located in the `08.01.26mini/sample/` directory.

## 🚀 Quick Start

Navigate to the sample directory:

```bash
cd 08.01.26mini/sample
npm install
npm run dev
```

## 🌐 Deployment

### GitHub
Repository: [https://github.com/selvarajane/08.01.26mini.git](https://github.com/selvarajane/08.01.26mini.git)

### Vercel Deployment

To deploy on Vercel, you have **TWO OPTIONS**:

#### Option 1: Using Root Directory Setting (Recommended)

1. **Import Project:**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Click "Add New Project"
   - Import from GitHub repository: `selvarajane/08.01.26mini`

2. **Configure Settings:**
   - **Root Directory:** Click "Edit" and set to `08.01.26mini/sample`
   - **Framework Preset:** Vite (auto-detected)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your application
   - You'll get a live URL (e.g., `https://08-01-26mini.vercel.app`)

#### Option 2: Using Root Package.json (Alternative)

If Option 1 doesn't work, the root `package.json` and `vercel.json` are configured to handle the nested structure automatically. Just import the project and deploy - no root directory change needed.

#### After Deployment:

- **Automatic Deployments:** Every push to the `main` branch will trigger a new deployment
- **Preview Deployments:** Pull requests will create preview deployments
- **Troubleshooting:** If you see a blank page, check the Vercel build logs and ensure the Root Directory is set correctly

## 📝 More Information

See the [sample README](./08.01.26mini/sample/README.md) for detailed project information.

