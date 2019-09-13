/* request Password  ️ */
/* 1st step before we reset passsword - gets reset token sent to user email */

// file imports
import Footer from "../components/utils/Footer";
import styled from "styled-components";
import MinHeader from "../components/utils/MinHeader";
import Welcome from "../components/SignUp/Welcome";
import RequestReset from "../components/SignUp/RequestResetToken";

const PasswordRequest = props => {
  return (
    <>
      <MinHeader />
      <FormContainer>
        <div className="mainContainer">
          <div className="containers">
            <RequestReset />
          </div>
        </div>
      </FormContainer>
      <Footer />
    </>
  );
};
const FormContainer = styled.div`
  .mainContainer {
    background: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    margin: 10px 20px;
  }
  .forms {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 50px;
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
    margin: 10px 0;
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
    width: 500px;
    max-width: 100%;
    min-height: 380px;
    padding: 10px 20px;
  }
  .header {
    font-weight: bold;
    margin: 0;
    line-height: 20px;
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
`;

export default PasswordRequest;
export { FormContainer };

/* request Password  ️ */
