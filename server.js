import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { seoConfig } from './src/seoConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Path to the built files
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Helper to inject meta tags
function injectMetaTags(html, seo, host) {
    let result = html;
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    // Basic tags
    if (seo.title) {
        result = result.replace(/<title>.*?<\/title>/, `<title>${seo.title}</title>`);
    }

    const tags = [
        { name: 'description', content: seo.description },
        { property: 'og:title', content: seo.ogTitle || seo.title },
        { property: 'og:description', content: seo.ogDescription || seo.description },
        { property: 'og:image', content: seo.ogImage ? (seo.ogImage.startsWith('http') ? seo.ogImage : `${baseUrl}${seo.ogImage}`) : '' },
        { property: 'og:url', content: `${baseUrl}${seo.path || ''}` },
        { property: 'og:type', content: seo.ogType || 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: seo.ogTitle || seo.title },
        { name: 'twitter:description', content: seo.ogDescription || seo.description },
        { name: 'twitter:image', content: seo.ogImage ? (seo.ogImage.startsWith('http') ? seo.ogImage : `${baseUrl}${seo.ogImage}`) : '' }
    ];

    let tagsHtml = '';
    tags.forEach(tag => {
        if (tag.content) {
            const attr = tag.name ? `name="${tag.name}"` : `property="${tag.property}"`;
            tagsHtml += `\n    <meta ${attr} content="${tag.content}">`;
        }
    });

    return result.replace('<head>', `<head>${tagsHtml}`);
}

// Universal SEO Handler
function handleSeo(req, res) {
    fs.readFile(indexPath, 'utf8', (err, html) => {
        if (err) {
            console.error('Error reading index.html:', err);
            return res.status(500).send('Internal Server Error. Make sure you have run "npm run build"');
        }

        const pathKey = req.path === '/' ? '/' : req.path.replace(/\/$/, '');
        const config = seoConfig[pathKey] || seoConfig['/'];
        const seoWithhPath = { ...config, path: req.path };

        const updatedHtml = injectMetaTags(html, seoWithhPath, req.headers.host);
        res.send(updatedHtml);
    });
}

// Routes
app.get('/', handleSeo);
app.get('/about', handleSeo);
app.get('/about/', handleSeo);

// Serve static files
app.use(express.static(distPath));

// Catch-all
app.use((req, res) => {
    console.log(`Catch-all route for: ${req.url}`);
    if (fs.existsSync(indexPath)) {
        handleSeo(req, res);
    } else {
        res.status(404).send('Not Found. Make sure you have run "npm run build"');
    }
});

// Export for Vercel
export default app;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`URL: http://localhost:${PORT}`);
    });
} else {
    // In production environments (like Vercel), we manually start the server if needed
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}
