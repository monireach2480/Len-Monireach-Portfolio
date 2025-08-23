import React, { useState } from "react";
import "./DefaultContainers.css?v=1.0";
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from '../../theme/ThemeContext.jsx'; // Adjusted import path
import { Fade } from "react-awesome-reveal";


const DefaultContainers = (props) => {
  const { sectionType } = props;
  const bullets = sectionType && sectionType.bodyText ? sectionType.bodyText.split(/\r\n|\r|\n/) : [];
  const [showMore, setShowMore] = useState(false);
  const { theme } = useTheme();

  const iconSlugMap = {
  'c': 'c',
  'c++': 'cplusplus',
  'javascript': 'javascript',
  'python': 'python',
  'java': 'oracle',       // ✅ Fix: Java slug is "oracle"
  'css': 'css3',          // ✅ Add mapping for "css"
  'css3': 'css3',
  'html': 'html5',        // ✅ Add mapping for "html"
  'html5': 'html5',
  'bootstrap': 'bootstrap',
  'tailwindcss': 'tailwindcss',
  'react': 'react',
  'next.js': 'nextdotjs',
  'nextjs': 'nextdotjs',
  'node.js': 'nodedotjs',
  'nodejs': 'nodedotjs',
  'express.js': 'express',
  'express': 'express',
  'spring boot': 'springboot',
  'rest api': null,
  'jwt': 'jsonwebtokens',
  'mongodb': 'mongodb',
  'mysql': 'mysql',
  'sqlite': 'sqlite',
  'render': 'render',
  'vercel': 'vercel',
  'docker(basic)': 'docker',
  'docker': 'docker',
  'github actions': 'githubactions',
  'ci/cd': null,
  'git': 'git',
  'github': 'github',
  'postman': 'postman',
  'ms office suite': 'microsoftoffice',
  'vs code': 'visualstudiocode',
  'figma': 'figma',
  'android studio': 'androidstudio',
  'eclipse': 'eclipseide',
  'intellij idea': 'intellijidea',
  'jetbrains suite': 'jetbrains',
  'visual studio': 'visualstudio',
  'webstorm': 'webstorm',
};


  const getIconUrl = (tag) => {
    if (!tag) return null;
    const key = tag.trim().toLowerCase();
    const slug = iconSlugMap[key];
    if (!slug) return null;
    return `https://cdn.simpleicons.org/${slug}`;
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const fullBullets = () => {
    return (
      bullets.map((Text, index) => {
        return (
          <ul key={index}>
            <li>{Text}</li>
          </ul>
        );
      })
    )
  }
  const twoBullets = () => {
    return (
      <ul>
        <li>{bullets[0]}</li>
        <li>{bullets[1]}....</li>
      </ul>
    );
  }
  const regularText = () => {
    return (
      <p>{bullets}</p>
    );
  }
  return (
    <Fade  duration={5000} cascade damping={0.5}>
      <div className="container">

        {sectionType?.image &&
          <img className="image"
            src={sectionType?.image}
            // onClick={handleShow}
            alt="ProjectImage" />}
        <div className="container-content">
        <h3>{sectionType.title}</h3>
        {sectionType.bodyText && (
          bullets.length > 2 ?
            (<div className="button">
              {showMore ? fullBullets() : twoBullets()}
              <Button variant="primary" onClick={toggleShowMore}>
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </div>
            ) : (
              <div className="regularText">
                {regularText()}
              </div>
            )
        )
        }
        {sectionType.links && (
          <div className="links">
            {sectionType?.links?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.color, border: `1px solid ${theme.color}` }}
              >
                <FontAwesomeIcon
                  style={{
                    marginRight: "5px",
                    color: theme.socialIconBgColor
                  }}
                  icon={faGithub} />
                {link.text}
              </a>
            ))}
          </div>
        )}
        <div className="tags-container"
          style={{ background: theme.tagContainerBg }}>
          {sectionType?.tags?.map((tag, index) => {
            const iconUrl = getIconUrl(tag);
            return (
              <span key={index} className="badge">
                {iconUrl && (
                  <img className="tech-icon" src={iconUrl} alt={`${tag} logo`} loading="lazy" />
                )}
                {tag}
              </span>
            );
          })}
        </div>
        </div>
        <div className="footerUrl"
          style={{ background: theme.tagContainerBg }}>
          {sectionType.credentialUrl &&
            <a
              href={sectionType?.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.color, border: `1px solid ${theme.color}` }}
            >
              Verify Credential
            </a>}
        </div>
      </div>
    </Fade>
  );
};
export default DefaultContainers;