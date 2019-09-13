/* User account  */

// file imports
import Footer from "../components/utils/Footer";
import MinHeader from "../components/utils/MinHeader";
import Account from "../components/Accounts/Account";

const AccountPage = ({ query }) => {
  return (
    <>
      <MinHeader />
      <Account />
      <Footer />
    </>
  );
};

export default AccountPage;
