import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Path to the built files
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Helper to inject meta tags
function injectMetaTags(html, seo) {
    let result = html;

    // Basic tags
    if (seo.title) {
        result = result.replace(/<title>.*?<\/title>/, `<title>${seo.title}</title>`);
    }

    const tags = [
        { name: 'description', content: seo.description },
        { property: 'og:title', content: seo.title },
        { property: 'og:description', content: seo.description },
        { property: 'og:image', content: seo.ogImage },
        { property: 'og:url', content: seo.ogUrl },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: seo.title },
        { name: 'twitter:description', content: seo.description },
        { name: 'twitter:image', content: seo.ogImage }
    ];

    let tagsHtml = '';
    tags.forEach(tag => {
        if (tag.content) {
            const attr = tag.name ? `name="${tag.name}"` : `property="${tag.property}"`;
            tagsHtml += `\n    <meta ${attr} content="${tag.content}">`;
        }
    });

    return result.replace('</head>', `${tagsHtml}\n  </head>`);
}

// Routes
app.get('/about', handleAboutPage);
app.get('/about/', handleAboutPage);

function handleAboutPage(req, res) {
    fs.readFile(indexPath, 'utf8', (err, html) => {
        if (err) {
            console.error('Error reading index.html:', err);
            return res.status(500).send('Internal Server Error. Make sure you have run "npm run build"');
        }

        const seo = {
            title: 'About | Kanika\'s Project',
            description: "hello i am kanika - This is my about page.",
            ogImage: `http://localhost:${PORT}/og-image.jpg`,
            ogUrl: `http://localhost:${PORT}/about`
        };

        const updatedHtml = injectMetaTags(html, seo);
        res.send(updatedHtml);
    });
}

// Serve static files
app.use(express.static(distPath));

// Catch-all
app.use((req, res) => {
    console.log(`Catch-all route for: ${req.url}`);
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('Not Found. Make sure you have run "npm run build"');
    }
});

app.listen(PORT, () => {
    console.log(`URL: http://localhost:${PORT}`);
});
