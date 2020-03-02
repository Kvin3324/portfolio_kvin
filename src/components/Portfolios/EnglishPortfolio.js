import React from "react";
import About from "../Introduction/About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/EnglishContact/Contact";

function EnglishPortfolio(props) {
  return(
    <>
      <About />
      <Projects data = {props.data} />
      <Contact />
    </>
  )
}

export default EnglishPortfolio