/* Footer component  ️ */

// imports
import styled from "styled-components";
import Link from "next/link";

// Footer component
const Footer = () => {
  return (
    <FooterDiv>
      <div class="contain">
        <div class="col">
          <h1>Denovo</h1>
          <ul>
            <li>
              <a href="#">Corporate Site</a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>Get in touch</li>
            <li>©️ {new Date().getFullYear()} Patrick Nzediegwu</li>
          </ul>
        </div>
        <div class="col">
          <h1>MarketPlace</h1>
          <ul>
            <li>
              <Link href="/store">
                <a>Database Security</a>
              </Link>
            </li>
            <li>
              <Link href="/store">
                <a>Endpoint Security</a>
              </Link>
            </li>
            <li>
              <Link href="/store">
                <a>Backup & Recovery</a>
              </Link>
            </li>
            <li>
              <Link href="/store">
                <a>Email Archiving</a>
              </Link>
            </li>
            <li>
              <Link href="/store">
                <a>Security Assessments</a>
              </Link>
            </li>
          </ul>
        </div>
        <div class="col">
          <h1>Support</h1>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <h1>Connect with Us</h1>
          <ul>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
        <div class="clearfix" />
      </div>
    </FooterDiv>
  );
};

const FooterDiv = styled.footer`
  width: 100%;
  position: relative;
  height: auto;
  background-color: #070617;

  &.col {
    width: 190px;
    height: auto;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 20px 20px 20px;
  }
  &.col h1 {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: 12px;
    line-height: 17px;
    padding: 20px 0px 5px 0px;
    color: rgba(255, 255, 255, 0.2);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }
  &.col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  &.col ul li {
    color: #999999;
    font-size: 14px;
    font-family: inherit;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
  }
  &.social ul li {
    display: inline-block;
    padding-right: 5px !important;
  }

  &.col ul li:hover {
    color: #ffffff;
    transition: 0.1s;
    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
  }
  &.clearfix {
    clear: both;
  }
  @media only screen and (min-width: 1280px) {
    .contain {
      width: 1200px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 1139px) {
    .contain .social {
      width: 1000px;
      display: block;
    }
    .social h1 {
      margin: 0px;
    }
  }
  @media only screen and (max-width: 950px) {
    .col {
      width: 33%;
    }
    .col h1 {
      font-size: 14px;
    }
    .col ul li {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 500px) {
    .col {
      width: 50%;
    }
    .col h1 {
      font-size: 14px;
    }
    .col ul li {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 340px) {
    .col {
      width: 100%;
    }
  }
`;
export default Footer;
/* Footer component  ️ */
