import React from "react";
import styled from "styled-components";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import Error from "../ErrorMessage";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import SearchBar from "../SearchBar/SearchBar";

// file imports
import Nav from "./Nav";
import Cart from "../Cart/Cart";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};
const Header = () => (
  //Listen to Router

  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Denovo</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <SearchBar />
      {/* <Search /> */}
    </div>
    <Cart />
  </StyledHeader>
);
/* Styled Components:
 *  Logo * StyledHeader
 */

const Logo = styled.h1`
  font-size: 3rem;
  margin-left: 1.5rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
  }
`;
export default Header;
export { StyledHeader, Logo };
