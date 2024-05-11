import {
  CCard,
  CRow,
  CCol,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from "@coreui/react";
import img1 from "../images/tictactoe.png";
import img2 from "../images/sysc.png";
import img3 from "../images/zuul.png";
import img4 from "../images/Uno.png";
import img5 from "../images/fitness.png";

import * as styled from "../home/homeElements";

const Cards = () => {
  const styles = {
    width: "20rem",
    height: "32rem", // if want cards to all have same height;
    color: "#262223",
    borderRadius: "30px" /* Rounded corners */,
  };

  const cols = {
    width: "60px",
    paddingBottom: "60px",
    marginLeft: "-5px",
    position: "static",
  };

  const but = {
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#262223" /* Text color */,
    border: "2px solid #262223" /* Button border color */,
    borderRadius: "4px" /* Rounded corners */,
  };

  const handleClick1 = () => {
    window.open("https://replit.com/@HasibKhodayar/Tictactoe", "_blank");
  };

  const handleClick2 = () => {
    window.open("https://hajar-assim.github.io/sysc-site/", "_blank");
  };
  const handleClick3 = () => {
    window.open("https://replit.com/@HasibKhodayar/world-of-zuul", "_blank");
  };
  const handleClick4 = () => {
    window.open("https://github.com/HasibKhodayar/Uno-Flip-Game", "_blank");
  };
  const handleClick5 = () => {
    window.open(
      "https://github.com/HasibKhodayar/COMP_3005_ProjectV2",
      "_blank"
    );
  };

  return (
    <>
      <styled.cardContainer>
        <CRow xs={{ cols: 3, gutter: 0 }}>
          <CCol xs style={cols}>
            <CCard style={styles}>
              <CCardImage orientation="top" src={img1} />
              <CCardBody style={{ backgroundColor: "#DDC6B6" }}>
                <CCardTitle>TIC-TAC-TOE</CCardTitle>
                <CCardText className="text">
                  Built using Java, my Tic-Tac-Toe project is a modern web
                  application that showcases real-time gameplay, winning logic,
                  and customization features. Players can enjoy interactive
                  matches against AI or friends on various devices, making it an
                  impressive addition to my portfolio.
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <button onClick={handleClick1} style={but}>
                  Demo
                </button>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs style={cols}>
            <CCard style={styles}>
              <CCardImage orientation="top" src={img2} />
              <CCardBody style={{ backgroundColor: "#DDC6B6" }}>
                <CCardTitle>Success in SYSC</CCardTitle>
                <CCardText className="text">
                  "Success in Sysc" is our team's React-based website, assisting
                  engineering students with GPA calculations, class resources,
                  and study aids. It's a user-friendly platform designed to
                  streamline academic tasks and support students in achieving
                  success.
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <button onClick={handleClick2} style={but}>
                  Demo
                </button>
              </CCardFooter>
            </CCard>
          </CCol>

          <CCol xs style={cols}>
            <CCard style={styles}>
              <CCardImage orientation="top" src={img3} />
              <CCardBody style={{ backgroundColor: "#DDC6B6" }}>
                <CCardTitle>World of Zuul</CCardTitle>
                <CCardText className="text">
                  Built using Java, Zuul is a game I developed for a course on
                  Object Oriented Programming I took in second year. In this
                  game we explore Carleton University, jump room to room while
                  collecting items and avoiding enemies.
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <button onClick={handleClick3} style={but}>
                  Demo
                </button>
              </CCardFooter>
            </CCard>
          </CCol>

          <CCol xs style={cols}>
            <CCard style={styles}>
              <CCardImage orientation="top" src={img4} />
              <CCardBody style={{ backgroundColor: "#DDC6B6" }}>
                <CCardTitle>Uno Flip</CCardTitle>
                <CCardText className="text">
                  Built using Java, this is a recreation of the Uno Flip game a
                  team of 3 and I developed. Integrated with AI player
                  capabilities with flexible AI strategies, redo/undo, replay,
                  and save/load capabilities to enhance user experience.
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <button onClick={handleClick4} style={but}>
                  Demo
                </button>
              </CCardFooter>
            </CCard>
          </CCol>

          <CCol xs style={cols}>
            <CCard style={styles}>
              <CCardImage orientation="top" src={img5} />
              <CCardBody style={{ backgroundColor: "#DDC6B6" }}>
                <CCardTitle>Fitness Tracker</CCardTitle>
                <CCardText className="text">
                  Built using React, Java and Spring, this is a health and
                  fitness management system with member, trainer and staff
                  capabilities. Members can register, log and track their health
                  and fitnes goals as well as register for classes and private
                  training sessions managed by trainers and staff.
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <button onClick={handleClick5} style={but}>
                  Demo
                </button>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </styled.cardContainer>
    </>
  );
};

export default Cards;
