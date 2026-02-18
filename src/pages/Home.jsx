import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Welcome to My Website</h1>
            <p>This is the home page of our React Vite project.</p>
            <nav>
                <Link to="/about" style={{ textDecoration: 'none', color: '#646cff', fontWeight: 'bold' }}>Go to About Page</Link>
            </nav>
        </div>
    );
};

export default Home;
