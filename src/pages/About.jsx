import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>About Us</h1>
            <p>hello i am kanika</p>
            <nav>
                <Link to="/" style={{ textDecoration: 'none', color: '#646cff', fontWeight: 'bold' }}>Back to Home</Link>
            </nav>
        </div>
    );
};

export default About;
