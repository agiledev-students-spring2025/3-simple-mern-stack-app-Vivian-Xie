import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AboutPage() {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        // axios.get(`${process.env.REACT_APP_BACKEND_URL}/about`)
        axios.get('http://localhost:5002/about')
            .then(response => {
                setAboutData(response.data);
            });
    }, []);

    if (!aboutData) return <div>Loading...</div>;

    return (
        <div>
            <h1>About</h1>
            <img 
                src={'http://localhost:5002'+aboutData.imageUrl} 
                alt={aboutData.name} 
                style={{ width: '200px', borderRadius: '50%' }}
            />
            <h2>{aboutData.name}</h2>
            <p>{aboutData.bio}</p>
        </div>
    );
}

export default AboutPage;
