/* Footer component  ️ */

// imports
import styled from "styled-components";
import Link from "next/link";

// Footer component
const Footers = () => {
  return (
    <>
      <FooterDiv>
        <GridFooterContainer>
          <GridFooterItems>
            <h3>Denovo</h3>
            <ul>
              <li>
                <a href="#">Corporate Site</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>©️ {new Date().getFullYear()} Patrick Nzediegwu</li>
            </ul>
          </GridFooterItems>
          <GridFooterItems>
            <h3>MarketPlace</h3>
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
          </GridFooterItems>
          <GridFooterItems>
            <h3>Connect with Us</h3>
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
          </GridFooterItems>
          <GridFooterItems>
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </GridFooterItems>

          <GridFooterItems>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <Forms>
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </Forms>
          </GridFooterItems>
        </GridFooterContainer>
      </FooterDiv>
    </>
  );
};
const Forms = styled.div`
  form {
    display: flex;
    flex-wrap: wrap;
  }

  input[type="email"] {
    border: 0;
    padding: 0.625rem;
    margin-top: 0.3125rem;
    border-radius: 10px;
  }
  input[type="submit"] {
    background-color: #00d188;
    color: #fff;
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    padding: 0.625rem 0.9375rem;
    margin-top: 0.3125rem;
  }
`;
const FooterDiv = styled.footer`
  width: 100%;
  position: relative;
  height: auto;
  background-color: #f2f2f2;
  padding: 30px 50px;
`;
const GridFooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const GridFooterItems = styled.div`
  h3 {
    margin: 0;
    font-family: inherit;
    font-size: 2rem;
    line-height: 17px;
    padding: 15px 0px 15px 0px;
    color: darkgray;
    font-weight: bold;
    letter-spacing: 0.1em;
  }
  p {
    color: gray;
    font-size: 1.2rem;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    color: gray;
    font-size: 14px;
    font-family: inherit;
    font-weight: normal;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
  }
  a {
    color: gray;
  }
  a:hover {
    color: black;
    transition: 0.1s;
    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
  }
  ul li:hover {
    color: black;
    transition: 0.1s;
    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
  }
`;

export default Footers;
