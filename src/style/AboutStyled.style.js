import styled from "styled-components";

const AboutStyled = styled.div`
line-height: 25px;
text-align: left;
font-size: 1.4em;
  p {
    font-family: 'Nunito';
  }
  .about--content {
    display: flex;
    .about--one {
      margin-top: 12px;
    }
  }

  @media screen and (min-width: 320px) {
    p {
      line-height: normal;
      font-size: 0.7em;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 812px) {
    p {
      font-size: 0.9em;
    }
  }
`

export default AboutStyled