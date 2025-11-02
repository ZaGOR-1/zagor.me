# GitHub Pages White Screen Fix

## Problem
When deploying the Next.js portfolio to GitHub Pages at `https://zagor-1.github.io/testanyproject/`, the site showed only a white screen with no content.

## Root Cause
Next.js apps deployed to GitHub Pages at a repository path (not the root domain) need proper `basePath` configuration. Without it:
- Assets (JS, CSS) are loaded from the wrong paths
- The app tries to redirect to `/uk` instead of `/testanyproject/uk`
- All internal links and asset references break
- Result: white screen and console errors

## Solution Implemented

### 1. Updated `next.config.js`
Added `basePath` and `assetPrefix` configuration that uses an environment variable:

```javascript
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // ... rest of config
}
```

This allows:
- **Local development**: Works without basePath (empty string)
- **GitHub Pages**: Uses `/testanyproject` as basePath when environment variable is set

### 2. Updated `.github/workflows/deploy.yml`
Added environment variable to the build step:

```yaml
- name: Build with Next.js
  run: npm run build
  env:
    NEXT_PUBLIC_BASE_PATH: /testanyproject
```

### 3. Updated `.env.example`
Documented the new environment variable for developers:

```bash
# GitHub Pages deployment (leave empty for local development)
# NEXT_PUBLIC_BASE_PATH=/testanyproject
```

## What's Fixed

✅ All JavaScript chunks load from `/testanyproject/_next/...`
✅ All CSS files load from `/testanyproject/_next/...`  
✅ All static assets load from `/testanyproject/...`
✅ Root redirect properly redirects to `/testanyproject/uk`
✅ Locale switching works correctly
✅ Navigation and smooth scrolling work properly
✅ Open Graph images use correct absolute URLs
✅ Local development still works without basePath

## Testing

### Build Test
To test the build locally with basePath:

```bash
NEXT_PUBLIC_BASE_PATH=/testanyproject npm run build
```

### Verify Output
Check that generated files in `./out/` include the basePath in all asset references:

```bash
# Check index.html for correct paths
grep -o '"/testanyproject/_next' ./out/index.html | head -5

# Verify redirect
head -50 ./out/index.html | grep -i redirect
```

### Local Preview
To preview the built site locally:

```bash
# Install a static server
npm install -g serve

# Serve with correct basePath
serve out -p 3000
```

Then visit: `http://localhost:3000/testanyproject/`

## Deployment

The GitHub Actions workflow automatically:
1. Installs dependencies
2. Builds the site with `NEXT_PUBLIC_BASE_PATH=/testanyproject`
3. Exports static files to `./out/`
4. Deploys to GitHub Pages

Your site will be available at: `https://zagor-1.github.io/testanyproject/`

## Important Notes

- The `.nojekyll` file in `/public/` ensures GitHub Pages doesn't process files with Jekyll
- All relative paths in components automatically work with basePath
- Metadata URLs in `app/layout.tsx` use absolute URLs (already correct)
- No changes needed to component code - Next.js handles basePath automatically

## For Other Projects

If deploying to a different repository name:
1. Update `NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy.yml`
2. Update metadata URLs in `app/layout.tsx`
3. Rebuild and redeploy

Example for repository "my-portfolio":
```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /my-portfolio
```
