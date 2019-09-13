/* Admin  ️ */
import styled from "styled-components";
// import { LayoutWrapper, GridContainer } from "../components/utils/Grid";

import AddProduct from "../components/Admin/AddProduct";
import Footer from "../components/utils/Footer.js";
import SignInCheck from "../components/Admin/SignInCheck";
import AdminHeader from "../components/Store/AdminHeader";
const Admin = props => {
  return (
    <>
      <AdminHeader />
      <SignInCheck>
        <AddProduct />
      </SignInCheck>
      <Footer />
    </>
  );
};

export default Admin;

/* Admin  ️ */
