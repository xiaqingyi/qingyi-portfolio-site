import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_r00z6h3',
            'template_5o7qoui',
            form.current,
            'GBWPogL7zZY6ujrZj'
        ).then(
            (result) => {
                console.log(result.text);
                setSent(true);
            },
            (error) => {
                console.log(error.text);
                setError(true);
            }
        );
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
            <h2>Contact Me</h2>

            {sent ? (
                <p style={{ color: 'green' }}>✅ Message sent! Thank you for reaching out.</p>
            ) : error ? (
                <p style={{ color: 'red' }}>❌ Something went wrong. Please try again later.</p>
            ) : (
                <>
                    <p style={{ color: '#555' }}>
                        Feel free to send me a message! I'll get back to you as soon as I can.
                    </p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"  // was "from_name"
                            placeholder="Your Name"
                            required
                            style={inputStyle}
                        />
                        <input
                            type="email"
                            name="email" // was "reply_to"
                            placeholder="Your Email"
                            required
                            style={inputStyle}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="6"
                            required
                            style={{ ...inputStyle, resize: 'vertical' }}
                        ></textarea>
                        <button type="submit" style={buttonStyle}>Send Message</button>
                    </form>
                </>
            )}
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
};

const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#f472b6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
};

export default Contact;
