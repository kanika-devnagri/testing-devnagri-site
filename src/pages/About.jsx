import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../seoConfig';

const About = () => {
    const config = seoConfig["/about"];
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>{config.title}</title>
                <meta name="description" content={config.description} />
                <meta property="og:title" content={config.ogTitle} />
                <meta property="og:description" content={config.ogDescription} />
                <meta property="og:type" content={config.ogType} />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <h1>About Us</h1>
            <p>hello i am kanika</p>
            <nav>
                <Link to="/" style={{ textDecoration: 'none', color: '#646cff', fontWeight: 'bold' }}>Back to Home</Link>
            </nav>
        </div>
    );
};

export default About;
