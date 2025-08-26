import React from 'react';
import Transformer from './pics/Handsign.jpg';
function ASLProject() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Hand Sign Language Recognition System</h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444' }}>
                As part of our deep learning course, we developed a deep learning-based American Sign Language (ASL) recognition system to bridge communication gaps for hearing-impaired communities. Leveraging the WLASL dataset and MediaPipe landmark extraction, we explored multiple model architectures including LSTM, MLP, and a Transformer encoder — our best performer, achieving 87.5% accuracy. This project demonstrates a scalable, real-time gesture recognition system tested on both curated and real-world inputs.
            </p>

            <h3 style={{ marginTop: '2.5rem' }}>📌 Transformer Model Pipeline</h3>
            <img
                src={Transformer}
                alt="ASL Project Poster"
                style={{
                    width: '100%',
                    borderRadius: '12px',
                    margin: '1rem 0',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                }}
            />

            <h3 style={{ marginTop: '2.5rem' }}>🎬 Real-time Hand Sign Recognition Demo Video</h3>
            <video
                controls
                width="100%"
                style={{
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                }}
            >
                <source src="/WLASL.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default ASLProject;
