import React, { useState, useEffect } from "react";
import PortfolioStyled from "./PortfolioStyled.style";
import FrenchPortfolio from "../components/Portfolios/FrenchPortfolio";
import EnglishPortfolio from "../components/Portfolios/EnglishPortfolio";

function Portfolio() {
  const [data, setData] = useState({
    data: [],
    chooseLanguage: false
  });

  useEffect(() => {
    fetch("https://api.github.com/users/kvin3324/repos?sort=pushed&per_page=10")
      .then(response => response.json())
      .then(dataParsed => setData({
        data: dataParsed
      }))
      .catch(error => console.log(error))
  }, [])

  function changeLanguage(e) {
    console.log(e.target.className);
    const newState = { ...data };

    if (e.target.className === "languages--english") {
      newState.chooseLanguage = true;
    } else {
      newState.chooseLanguage = false;
    }

    setData(newState);
  }

  if (data.data.length === 0) return "loading";
  return (
    <React.Fragment>
      <PortfolioStyled>Hello it's me, Kévin</PortfolioStyled>
        <nav onClick={(e) => changeLanguage(e)}>
          <div className="languages">
            <div className="languages--french">
            <img class="flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg" alt="France Flag" style={{width: "24px", paddingRight: "10px"}}></img>
              French
            </div>
            <div className="languages--english">
              <img class="flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" alt="United Kingdom Flag" style={{width: "24px", paddingRight: "10px"}}></img>
              English
            </div>
          </div>
        </nav>
      {
    function () {
      if (data.chooseLanguage === true) {
        return (
          <EnglishPortfolio data={data.data} />
        )
      } else {
        return (
          <FrenchPortfolio data={data.data} />
        )
      }
    } ()
  }

    </React.Fragment >
  )
}

export default Portfolio