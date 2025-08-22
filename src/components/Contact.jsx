import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../theme/ThemeContext.jsx'; // Adjusted import path
import { Fade } from "react-awesome-reveal";


const Contact = (props) => {
    const { header } = props
    const { theme } = useTheme();

    return (
        <div id="/contact">
            <Header title={header} />

            <div className="contact-container">
             <Fade direction="left" duration={2000} cascade damping={1e3} triggerOnce >
                <form className="contact-form" action="https://formsubmit.co/el/yeseja" method="POST">
>
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
                    {/* Honeypot field (hidden) to deter bots */}
                    <input type="text" name="_honey" style={{ display: "none" }} />
                    {/* Disable captcha (optional) */}
                    <input type="hidden" name="_captcha" value="false" />
                    {/* Optional: table layout for email and redirect after submit */}
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="/" />
>

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
                        }}
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
                </Fade>
                <div className="contactText">
                 <Fade direction="right" duration={2000} cascade damping={1e3} triggerOnce>
                    <div>
                        <p className="contact-text">
                        Got a project in mind or just want to connect? Feel free to reach out! Whether it's a collaboration, a question, or just a friendly hello, I'm always open to new opportunities. Fill out the form or email directly(avoiding technical errors), and I'll get back to you as soon as possible!
                        </p>
                    </div>
                 </Fade>
                    <div className="contact-links">
                     <Fade direction="up" duration={3000} cascade damping={1e3}>
                        <a
                            className="contact-link"
                            href="https://github.com/monireach2480"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub}
                                style={{ color: theme.socialIconBgColor }} />
                        </a>
                     </Fade>
                     <Fade direction="up" duration={3000} delay={500} cascade damping={1e3}>
                        <a
                            className="contact-link"
                            href="https://www.linkedin.com/in/len-monireach/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin}
                                style={{ color: theme.socialIconBgColor }} />
                        </a>
                     </Fade>
                     <Fade direction="up" duration={3000} delay={1000}cascade damping={1e3}>
                        <a
                            className="contact-link"
                            href="mailto:lenmonireach123@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope}
                                style={{ color: theme.socialIconBgColor }} />
                        </a>
                     </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;