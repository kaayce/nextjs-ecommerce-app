/* Admin Update forms */
import EditProduct from "../components/Admin/EditProduct";
import Footer from "../components/utils/Footer.js";
import AdminHeader from "../components/Store/AdminHeader";
const Admin = ({ query }) => (
  <>
    <AdminHeader />
    <EditProduct id={query.id} />
    <Footer />
  </>
);

export default Admin;
/* Admin Update forms */
