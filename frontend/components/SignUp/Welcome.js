/* This holds all signup/signIn/reset components */

/* Imports */
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
class Welcome extends Component {
  state = {
    addClass: false,
  };

  toggle = () => {
    this.setState({ addClass: !this.state.addClass });
  };

  render() {
    let divClass = ["containers"];
    const { addClass } = this.state;
    if (addClass) {
      divClass.push("right-panel-active");
    }
    return (
      <>
        <WelcomeContainer>
          <div className="bod">
            <div className={divClass.join(" ")}>
              <div className="form-container sign-up-container">
                {/** Sign Up form code goes here */}
                <SignUp />
              </div>
              <div className="form-container sign-in-container">
                {/** Sign In form code goes here */}
                <SignIn />
              </div>
              <div className="overlay-container">
                {/** The overlay code goes here */}
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1 className="header1">Welcome Back!</h1>
                    <p className="para">
                      To keep connected with us please login with your personal
                      information
                    </p>
                    <a className="ghost btn" onClick={this.toggle}>
                      Sign In
                    </a>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1 className="header1">Hello!</h1>
                    <p className="para">
                      Enter your personal details and start your journey with us
                    </p>
                    <a className="ghost btn" onClick={this.toggle}>
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </WelcomeContainer>
      </>
    );
  }
}

/* Styled Components */
const show = keyframes`
0%,49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,100% {
      opacity: 1;
      z-index: 5;
    }
`;
const WelcomeContainer = styled.div`
  .bod {
    background: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    height: 80vh;
    margin: -30px 0 25px;
    @media (max-width: 420px) {
      margin: -20px 2px 50px;
    }
    @media (max-width: 768px) {
      margin: -20px 20px 50px;
    }
  }
  .header1 {
    font-weight: bold;
    margin: 0;
    line-height: 30px;
  }
  .header2 {
    text-align: center;
  }
  .para {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  span {
    font-size: 12px;
    line-height: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
    line-height: 20px;
  }
  .btn {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    padding: 1.2rem 4rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    @media (max-width: 380px) {
      margin: 0;
      padding: 1rem 1rem;
      width: 11rem;
    }
    &:hover {
      transition: 0.1s;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
      color: #ff4b2b;
      background: white;
    }
  }
  .btn:active {
    transform: scale(0.95);
  }

  .btn:focus {
    outline: none;
  }
  .btn.ghost {
    background-color: transparent;
    border-color: #ffffff;
    &:hover {
      transition: 0.1s;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
      color: #ff4b2b;
      background: white;
    }
  }
  .forms {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }
  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    border-radius: 20px;
    outline: none;
  }
  .containers {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }
  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }
  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }
  .containers.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }
  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }
  .containers.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: ${show} 0.6s;
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }
  .containers.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }
  .overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }
  .containers.right-panel-active .overlay {
    transform: translateX(50%);
  }
  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }
  .overlay-left {
    transform: translateX(-20%);
  }
  .containers.right-panel-active .overlay-left {
    transform: translateX(0);
  }
  .overlay-right {
    right: 0;
    transform: translateX(0);
  }
  .containers.right-panel-active .overlay-right {
    transform: translateX(20%);
  }
`;

export default Welcome;
