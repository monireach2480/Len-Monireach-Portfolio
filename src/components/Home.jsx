import React, { useState, useEffect } from "react";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import Typewriter from "typewriter-effect";
import { Reveal, Slide, Fade } from "react-awesome-reveal";
import { useTheme } from "../theme/ThemeContext.jsx";

const Home = () => {
    const [data, setData] = useState(null);
    const { theme } = useTheme();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoints.home, { method: "GET" });
                const res = await response.json();
                setData(res);
            } catch (err) {
                console.error("Home fetch Error", err);
            }
        };
        fetchData();
    }, []);



    return data ? (
        <div id="/home" className="home">
            <Reveal duration={3000} triggerOnce>
                <div className="homeimage">
                    <img className="profilePic" src={data.profilePic.source} alt="ProfilePic" />
                    {/* <img src="https://png.pngtree.com/element_our/20190524/ourmid/pngtree-cartoon-man-working-image_1102677.jpg" alt="ProfilePic"/> */}
                </div>
            </Reveal>
            <Fade direction="right" duration={3000} cascade damping={1e3} triggerOnce>
                <div className="hometext">
                    <h1 className="name">{data.name}</h1>
                    <div className="textanimation">
                        <h2 className="im">I'm</h2>
                        <span>&nbsp;</span>
                        <Typewriter
                            options={{
                                strings: data.roles,
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
                    <div className="home-paragraph" style={{ color: theme.color }}>
                        {Array.isArray(data.paragraph)
                            ? data.paragraph.map((p, i) => (<p key={i}>{p}</p>))
                            : <p>{data.paragraph}</p>}
                    </div>
                    <div className="home-actions">
                        <a className="btn-hero primary" href={`${process.env.PUBLIC_URL}/profile/Len-Monireach-CV.pdf`} download>Download CV</a>
                        <a className="btn-hero secondary" href="/contact" onClick={(e) => { e.preventDefault(); const el = document.getElementById('/contact'); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}>Contact Me</a>
                    </div>
                </div>
            </Fade>
        </div>
    ) : (<FallbackSpinner />)
}

export default Home