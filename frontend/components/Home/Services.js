/* Services component  ️ */

// imports
import styled, { css } from "styled-components";
import {
  remy,
  LayoutWrapper,
  GridContainer,
  GridRow,
  GridColumn,
} from "../utils/Grid";
import SecureServer from "../../static/svg/secure server.svg";
import Security from "../../static/svg/security.svg";
import Servers from "../../static/svg/servers.svg";
import Email from "../../static/svg/sent_message.svg";
import Decide from "../../static/svg/decide.svg";
import Code from "../../static/svg/code.svg";

//extends
const GridColumnFlex = styled(GridColumn)`
  display: flex;
  justify-content: center;
`;

const GridRowFlex = styled(GridRow)`
  justify-content: center;
`;
class Services extends React.Component {
  flipCard(event) {
    event.currentTarget.classList.toggle("flipped");
  }
  render() {
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
            Our Services
          </h3>
          <GridRowFlex>
            {/* 1 */}
            <GridColumnFlex sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <img src={Security} alt="" width="120px" height="80px" />
                  <CardTitle>Endpoint Security</CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    <CardTitle>Endpoint Security</CardTitle>
                    Choose between industry leading Endpoint Security Solutions
                    like Webroot, Kaspersky, TrendMicro, Avira, McAfee and
                    Sophos. Secure your organization and home devices from
                    threats.
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumnFlex>
            {/* 2 */}
            <GridColumnFlex sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <img src={Servers} alt="" width="120px" height="80px" />
                  <CardTitle>Backup & Recovery</CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    <CardTitle>Backup & Recovery</CardTitle>
                    Take proactive action against disasters, emergencies and
                    incidents. Choose from solutions such as Carbonite, Veeam
                    and Acronis backup.
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumnFlex>
            {/* 3 */}
            <GridColumnFlex sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <img src={SecureServer} alt="" width="120px" height="80px" />
                  <CardTitle>Network Protection</CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    <CardTitle>Network Protection </CardTitle>
                    Secure your network perimeter from external threats. Choose
                    from solutions such as Sophos, GFI LANGuard, Palo Alto and
                    Cybernet.
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumnFlex>
            {/* 4 */}
            <GridColumnFlex sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <img src={Email} alt="" width="120px" height="80px" />
                  <CardTitle>Email Archiving</CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    <CardTitle>Email Archiving</CardTitle>
                    Systematically save and protect data contained in email
                    messages for easy retrieval. Choose from solutions such as
                    Mail Store, GFI Archiver and SpamTitan.
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumnFlex>
            {/* 5 */}
            <GridColumnFlex sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <img src={Code} alt="" width="120px" height="80px" />
                  <CardTitle>Security Assessments </CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    <CardTitle>Security Assessments </CardTitle>
                    Test your organization readiness against attacks from threat
                    actors. Choose from solutions such as Sophos, Rapid7,
                    TrustWave and Beyond Security.
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumnFlex>
            {/* 6 */}
            <GridColumnFlex sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <img src={Decide} alt="" width="120px" height="80px" />
                  <CardTitle>Security Awareness Training</CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    <CardTitle>Security Awareness Training</CardTitle>
                    Automate and simplify employee awareness training to achieve
                    desired level of compliance. Choose from solutions such as
                    PECB and Phishme.
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumnFlex>
          </GridRowFlex>
        </GridContainer>
      </LayoutWrapper>
    );
  }
}

/* Components */
/* Styled Components:
 *  Card * Card Sides  * Card Side (front)  * Card Side (back)
 *  Card Back * Card Title  * Card Description
 */
// Flipping card
const Card = styled.article`
  position: relative;
  width: 95%;
  min-height: ${remy(210)};
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.25s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 ${remy(40)} rgba(0, 0, 0, 0.15);
  }

  &.flipped {
    & > div:first-of-type {
      // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }

    }
  }
`;

// Card sides
const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: ${remy(24)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.25s ease-in-out;
`;

// Card side - front
const CardFront = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  padding: 30px;
  background: white;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(96, 37, 102, 0.5);
  border-radius: 10px;
  backface-visibility: hidden;
  transition: all 0.25s ease-in-out;
`;

// Card side - back
const CardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);
`;

const CardTitle = styled.h3`
  font-size: ${remy(18)};
  text-align: center;
`;

const CardDescription = styled.span`
  font-size: ${remy(16)};
`;

export default Services;
/* Services component  ️ */
