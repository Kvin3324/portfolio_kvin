import React from "react";
import Introduction from "../Introduction/Introduction";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function FrenchPortfolio(props) {
  return(
    <>
      <Introduction />
      <Projects data = {props.data} />
      <Contact />
    </>
  )
}

export default FrenchPortfolio