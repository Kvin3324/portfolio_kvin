import React from 'react';
import { createGlobalStyle } from "styled-components";
import Portfolio from './container/Portfolio';
import Header from './components/Header/Header';
import Languages from "./utils/languages";

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: #F7F6F7;
      text-align: center;
      max-width: 939px;
      margin: 0 auto;
      padding: 0 20px;
    };
  `;

  const [lang, setLang] = React.useState({
    default: "fr",
    content: Languages.fr
  });

  function updateLang(newLanguage) {
    setLang({
      default: newLanguage,
      content: Languages[newLanguage]
    });
  }

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header language={lang.default} callUpdateLanguage={(i) => updateLang(i)} />
      <Portfolio language={lang.content} />
    </>
  )
}

export default App;