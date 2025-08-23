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
<<<<<<< HEAD
        try {
            const form = e.target;
            const formData = new FormData(form);
            const resp = await fetch('https://formsubmit.co/el/yeseja', {
=======
        
        try {
            const form = e.target;
            const formData = new FormData(form);
            
            // Use your actual email address - FormSubmit will send you a new verification email
            const resp = await fetch('https://formsubmit.co/lenmonireach123@gmail.com', {
>>>>>>> f5163596ceebf02709c7a9a44378bfee1970561f
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' },
            });
<<<<<<< HEAD
            const contentType = resp.headers.get('content-type') || '';
            let data;
            if (contentType.includes('application/json')) {
                data = await resp.json();
            } else {
                data = await resp.text();
            }
            if (!resp.ok) {
                console.error('FormSubmit error:', data);
                throw new Error(typeof data === 'string' ? data : (data?.message || 'Submission failed'));
            }
            console.log('FormSubmit success:', data);
            setStatus({ submitting: false, success: true, message: 'Message sent successfully.' });
            form.reset();
        } catch (err) {
            console.error('Contact form submission error:', err);
            setStatus({ submitting: false, success: false, message: 'Failed to send. Please try again later.' });
=======
            
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
>>>>>>> f5163596ceebf02709c7a9a44378bfee1970561f
        }
    };

    return (
        <div id="/contact">
            <Header title={header} />

            <div className="contact-container">
                <Fade direction="left" duration={2000} cascade damping={1e3} triggerOnce>
<<<<<<< HEAD
                    <form className="contact-form" action="https://formsubmit.co/el/yeseja" method="POST" onSubmit={handleSubmit} autoComplete="off">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <select name="enquiry" id="enquiry">
                            <option>Freelance Project Proposal</option>
                            <option>General enquiry</option>
                            <option>Feedback</option>
                            <option>Hire Me</option>
                        </select>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="5"
                            placeholder="Message"
                            required
                        ></textarea>
                        {/* Email forwarding service options */}
                        <input type="hidden" name="_subject" value="New portfolio contact submission" />
                        {/* Optional: table layout for email */}
                        <input type="hidden" name="_template" value="table" />
                        {/* Optional: disable captcha */}
                        <input type="hidden" name="_captcha" value="false" />
                        {/* Note: _honey removed temporarily to avoid false positives from autofill */}

                        <button
                            style={{
                                cursor: "pointer",
                                backgroundColor: "black", color: "white",
                                padding: "10px 20px",
                                fontWeight: "bold",
                                margin: "0px",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "small",
                                justifyItems: "center"
=======
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
>>>>>>> f5163596ceebf02709c7a9a44378bfee1970561f
                            }}
                            type="submit"
                            disabled={status.submitting}
                        >
<<<<<<< HEAD
                            {status.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {status.message && (
                            <p className={status.success ? 'success' : 'error'}>{status.message}</p>
=======
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
>>>>>>> f5163596ceebf02709c7a9a44378bfee1970561f
                        )}
                    </form>
                </Fade>
                
                <div className="contactText">
                    <Fade direction="right" duration={2000} cascade damping={1e3} triggerOnce>
                        <div>
                            <p className="contact-text">
<<<<<<< HEAD
                                Got a project in mind or just want to connect? Feel free to reach out! Whether it's a collaboration, a question, or just a friendly hello, I'm always open to new opportunities. Fill out the form or email directly(avoiding technical errors), and I'll get back to you as soon as possible!
                            </p>
                        </div>
                    </Fade>
=======
                                Got a project in mind or just want to connect? Feel free to reach out! Whether it's a collaboration, a question, or just a friendly hello, I'm always open to new opportunities. Fill out the form or contact me directly through the links below, and I'll get back to you as soon as possible!
                            </p>
                        </div>
                    </Fade>
                    
>>>>>>> f5163596ceebf02709c7a9a44378bfee1970561f
                    <div className="contact-links">
                        <Fade direction="up" duration={3000} cascade damping={1e3}>
                            <a
                                className="contact-link"
                                href="https://github.com/monireach2480"
                                target="_blank"
<<<<<<< HEAD
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub}
                                    style={{ color: theme.socialIconBgColor }} />
=======
                                rel="noopener noreferrer"
                                title="GitHub Profile"
                            >
                                <FontAwesomeIcon 
                                    icon={faGithub}
                                    style={{ color: theme.socialIconBgColor }} 
                                />
>>>>>>> f5163596ceebf02709c7a9a44378bfee1970561f
                            </a>
                        </Fade>
                        <Fade direction="up" duration={3000} delay={500} cascade damping={1e3}>
                            <a
                                className="contact-link"
                                href="https://www.linkedin.com/in/len-monireach/"
                                target="_blank"
<<<<<<< HEAD
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin}
                                    style={{ color: theme.socialIconBgColor }} />
=======
                                rel="noopener noreferrer"
                                title="LinkedIn Profile"
                            >
                                <FontAwesomeIcon 
                                    icon={faLinkedin}
                                    style={{ color: theme.socialIconBgColor }} 
                                />
>>>>>>> f5163596ceebf02709c7a9a44378bfee1970561f
                            </a>
                        </Fade>
                        <Fade direction="up" duration={3000} delay={1000} cascade damping={1e3}>
                            <a
                                className="contact-link"
                                href="mailto:lenmonireach123@gmail.com"
<<<<<<< HEAD
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faEnvelope}
                                    style={{ color: theme.socialIconBgColor }} />
=======
                                title="Send Direct Email"
                            >
                                <FontAwesomeIcon 
                                    icon={faEnvelope}
                                    style={{ color: theme.socialIconBgColor }} 
                                />
>>>>>>> f5163596ceebf02709c7a9a44378bfee1970561f
                            </a>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> f5163596ceebf02709c7a9a44378bfee1970561f
