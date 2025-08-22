import React, { useState } from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../theme/ThemeContext.jsx';
import { Fade } from "react-awesome-reveal";

const Contact = (props) => {
    const { header } = props;
    const { theme } = useTheme();

    const [status, setStatus] = useState({ submitting: false, success: null, message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: null, message: '' });
        
        try {
            const form = e.target;
            const formData = new FormData(form);
            
            // Use your actual email address - FormSubmit will send you a new verification email
            const resp = await fetch('https://formsubmit.co/lenmonireach123@gmail.com', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' },
            });
            
            if (resp.ok) {
                setStatus({ 
                    submitting: false, 
                    success: true, 
                    message: 'Message sent successfully! I\'ll get back to you soon.' 
                });
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (err) {
            console.error('Contact form submission error:', err);
            setStatus({ 
                submitting: false, 
                success: false, 
                message: 'Failed to send message. Please try again or email me directly.' 
            });
        }
    };

    return (
        <div id="/contact">
            <Header title={header} />

            <div className="contact-container">
                <Fade direction="left" duration={2000} cascade damping={1e3} triggerOnce>
                    <form 
                        className="contact-form" 
                        onSubmit={handleSubmit} 
                        autoComplete="off"
                    >
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            required 
                        />
                        
                        {/* Email field - CRITICAL for FormSubmit to work */}
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email Address" 
                            required 
                        />
                        
                        <select name="enquiry" required>
                            <option value="">Select enquiry type</option>
                            <option value="Freelance Project Proposal">Freelance Project Proposal</option>
                            <option value="General enquiry">General enquiry</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Hire Me">Hire Me</option>
                        </select>
                        
                        <textarea
                            name="message"
                            cols="30"
                            rows="5"
                            placeholder="Your Message"
                            required
                        ></textarea>
                        
                        {/* FormSubmit configuration - using your verified settings */}
                        <input type="hidden" name="_subject" value="New Portfolio Contact - From Website" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        
                        {/* Honeypot for spam protection */}
                        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                        <button
                            style={{
                                cursor: status.submitting ? "not-allowed" : "pointer",
                                backgroundColor: status.submitting ? "#666" : "black", 
                                color: "white",
                                padding: "12px 24px",
                                fontWeight: "bold",
                                margin: "10px 0",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "16px",
                                width: "100%",
                                transition: "all 0.3s ease"
                            }}
                            type="submit"
                            disabled={status.submitting}
                        >
                            {status.submitting ? 'Sending Message...' : 'Send Message'}
                        </button>
                        
                        {status.message && (
                            <div 
                                style={{
                                    padding: "10px",
                                    borderRadius: "5px",
                                    marginTop: "10px",
                                    textAlign: "center",
                                    backgroundColor: status.success ? "#d4edda" : "#f8d7da",
                                    color: status.success ? "#155724" : "#721c24",
                                    border: status.success ? "1px solid #c3e6cb" : "1px solid #f5c6cb"
                                }}
                            >
                                {status.message}
                            </div>
                        )}
                    </form>
                </Fade>
                
                <div className="contactText">
                    <Fade direction="right" duration={2000} cascade damping={1e3} triggerOnce>
                        <div>
                            <p className="contact-text">
                                Got a project in mind or just want to connect? Feel free to reach out! Whether it's a collaboration, a question, or just a friendly hello, I'm always open to new opportunities. Fill out the form or contact me directly through the links below, and I'll get back to you as soon as possible!
                            </p>
                        </div>
                    </Fade>
                    
                    <div className="contact-links">
                        <Fade direction="up" duration={3000} cascade damping={1e3}>
                            <a
                                className="contact-link"
                                href="https://github.com/monireach2480"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub Profile"
                            >
                                <FontAwesomeIcon 
                                    icon={faGithub}
                                    style={{ color: theme.socialIconBgColor }} 
                                />
                            </a>
                        </Fade>
                        <Fade direction="up" duration={3000} delay={500} cascade damping={1e3}>
                            <a
                                className="contact-link"
                                href="https://www.linkedin.com/in/len-monireach/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn Profile"
                            >
                                <FontAwesomeIcon 
                                    icon={faLinkedin}
                                    style={{ color: theme.socialIconBgColor }} 
                                />
                            </a>
                        </Fade>
                        <Fade direction="up" duration={3000} delay={1000} cascade damping={1e3}>
                            <a
                                className="contact-link"
                                href="mailto:lenmonireach123@gmail.com"
                                title="Send Direct Email"
                            >
                                <FontAwesomeIcon 
                                    icon={faEnvelope}
                                    style={{ color: theme.socialIconBgColor }} 
                                />
                            </a>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;