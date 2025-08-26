import React, { useEffect, useState } from 'react';

function isIOS() {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent || navigator.vendor || '';
    return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && typeof document !== 'undefined' && 'ontouchend' in document);
}

function ResponsivePDF({ src, title, height = 800 }) {
    const [isMobileLike, setIsMobileLike] = useState(false);

    useEffect(() => {
        const mm = window.matchMedia('(max-width: 768px)');
        const update = () => setIsMobileLike(mm.matches || isIOS());
        update();
        mm.addEventListener?.('change', update);
        return () => mm.removeEventListener?.('change', update);
    }, []);

    if (isMobileLike) {
        return (
            <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                <div style={{ padding: '1rem', background: '#fff', border: '1px solid #ccc', borderRadius: 8 }}>
                    <p style={{ margin: '0 0 1rem 0' }}>
                        PDF preview isn’t supported on this device. Open or download instead:
                    </p>
                    <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '.7rem 1.1rem',
                                borderRadius: 10,
                                background: '#fcd3e1',
                                color: '#000',
                                fontWeight: 700,
                                textDecoration: 'none',
                                border: '1px solid #e8b1c0'
                            }}
                        >
                            Open PDF
                        </a>
                        <a
                            href={src}
                            download
                            style={{
                                display: 'inline-block',
                                padding: '.7rem 1.1rem',
                                borderRadius: 10,
                                background: '#fff',
                                color: '#000',
                                fontWeight: 700,
                                textDecoration: 'none',
                                border: '1px solid #ccc'
                            }}
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <iframe
            src={src}
            title={title}
            width="100%"
            height={height}
            style={{ border: 'none' }}
        >
            Your browser does not support PDF viewing. <a href={src}>Download</a> instead.
        </iframe>
    );
}

function Resume() {
    const resumeSrc = "/QingyiXia_Resume.pdf";

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
                    <ResponsivePDF src={resumeSrc} title="Qingyi Xia Resume" height={800} />
                </div>

                <a
                    href={resumeSrc}
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
