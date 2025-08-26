import React from 'react';

function AdvizeProject() {
    return (
        <div style={{ padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                AdVize – Developing an LLM-Based Evaluation Tool for Ads Pushing Algorithms
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444' }}>
                Ad-pushing algorithms are central to modern digital marketing ecosystems, enabling platforms
                like Instagram to match user behavior with targeted advertisements from merchants such as Sephora.
                These algorithms typically aim to optimize user engagement metrics, including Click-Through Rates (CTR)
                and overall satisfaction. However, conventional evaluation methods depend heavily on human raters to
                assess the quality and relevance of advertisements—a process that is both time-consuming and costly.
                <br /><br />
                To address these limitations, our team developed an evaluation framework powered by Large Language
                Models (LLMs). This system replaces manual assessment with an automated, scalable, and cost-efficient
                approach. By comparing multiple ad-pushing algorithms using natural language understanding and multi-criteria
                evaluation, the framework delivers deeper insights into ad performance while drastically reducing the need for
                human intervention.
            </p>


            <h3 style={{ marginTop: '2.5rem' }}>📄 Project Report</h3>
            <iframe
                src="/advize.pdf"
                width="100%"
                height="600px"
                title="AdVize Project Report"
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    margin: '1.5rem 0'
                }}
            />

            <h3 style={{ marginTop: '2.5rem' }}>🎥 Presentation Video</h3>
            <video
                src="https://www.eecg.utoronto.ca/~jayar/1786_24_projects/videos/ECE1786-026_AdVize_V1.mp4"
                controls
                style={{
                    width: '100%',
                    borderRadius: '12px',
                    margin: '1.5rem auto',
                    display: 'block',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                }}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default AdvizeProject;
