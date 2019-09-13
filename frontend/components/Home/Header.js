/* Header component  ️ */

// dev imports
import styled from "styled-components";
// import Router from "next/router";
// import NProgress from "nprogress";

// file imports
import Link from "next/link";
import logo from "../../static/svg/logo.svg";
/*
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
}; */
/* Header Component */
const Header = props => {
  return (
    <div>
      <HeroDiv>
        <AppLogo src={logo} alt="Denovo" width="150px" height="100px" />
        {/* <NavBar />  */}

        <Link prefetch href="/store">
          <Button>Visit Store</Button>
        </Link>
        <Link prefetch href="/welcome">
          <Button positionRight>Log In</Button>
        </Link>
        <HeroText>
          <h1>Denovo</h1>
          <p style={{ fontSize: "18px" }}>
            <strong>Stay Safe for Less</strong>
          </p>
          {/* <span style={{ color: 'white' }}>
                Strengthen your information security and protect
                your data at a lower cost
            </span> */}
        </HeroText>
      </HeroDiv>
    </div>
  );
};

export default Header;

/* Styled Components:
 *  Applogo * HeroDiv  * HeroText  * Button
 */
const AppLogo = styled.img`
  position: absolute;
  top: 2%;
  left: 5%;
`;
const HeroDiv = styled.div`
  background: linear-gradient(
      rgba(224, 122, 122, 0.8),
      rgba(240, 153, 153, 0.5)
    ),
    url("/static/img/hero.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
  margin: 0;
  padding: 0;
`;
const HeroText = styled.div`
  text-align: right;
  position: absolute;
  bottom: 32%;
  right: 21%;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  h1 {
    font-size: 50px;
    padding-bottom: 0;
  }
`;
const Button = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  border: 2px solid ##c0070b;
  margin: 0.6rem 1em;
  padding: 0.6em 1em;
  transition: 0.5s all ease-out;
  width: 17rem;
  text-align: center;
  position: absolute;
  bottom: 22%;
  right: ${props => (props.positionRight ? "30%" : "16%")};
  &:hover {
    background: ${props => props.theme.red};
    color: ${props => props.theme.offWhite};
    border: 1px solid rgba(235, 0, 0, 0.7);
  }
`;
/* Styled components end  */

/* Header component  ️ */
