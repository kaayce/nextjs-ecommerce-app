import DisplaySingleProduct from "../components/Store/DisplaySingleProduct";
import Header from "../components/Store/Header";
import Footer from "../components/utils/Footer";

const Product = props => (
  <>
    <Header />
    <DisplaySingleProduct id={props.query.id} />
    <Footer />
  </>
);

export default Product;
