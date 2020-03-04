import React from "react";
import HeaderStyled from "../../style/HeaderStyled.style";
import Languages from "../../utils/languages.json";

function Header(props) {
  console.log(Languages);
  const [data, setData] = React.useState({
    languages: Object.keys(Languages),
  })

  function changeLanguage(e) {
    if (props.language === e.target.value) return null;
    props.callUpdateLanguage(e.target.value);
  }

  return(
    <HeaderStyled as="header">
      <h1>Hello it's me, Kévin <span role="img" aria-label="hello--emoji">👋</span></h1>
        <select onChange={changeLanguage}>
          {
            data.languages.map((language, index) => <option key={index}>{language}</option>)
          }
        </select>
      </HeaderStyled>
  )
}

export default Header