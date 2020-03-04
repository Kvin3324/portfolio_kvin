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
`

export default HeaderStyled
