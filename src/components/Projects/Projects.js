import React from "react";
import ProjectStyled from "./ProjectStyled.style";
import Chips from "../Chips/Chips";

function Projects(props) {
  return (
    <ProjectStyled>
      <h4>Repos</h4>
      <ul>
        {
          props.data.map((project, index) => {
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
  )
}

export default Projects