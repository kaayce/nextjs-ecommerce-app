/* Address component  ️ */
import styled from "styled-components";
import { LayoutWrapper, GridContainer } from "../utils/Grid";

// Address Component
const Address = () => {
  return (
    <LayoutWrapper style={{ height: "100vh" }}>
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
          Find Us
        </h3>{" "}
        <br />
        <MapOuter>
          <GoogleMapCanvas>
            <iframe
              width="100%"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=8%20familoni%20street&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
            <a href="" />
          </GoogleMapCanvas>
        </MapOuter>
      </GridContainer>
    </LayoutWrapper>
  );
};
/*   Styled Components:
  CardContainer * Card
  */

// outer map
const MapOuter = styled.div`
  position: relative;
  text-align: right;
  height: 400px;
  width: 100%;
`;
// Google Maps Canvas
const GoogleMapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  height: 400px;
  width: 100%;
`;

export default Address;

/* Address component  ️ */
