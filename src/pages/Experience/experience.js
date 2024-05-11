import * as styles from "./experienceElements";
import img1 from "../images/c-sharp.png";
import img2 from "../images/js.png";
import img3 from "../images/html-5.png";
import img4 from "../images/sql-server.png";
import img5 from "../images/flag.png";

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

const Experience = () => {
  const title = {
    color: "#262223",
    fontFamily: "monospace",
    fontWeight: "Bold",
    textDecoration: "underline",
    marginLeft: "27px",
  };

  const body = {
    color: "#262223",
    fontFamily: "Garamond",
    fontSize: "15px",
  };

  const cardstyle = {
    maxWidth: "1140px",
    marginLeft: "35px",
    border: "#473c3e solid",
    borderRadius: "20px",
    backgroundColor: "#DDC6B6",
  };

  const back = {
    borderRadius: "5px",
    border: "#473c3e solid",
    width: "200px",
    height: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#262223",
    marginLeft: "20px",
    marginTop: "60px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <>
      <styles.aboutSection>
        <styles.textContainer>
          <styles.titles>/experience</styles.titles>
          <CCard className="mb-3" style={cardstyle}>
            <CRow className="g-0">
              <CCol md={4} style={{ maxWidth: "200px" }}>
                <div style={back}>
                  <CCardImage
                    src={img5}
                    style={{
                      maxWidth: "100px",
                      margin: "auto",
                      marginTop: "10px",
                      marginBottom: "0px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "8px",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    ECCC
                  </p>
                  <p style={{ fontSize: "7px" }}>
                    Corporate Services and Finance Branch
                  </p>
                </div>
              </CCol>
              <CCol md={8}>
                <CCardBody style={{ width: "900px" }}>
                  <CCardTitle style={title}>
                    Full Stack Developer - Enviroment and Climate Change Canada
                  </CCardTitle>
                  <CCardText style={body}>
                    <ul style={{ listStyleType: "square" }}>
                      <li style={{ paddingBottom: "4px", lineHeight: "19px" }}>
                        Contributed to the refinement of the Canadian
                        Notification and Movement Tracking System (CNMTS)
                        application by addressing multiple bugs in both
                        front-end and back-end components
                      </li>
                      <li style={{ paddingBottom: "4px", lineHeight: "19px" }}>
                        Developed specialized web pages within CNMTS targeted at
                        enforcement officers, significantly enhancing internal
                        operations, accessibility, and efficiency
                      </li>
                      <li style={{ paddingBottom: "4px", lineHeight: "19px" }}>
                        Implemented a full-scale remodel of the Greenhouse Gas
                        Reporting Program (GHG) application’s front-end,
                        complemented by an extensive refactoring of database
                      </li>
                      <li style={{ paddingBottom: "4px", lineHeight: "19px" }}>
                        Engineered comprehensive test suites for GHG API
                        endpoints using xUnit, and automated front-end testing
                        with Selenium, ensuring robust code quality and seamless
                        user experience
                      </li>
                    </ul>
                  </CCardText>
                  <CCardText>
                    <small
                      className="text-body-secondary"
                      style={{ marginLeft: "50px", backgroundColor: "473c3e" }}
                    >
                      <img src={img1} style={{ padding: "10px" }} />
                      <img src={img2} style={{ padding: "10px" }} />
                      <img src={img3} style={{ padding: "10px" }} />
                      <img src={img4} style={{ padding: "10px" }} />
                    </small>
                  </CCardText>
                </CCardBody>
              </CCol>
            </CRow>
          </CCard>
        </styles.textContainer>
      </styles.aboutSection>
    </>
  );
};

export default Experience;
