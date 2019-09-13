/* Testimonial component  ️ */
import Slider from "react-styled-carousel";
import styled from "styled-components";
import { LayoutWrapper, GridContainer } from "../utils/Grid";

const Testimonial = () => {
  return (
    <LayoutWrapper style={{ minHeight: "100vh" }}>
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
          Testimonials
        </h3>{" "}
        <div>
          <Slider
            autoSlide={4000}
            pauseOnMouseOver={true}
            cardsToShow={1}
            showArrows={false}
            showDots={true}
            infinite={true}
          >
            {/* 1 */}
            <Gallery>
              <Testimonials>
                <TestimonialAvatar src="https://s3.amazonaws.com/uifaces/faces/twitter/chexee/128.jpg" />
                <TestimonialQuote>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris ex, gravida ut leo eu, rhoncus porta orci. Fusce vitae
                  rutrum nulla.
                </TestimonialQuote>
                <br />
                <TestimonialIndividual>
                  Mandy Benson, Security Analyst
                </TestimonialIndividual>
              </Testimonials>
            </Gallery>
            {/* 2 */}
            <Gallery>
              <Testimonials>
                <TestimonialAvatar src="https://s3.amazonaws.com/uifaces/faces/twitter/andretacuyan/128.jpg" />

                <TestimonialQuote>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris ex, gravida ut leo eu, rhoncus porta orci. Fusce vitae
                  rutrum nulla.
                </TestimonialQuote>
                <br />
                <TestimonialIndividual>
                  Gideon Otedola, CRO, Access Bank
                </TestimonialIndividual>
              </Testimonials>
            </Gallery>
            {/* 3 */}
            <Gallery>
              <Testimonials>
                <TestimonialAvatar src="https://s3.amazonaws.com/uifaces/faces/twitter/andretacuyan/128.jpg" />
                <TestimonialQuote>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris ex, gravida ut leo eu, rhoncus porta orci. Fusce vitae
                  rutrum nulla.
                </TestimonialQuote>
                <br />
                <TestimonialIndividual>
                  Rotimi Olaleke, CRO, Providus Bank
                </TestimonialIndividual>
              </Testimonials>
            </Gallery>
          </Slider>
        </div>
      </GridContainer>
    </LayoutWrapper>
  );
};

/* Styled Components:
 *  Gallery * Testimonials  * TestimonialAvatar
 *  TestimonialQuote * TestimonialIndividual  *
 */

const Gallery = styled.div`
  width: 100%;
  min-height: 320px;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

const Testimonials = styled.div`
  text-align: center;
  max-width: 850px;
  margin: 50px auto 50px auto;
  padding: 5px 20px;
`;

const TestimonialAvatar = styled.img`
  width: 100px;
  border-radius: 50%;
  display: block;
`;

const TestimonialQuote = styled.q`
  display: block;
  font-size: 24px;
  font-weight: 300;
  padding: 10px 0;
`;

const TestimonialIndividual = styled.span`
  display: block;
  font-weight: 800;
  color: #d44255;
`;

export default Testimonial;

/* Testimonial component  ️ */
