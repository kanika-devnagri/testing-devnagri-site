import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../seoConfig';

const Home = () => {
    const config = seoConfig["/"];
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>{config.title}</title>
                <meta name="description" content={config.description} />
                <meta name="keywords" content={config.keywords} />
                <meta property="og:title" content={config.ogTitle} />
                <meta property="og:description" content={config.ogDescription} />
                <meta property="og:type" content={config.ogType} />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <h1>Welcome to My Website</h1>
            <p>This is the home page of our React Vite project.</p>
            <nav>
                <Link to="/about" style={{ textDecoration: 'none', color: '#646cff', fontWeight: 'bold' }}>Go to About Page</Link>
            </nav>
        </div>
    );
};

export default Home;
