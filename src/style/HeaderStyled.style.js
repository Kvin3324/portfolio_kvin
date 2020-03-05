import styled from "styled-components";
import Container from "../utils/Container";

const HeaderStyled = styled(Container)`
  display: flex;
  margin: 0;
  padding: 0;
  select {
    border: none;
    height: 30px;
    width: 4%;
    margin-top: 5%;
    margin-left: 52%;
  }
  h1 {
    font-family: 'Roboto';
    font-size: 2.5em;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 3em!important;
    }
    select {
      margin-top: 6%!important;
      margin-left: 20%!important;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 812px) {
    h1 {
      font-size: 2.1em;
    }
    select {
      width: 10%;
      margin-left: 1px;
      margin-top: 0;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 560px) {
    display: inline;
    h1 {
      font-size: 1.8em;
    }
    select {
      width: 10%;
      margin-left: 1px;
      margin-top: 0;
    }
  }
`

export default HeaderStyled
