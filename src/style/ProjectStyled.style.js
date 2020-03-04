import styled from "styled-components";

const ProjectStyled = styled.section`
  text-align: left;
  line-height: 5px;
    div {
      display: flex;
    }
    ul {
      margin: 0;
      list-style-type: none;
      padding: 0 15px;
      li {
        font-family: "Open Sans",sans-serif;
        font-size: 13.5px;
        margin: 15px 0;
          a {
            color: rgb(25, 39, 53);
            font-weight: bold;
              &:hover {
                text-decoration-color: #F0DB4F;
              }
          }
      }
    }
`

export default ProjectStyled