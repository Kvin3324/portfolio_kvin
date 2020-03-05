import React, { useState, useEffect } from "react";
import ProjectStyled from "../style/ProjectStyled.style";
import Chips from "../components/Chips/Chips";
import AboutStyled from "../style/AboutStyled.style";
import ContactStyled from "../style/ContactStyled.style";
import Loader from "../components/Loader/Loader";

function Portfolio(props) {
  const [data, setData] = useState({
    data: []
  });

  useEffect(() => {
    fetch("https://api.github.com/user/repos?sort=pushed&per_page=10", {
      method: "get",
      headers: {
              "Authorization": `token ${process.env.REACT_APP_APIKEY}`,
              "User-Agent": "Kvin3324",
      }
    })
      .then(response => response.json())
      .then(dataParsed => setData({
        data: dataParsed
      }))
      .catch(error => console.log(error))
  }, [])

  if (data.data.length === 0) return <Loader />;
  return (
    <React.Fragment>
      <AboutStyled className="about">
        <p>{props.language.about}</p>
        <p>{props.language.aboutTwo}</p>
      </AboutStyled>
      <ProjectStyled>
        <h4>Repos</h4>
        <ul>
          {
            data.data.map((project, index) => {
              return (
                <div key={index}>
                  <li key={index}>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a>
                  </li>
                  <Chips content={project.language} />
                </div>
              )
            })
          }
        </ul>
      </ProjectStyled>
      <ContactStyled className="contact">
        <p>{props.language.contactLinkedin} <a href="https://www.linkedin.com/in/k%C3%A9vin-joya-5b6250133/" target="_blank" rel="noopener noreferrer">Linkedin</a> {props.language.contactGithub} <a href="https://github.com/Kvin3324" target="_blank" rel="noopener noreferrer">Github</a>.<span role="img" aria-label="contact--emoji">📱</span></p>
      </ContactStyled>
    </React.Fragment>
  )
}

export default Portfolio