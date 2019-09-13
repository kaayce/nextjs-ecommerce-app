/* Wrapper for all pages  ️ */

// imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

// file imports
import Meta from "./utils/Meta";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightGrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

// inject global styles
injectGlobal`
@font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
 html {
    box-sizing: border-box;
    font-size: 10px;
  }
*, *:before, *:after {
    box-sizing: inherit;
  }
body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;

  }
  button {  font-family: 'radnika_next'; }
`;

const MainWrapperPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainWrapperPage>
          <Meta />

          {this.props.children}
        </MainWrapperPage>
      </ThemeProvider>
    );
  }
}

Page.propTypes = {};

export default Page;

/* ***************************** ️ */
