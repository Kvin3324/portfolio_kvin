import styled from "styled-components";
import Container from "../utils/Container";

const HeaderStyled = styled(Container)`
  display: flex;
  margin: 0;
  padding: 0;
  select {
    background: none;
    border: none;
    border-bottom: 1px solid #3a3a3a;
    height: 30px;
    margin-top: 5%;
    margin-left: 52%;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-overflow: "";
  }
  h1 {
    font-family: "Roboto";
    font-size: 2.5em;
  }

  @media screen and (min-width: 300px) {
    flex-direction: column;
    align-items: center;
    select {
      margin-left: 0;
      width: 5%;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 560px) {
    display: inline;
    h1 {
      font-size: 1.8em;
    }
    select {
      margin-left: 1px;
      margin-top: 0;
    }
  }

  @media screen and (min-width: 480px) {
    select {
      width: 4%;
    }
  }

  @media (min-width: 768px) {
    flex-direction: initial;
    h1 {
      font-size: 3em;
    }
    select {
      margin-left: 20%;
      width: 3%;
    }
  }

  @media screen and (min-width: 1026px) {
    select {
      width: 2%;
    }
  }
`;

export default HeaderStyled;
