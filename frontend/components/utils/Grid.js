/* NavBar component  ️ */

// imports
import styled from "styled-components";
// import { css } from 'styled-components'

// Custom Grid component
// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 10}rem`;

// Function for calculating value for width
const getWidth = value => {
  if (!value) return;

  let width = (value / 12) * 100;
  return `width: ${width}%;`;
};

// Function for calculating value for flex
const getFlex = value => {
  if (!value) return;

  let flex = (value / 12) * 100;
  return `flex: 0 0 ${flex}%;`;
};

const LayoutWrapper = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;

  // Fix for applying proper box-sizing
  html:not(&) {
    box-sizing: border-box;

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body:not(&) {
    font: 16px / 1.618 Arial, Verdana, sans-serif;
  }
`;
// Grid container

const PageContainer = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: center;

  // Breakpoint for tablets
  @media (min-width: 576px) {
    max-width: ${remy(540)};
  }

  // Breakpoint for small desktops
  @media (min-width: 768px) {
    max-width: ${remy(720)};
  }

  // Breakpoint for medium desktops
  @media (min-width: 992px) {
    max-width: ${remy(9600)};
  }

  // Breakpoint for large desktops and HD devices
  @media (min-width: 1200px) {
    max-width: ${remy(1140)};
  }
`;
//
const GridContainer = styled.div`
  padding: ${remy(15)} auto;
  margin: auto;
  width: 100%;

  // Breakpoint for tablets
  @media (min-width: 576px) {
    max-width: ${remy(540)};
  }

  // Breakpoint for small desktops
  @media (min-width: 768px) {
    max-width: ${remy(720)};
  }

  // Breakpoint for medium desktops
  @media (min-width: 992px) {
    max-width: ${remy(9600)};
  }

  // Breakpoint for large desktops and HD devices
  @media (min-width: 1200px) {
    max-width: ${remy(1140)};
  }
`;

// Grid row
const GridRow = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`;

// Grid columns
const GridColumn = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  padding-bottom: ${remy(20)};
  padding-top: ${remy(20)};

  // Columns for mobile
  ${({ xs }) => (xs ? getFlex(xs) : "flex: 0 0 100%")};
  ${({ xs }) => (xs ? getWidth(xs) : "width: 100%")};

  // Columns for tablets
  @media (min-width: 576px) {
    ${({ sm }) => sm && getFlex(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }

  // Columns for small desktops
  @media (min-width: 768px) {
    ${({ md }) => md && getFlex(md)};
    ${({ md }) => md && getWidth(md)};
  }

  // Columns for medium desktops
  @media (min-width: 992px) {
    ${({ lg }) => lg && getFlex(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }

  // Columns for large desktops and HD devices
  @media (min-width: 1200px) {
    ${({ xl }) => xl && getFlex(xl)};
    ${({ xl }) => xl && getWidth(xl)};
  }
`;
export {
  remy,
  getWidth,
  getFlex,
  LayoutWrapper,
  PageContainer,
  GridContainer,
  GridRow,
  GridColumn,
};

/* Grid component  ️ */
