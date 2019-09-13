//* Admin edit/delete component  ️ */
/* This is a lazy implementation -- needs refactor */
/*  wrap using a user componet with permissions query */
import AdminHeader from "../components/Store/AdminHeader";
import Footer from "../components/utils/Footer";
import AdminProducts from "../components/Store/AdminProducts";
import styled from "styled-components";

const Store = props => {
  return (
    <>
      <div>
        <AdminHeader />
        <AdminProducts page={parseFloat(props.query.page) || 1} />
        <FooterDiv>
          <ParaFooter>
            Created with ❤️ by Patrick Nzediegwu ©️
            {new Date().getFullYear()}
          </ParaFooter>
        </FooterDiv>
      </div>
    </>
  );
};

/*   Styled Components:
  CardContainer * Card
  */
const FooterDiv = styled.div`
  background-color: #222;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  & i {
    color: red;
  }
  & a {
    color: #3c97bf;
    text-decoration: none;
  }
`;
const ParaFooter = styled.div`
  margin-top: 5px;
`;
export default Store;
// /* Store component  ️ */
