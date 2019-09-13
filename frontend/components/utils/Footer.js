/* Footer   ️ */
import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #222;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  width: 100%;
  bottom: 0;
  position: fixed;
  /* left: 0;
  right: 0; */
  text-align: center;
  z-index: 999;
  & i {
    color: red;
  }
  & a {
    color: #3c97bf;
    text-decoration: none;
  }
`;
const ParaFooter = styled.div`
  margin: 5px 0;
`;
export default function Footer() {
  return (
    <FooterDiv>
      <ParaFooter>
        Created with ❤️ by Patrick Nzediegwu ©️
        {new Date().getFullYear()}
      </ParaFooter>
    </FooterDiv>
  );
}

/* Footer   ️ */
