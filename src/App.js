import React from 'react';
import './App.css';
import Portfolio from './container/Portfolio';
import Header from './components/Header/Header';
import Languages from "./utils/languages";

function App() {
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
      <Header language={lang.default} callUpdateLanguage={(i) => updateLang(i)} />
      <Portfolio language={lang.content} />
    </>
  )
}

export default App;
