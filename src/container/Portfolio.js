import React, { useState, useEffect } from "react";
import ProjectStyled from "../components/Projects/ProjectStyled.style";
import Chips from "../components/Chips/Chips";
//import PortfolioStyled from "../components/Header/HeaderStyled.style";
// import FrenchPortfolio from "../components/Portfolios/FrenchPortfolio";
// import EnglishPortfolio from "../components/Portfolios/EnglishPortfolio";

function Portfolio(props) {
  const [data, setData] = useState({
    data: []
  });

  useEffect(() => {
    fetch("https://api.github.com/users/kvin3324/repos?sort=pushed&per_page=10")
      .then(response => response.json())
      .then(dataParsed => setData({
        data: dataParsed
      }))
      .catch(error => console.log(error))
  }, [])

  if (data.data.length === 0) return "loading";
  return (
    <React.Fragment>

    {
      <p>  {props.language.about}   </p>
    }

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

    {
      <div className="contact">
        {
          <p>{props.language.contactLinkedin} <a href="https://www.linkedin.com/in/k%C3%A9vin-joya-5b6250133/" target="_blank" rel="noopener noreferrer">Linkedin</a> {props.language.contactGithub} <a href="https://github.com/Kvin3324" target="_blank">Github</a></p>
        }
      </div>
    }

    </React.Fragment>
  )
}

export default Portfolio