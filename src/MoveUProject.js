import React from 'react';

import poster from './pics/MUHU.png';
function MoveUProject() {
    return (
        <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                MoveU.HappyU – Capstone Project (Top 3)
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444' }}>
                As the full stack developer for this capstone project, I led a team to develop a mobile application designed to enhance student wellness. The app tracks health data, stores it securely, and delivers interactive visual reports.
                <br /><br />
                We tested interactive prototypes using Figma with over 50 users and received an 87% positive usability rating. The backend was built with Node.js and MongoDB, integrating OAuth 2 and SSL for secure authentication. On the frontend, we used React Native and Bootstrap CSS to support smooth navigation across iOS and Android.
            </p>

            <h3 style={{ marginTop: '2.5rem' }}>📌 Project Poster</h3>
            <img
                src={poster}
                alt="MoveU.HappyU Poster"
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    borderRadius: '12px',
                    margin: '1rem auto',
                    display: 'block',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                }}
            />

            <h3 style={{ marginTop: '2.5rem' }}>🎥 Project Demo Video</h3>
            <video
                src="/Capstone.mp4"
                controls
                style={{
                    width: '40%',
                    borderRadius: '12px',
                    margin: '1.5rem auto',
                    display: 'block',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                }}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default MoveUProject;
