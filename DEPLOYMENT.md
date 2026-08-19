# Deployment Guide - Silikon-Service-Dortmann Website

## Quick Start

The website is built and ready to deploy. The production build is in the `dist/` folder.

## Deployment Options

### 1. **Netlify (Recommended - Free)**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### 2. **GitHub Pages**

1. Push to `main` branch
2. Go to Repository Settings → Pages
3. Set source to `gh-pages` branch
4. Add GitHub Actions workflow to auto-build and deploy

### 3. **Vercel (Free)**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 4. **Traditional Hosting (Shared/VPS)**

Upload the `dist/` folder to your web server:
- FTP/SFTP the entire `dist/` folder to your server
- Set document root to the `dist/` folder
- Ensure `.htaccess` or server config handles SPA routing

### 5. **Docker Deployment**

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

## Build Details

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP with ScrollTrigger
- **Bundle Size**: ~364KB (including all assets)
- **Gzipped Size**: ~108KB (optimized)

### Performance Metrics

```
- Index HTML: 1.2 KB (gzipped: 0.6 KB)
- CSS: 4.7 KB (gzipped: 1.7 KB)  
- React Bundle: 189 KB (gzipped: 59.9 KB)
- GSAP Bundle: 112.6 KB (gzipped: 44 KB)
- Main App: 26.5 KB (gzipped: 5.6 KB)
```

## Development

### Local Development
```bash
npm run dev         # Start dev server on http://localhost:5173
npm run build       # Build for production
npm run preview     # Preview production build locally
```

### SEO Features

- LocalBusiness schema.org markup
- Meta tags for social sharing (OG, Twitter)
- Responsive meta tags
- Sitemap and robots.txt
- Mobile viewport optimization

## Environment Variables

No environment variables required for this deployment.

## SSL/HTTPS

All modern hosting services (Netlify, Vercel, GitHub Pages) provide free SSL certificates automatically.

## Support

For deployment questions:
1. Check the build output logs
2. Verify that `dist/` folder contains all necessary files
3. Ensure proper permissions on the server
4. Check CORS headers if loading external resources

## First Deploy Checklist

- [ ] Build succeeds locally: `npm run build`
- [ ] `dist/` folder created with all files
- [ ] Environment configured
- [ ] DNS/domain set up
- [ ] SSL certificate active
- [ ] Website loads in browser
- [ ] Mobile responsive test
- [ ] Form submission working
- [ ] Analytics configured (if needed)
- [ ] Monitor performance with Lighthouse
