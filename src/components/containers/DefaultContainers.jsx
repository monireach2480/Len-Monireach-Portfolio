import React, { useState } from "react";
import "./DefaultContainers.css?v=1.0";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../../theme/ThemeContext.jsx";
import { Fade } from "react-awesome-reveal";

const DefaultContainers = (props) => {
  const { sectionType } = props;
  const bullets =
    sectionType && sectionType.bodyText
      ? sectionType.bodyText.split(/\r\n|\r|\n/)
      : [];
  const [showMore, setShowMore] = useState(false);
  const { theme } = useTheme();

  const iconSlugMap = {
  c: "c",
  "c++": "cplusplus",
  javascript: "javascript",
  typescript: "typescript",
  "react native": "react",
  expo: "expo",
  
  // Cloud
  aws: "amazonaws",   // ✅ correct slug
  "amazon web services": "amazonaws",
  
  // Databases
  postgresql: "postgresql",
  postgres: "postgresql",   
  posgresql: "postgresql",  
  
  // Languages
  python: "python",
  java: "java",       // ✅ correct slug
  css: "css3",
  css3: "css3",
  html: "html5",
  html5: "html5",
  
  // Frameworks
  bootstrap: "bootstrap",
  tailwindcss: "tailwindcss",
  react: "react",
  "next.js": "nextdotjs",
  nextjs: "nextdotjs",
  "node.js": "nodedotjs",
  nodejs: "nodedotjs",
  "express.js": "express",
  express: "express",
  "spring boot": "springboot",
  flask: "flask",
  
  // APIs & Auth
  "rest api": null,
  jwt: "jsonwebtokens",
  
  // Databases
  mongodb: "mongodb",
  mysql: "mysql",
  sqlite: "sqlite",
  
  // Hosting & DevOps
  render: "render",
  vercel: "vercel",
  "docker(basic)": "docker",
  docker: "docker",
  "github actions": "githubactions",
  "ci/cd": null,
  
  // Tools
  git: "git",
  github: "github",
  postman: "postman",
  "ms office suite": "microsoftoffice",
  "vs code": "visualstudiocode",
  figma: "figma",
  "android studio": "androidstudio",
  eclipse: "eclipseide",
  "intellij idea": "intellijidea",
  "jetbrains suite": "jetbrains",
  "visual studio": "visualstudio",
  webstorm: "webstorm",


  // --- Data Science & AI ---
  numpy: "numpy",
  pandas: "pandas",
  matplotlib: null,         // use FA `fa-chart-line` if you want
  seaborn: null,            // use FA `fa-water`
  "scikit-learn": "scikitlearn",
  tensorflow: "tensorflow",
  keras: "keras",
  pytorch: "pytorch",
  jupyter: "jupyter",
  "jupyter notebook": "jupyter",
  "sql for data analysis": null, // fallback DB icon
  "data visualization": null,    // FA `fa-chart-bar`
  "deep learning": null,         // FA `fa-brain`
  nlp: null,                     // FA `fa-comments`
  "computer vision": null,       // FA `fa-eye`
  "generative ai": null,         // FA `fa-wand-magic-sparkles`
  "apache spark": "apachespark",
  "power bi": "powerbi",
  tableau: "tableau",
  statistics: null,
  "predictive modeling": null,
};


  const getIconUrl = (tag) => {
    if (!tag) return null;
    const key = tag.trim().toLowerCase();
    const slug = iconSlugMap[key];
    if (!slug) return null;
    return `https://cdn.simpleicons.org/${slug}`;
  };

  const toggleShowMore = () => setShowMore(!showMore);

  const fullBullets = () =>
    bullets.map((text, index) => (
      <ul key={index}>
        <li>{text}</li>
      </ul>
    ));

  const twoBullets = () => (
    <ul>
      {bullets[0] && <li>{bullets[0]}</li>}
      {bullets[1] && <li>{bullets[1]}...</li>}
    </ul>
  );

  const regularText = () => (
    <div>
      {bullets.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </div>
  );

  return (
    <Fade duration={5000} cascade damping={0.5}>
      <div className="container">
        {sectionType?.image && (
          <img
            className="image"
            src={sectionType?.image}
            alt="ProjectImage"
          />
        )}

        <div className="container-content">
          <h3>{sectionType.title}</h3>

          {sectionType.bodyText && (
            bullets.length > 2 ? (
              <div className="button">
                {showMore ? fullBullets() : twoBullets()}
                <Button variant="primary" onClick={toggleShowMore}>
                  {showMore ? "Show Less" : "Show More"}
                </Button>
              </div>
            ) : (
              <div className="regularText">{regularText()}</div>
            )
          )}

          {sectionType.links && (
            <div className="links">
              {sectionType?.links?.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.color,
                    border: `1px solid ${theme.color}`,
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      marginRight: "5px",
                      color: theme.socialIconBgColor,
                    }}
                    icon={faGithub}
                  />
                  {link.text}
                </a>
              ))}
            </div>
          )}

          <div
            className="tags-container"
            style={{ background: theme.tagContainerBg }}
          >
            {sectionType?.tags?.map((tag, index) => {
              const iconUrl = getIconUrl(tag);
              return (
                <span key={index} className="badge">
                  {iconUrl && (
                    <img
                      className="tech-icon"
                      src={iconUrl}
                      alt={`${tag} logo`}
                      loading="lazy"
                    />
                  )}
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        <div
          className="footerUrl"
          style={{ background: theme.tagContainerBg }}
        >
          {sectionType?.credentialUrl && (
            <a
              href={sectionType?.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.color, border: `1px solid ${theme.color}` }}
            >
              Verify Credential
            </a>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default DefaultContainers;
