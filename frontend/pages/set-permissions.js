/* Allow Admin set permissions  ️ */
import styled from "styled-components";
import AdminHeader from "../components/Store/AdminHeader";

import Footer from "../components/utils/Footer.js";
import SetPermissions from "../components/Admin/SetPermissions";
import SignInCheck from "../components/Admin/SignInCheck";
const Permissions = props => {
  return (
    <>
      <AdminHeader />
      <MarginContainer>
        <SignInCheck>
          <SetPermissions />
        </SignInCheck>
      </MarginContainer>
      <Footer />
    </>
  );
};
const MarginContainer = styled.div`
  margin: 20px 30px;
`;
export default Permissions;

/* Allow Admin set user permissions ️ */
