/* HomePage  ️ */

// dev imports
import PropTypes from "prop-types";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import styled from "styled-components";

// file imports
import Header from "../components/Home/Header";
import Services from "../components/Home/Services";
import Clients from "../components/Home/Clients";
import Testimonial from "../components/Home/Testimonial";
import Address from "../components/Home/Address";
import Footers from "../components/Home/Footers";

//Home Component
const Home = props => {
  return (
    <>
      <Header />
      <Services /> <br />
      <Clients /> <br />
      <Testimonial />
      <Address />
      <Footers />
      <CookieConsent
        location="bottom"
        buttonText="Got it!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          color: "#4e503b",
          fontSize: "13px",
          borderRadius: "10px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </>
  );
};

Home.propTypes = {};

export default Home;

/* HomePage  ️ */
/* <Link href="/">
        <a>Home</a>
      </Link> */
