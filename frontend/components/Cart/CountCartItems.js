/* Count Items in Cart component  */
import React from "react";
import { Mutation, Query } from "react-apollo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import gql from "graphql-tag";
import styled from "styled-components";

const AnimatedDot = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: scale(1.1) rotateX(0.5turn);
  }
`;

const Dot = styled.div`
  background: ${props => props.theme.red};
  border-radius: 50%;
  color: white;
  margin: 0 0.4rem;
  padding: 0.5rem;
  line-height: 2rem;
  min-width: 3rem;
  font-weight: 70;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
`;

const CountCartItems = ({ count }) => (
  <AnimatedDot>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={count}
        timeout={{ enter: 400, exit: 400 }}
      >
        <Dot>{count}</Dot>
      </CSSTransition>
    </TransitionGroup>
  </AnimatedDot>
);
export default CountCartItems;
