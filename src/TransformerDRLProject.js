import React, { useEffect, useState } from 'react';

function isIOS() {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent || navigator.vendor || '';
    return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && typeof document !== 'undefined' && 'ontouchend' in document);
}

function ResponsivePDF({ src, title }) {
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
            height="720"
            style={{ border: '1px solid #ccc', borderRadius: 8, margin: '1.5rem 0' }}
        >
            Your browser does not support PDF viewing. <a href={src}>Download the report</a> instead.
        </iframe>
    );
}

function TransformerDRLProject() {
    return (
        <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                Transformer-based Deep RL Portfolio Optimizer
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444' }}>
                This project explores the use of Transformer models within a Deep Reinforcement Learning (DRL)
                framework for portfolio optimization. Inspired by the JP Morgan AI Research Group’s paper
                <em> “Deep Reinforcement Learning for Optimal Portfolio Allocation”</em>, we investigated
                the ability of attention-based models to handle complex market dynamics. Our hypothesis:
                Transformers can better capture temporal dependencies in financial time-series data.
                <br /><br />
                The Transformer-based Actor-Critic model was trained on real data from five Chinese equities
                and compared with three baselines: a quadratic programming optimizer, fully connected neural
                networks, and LSTM. The Transformer model outperformed the baselines, achieving a 10.5% higher Sharpe ratio and 13% lower volatility compared to the quadratic programming and fully connected neural network models.
                <br /><br />
                These results highlight the advantages of using attention mechanisms for financial sequence modeling
                and demonstrate the adaptability of Transformers beyond Natural Language Processing (NLP) tasks
                to real-world portfolio management scenarios.
            </p>

            <h3 style={{ marginTop: '2.5rem', textAlign: 'center' }}>📄 Project Report</h3>
            <ResponsivePDF src="/DRL_report.pdf" title="DRL Portfolio Optimization Report" />

            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                <h3>🔗 GitHub Repository</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    For source code, experimental logs, and implementation details, visit our GitHub repo:
                </p>
                <a
                    href="https://github.com/ZhifeiDou/Transformer_RL_Portfolio_Optimization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                >
                    View on GitHub
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginLeft: '8px' }}>
                        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default TransformerDRLProject;
