import React from "react";
import IntroductionStyled from "./IntroductionStyled.style";

function Introduction() {
  return(
    <IntroductionStyled>
      <p>
        Bienvenue sur mon noble site, je m'appelle Kévin et je suis développeur front-end Javascript. <i className="fab fa-js-square"></i><br></br>
        Je suis actif sur Github où vous pouvez retrouver tout ce que j'ai pu faire jusqu'à aujourd'hui, ça peut valoir le coup.😉
      </p>
    </IntroductionStyled>
  )
}

export default Introduction