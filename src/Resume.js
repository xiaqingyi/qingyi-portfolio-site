import React from 'react';

function Resume() {
    return (
        <div style={{ padding: '3rem 1rem', backgroundColor: '#fdebf2', minHeight: '100vh' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>My Resume</h2>

                <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: '1.6' }}>
                    I'm currently seeking opportunities in software development, backend engineering, and AI/ML-focused roles.
                    I'm particularly excited about working on secure, scalable systems, data platforms, and innovative products
                    that improve real-world outcomes in health tech, education, or finance.
                </p>

                <div style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '2rem'
                }}>
                    <iframe
                        src="/CV_Qingyi_V1.pdf"
                        width="100%"
                        height="800px"
                        style={{ border: 'none' }}
                        title="Qingyi Xia Resume"
                    ></iframe>
                </div>

                <a
                    href="/CV_Qingyi_V1.pdf"
                    download
                    style={{
                        display: 'inline-block',
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#f472b6',
                        color: 'white',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={e => e.target.style.backgroundColor = '#ec4899'}
                    onMouseOut={e => e.target.style.backgroundColor = '#f472b6'}
                >
                    Download My Resume
                </a>
            </div>
        </div>
    );
}

export default Resume;
