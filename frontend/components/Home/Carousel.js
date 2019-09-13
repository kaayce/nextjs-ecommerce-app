/* Carousel component  ️ */
import Slider from "react-styled-carousel";
import styled from "styled-components";

// file imports
import dorman from "../../static/banks/dorman.png";
import gtBank from "../../static/banks/gtbank.png";
import mainOne from "../../static/banks/mainOne.png";
import redeem from "../../static/banks/redeem.png";
import seven from "../../static/banks/seven.png";
import sterling from "../../static/banks/sterling.png";
import uba from "../../static/banks/uba.png";
import vdt from "../../static/banks/vdt.png";
import zenith from "../../static/banks/zenith.png";

const responsive = [
  // will be applied if screen size is >1280px
  { breakPoint: 1280, cardsToShow: 4 }, // cardsToShow will become 4
  { breakPoint: 1024, cardsToShow: 3 },
  // will be applied if screen size is >760px
  { breakPoint: 760, cardsToShow: 2 },
  { breakPoint: 600, cardsToShow: 2 },
  { breakPoint: 480, cardsToShow: 1 },
];

const Carousel = () => (
  <div>
    <Slider
      responsive={responsive}
      autoSlide={2000}
      pauseOnMouseOver={true}
      cardsToShow={5}
      showArrows={true}
      showDots={false}
      infinite={true}
    >
      {/* 1 */}

      <CardContainer>
        <Card>
          {" "}
          <img
            src={dorman}
            alt="Dorman Engineering"
            width="150px"
            height="80px"
          />
        </Card>
      </CardContainer>
      {/* 2 */}
      <CardContainer>
        <Card>
          {" "}
          <img src={gtBank} alt="GTBank" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 3 */}
      <CardContainer>
        <Card>
          {" "}
          <img src={mainOne} alt="Main One" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 4 */}
      <CardContainer>
        <Card>
          {" "}
          <img
            src={redeem}
            alt="Reedemer University"
            width="150px"
            height="80px"
          />
        </Card>
      </CardContainer>
      {/* 5 */}
      <CardContainer>
        <Card>
          {" "}
          <img src={seven} alt="Seven Energy" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 6 */}
      <CardContainer>
        <Card>
          {" "}
          <img src={sterling} alt="Sterling Bank" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 7 */}
      <CardContainer>
        <Card>
          {" "}
          <img src={uba} alt="UBA" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 8 */}
      <CardContainer>
        <Card>
          {" "}
          <img src={vdt} alt="VDT" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 9 */}
      <CardContainer>
        <Card>
          {" "}
          <img src={zenith} alt="Zenith Bank" width="150px" height="80px" />
        </Card>
      </CardContainer>
    </Slider>
  </div>
);

/*   Styled Components:
  CardContainer * Card
  */
const CardContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 20px;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-items: space-between;
  align-self: center;
  padding: 30px;
  background: white;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(96, 37, 102, 0.5);
  border-radius: 10px;
`;

export default Carousel;
/* Carousel component  ️ */
