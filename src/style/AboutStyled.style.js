import styled from "styled-components";

const AboutStyled = styled.div`
line-height: 25px;
text-align: left;
font-size: 1.4em;
  p {
    font-family: 'Nunito';
  }
  .about--one {
    line-height: 4px;
  }

  @media screen and (min-width: 375px) and (max-width: 812px) {
    p {
      line-height: normal!important;
      font-size: 0.9em!important;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 560px) {
    p {
      line-height: normal!important;
      font-size: 0.7em;
    }
`

export default AboutStyled