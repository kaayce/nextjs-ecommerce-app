import Carousel from "./Carousel";

import { LayoutWrapper, GridContainer } from "../utils/Grid";

const Clients = () => {
  return (
    <LayoutWrapper style={{ minHeight: "50vh" }}>
      <GridContainer>
        <h3
          style={{
            fontFamily: "'Lato', sans-serif",
            letterSpacing: "10px",
            fontSize: "2em",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Our Clients
        </h3>{" "}
        <br />
        <Carousel />
      </GridContainer>
    </LayoutWrapper>
  );
};
export default Clients;
