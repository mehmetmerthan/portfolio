import React from "react";
import { Col, Row } from "react-bootstrap";
import CardKey from "./CardKey";
import google from "../../Assets/G.png";
import digi from "../../Assets/digi.png";
import itucek from "../../Assets/İTÜ.png";
import giyat from "../../Assets/HG.png";
import kku from "../../Assets/kku.png";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CardKey
          logo={google}
          title={"Google Türkiye"}
          subTitle={"Intern"}
          description={
            <>
              I am honored to have been selected as one of the recipients of the
              Google Scholarship among 34,000 candidates in Turkey.
              <br />
              <br />
              This prestigious opportunity allowed me to undergo comprehensive
              training in software and project development.
              <br />
              <br />
              The Google Academy not only equipped me with valuable skills but
              also provided me with a platform to expand my horizons and thrive
              in the ever-evolving world of technology.
            </>
          }
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CardKey
          logo={digi}
          title={"DİGİTEST"}
          subTitle={"Intern"}
          description={
            <>
              I completed my internship at Digitest Defense and Aerospace, where
              I developed projects related to weapon simulations.
              <br />
              <br />
              This achievement was recognized by our CEO, leading to a
              commendation and a reference for me."
            </>
          }
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CardKey
          logo={itucek}
          title={"İTÜ Çekirdek"}
          subTitle={"Project Lead"}
          description={
            <>
              The virtual try on project which I led and developed did was
              selected among thousands of projects in itü core.
              <br />
              <br />I passed many different challenging jury eliminations and I
              qualified to be an İTÜ Çekirdek entrepreneur.
            </>
          }
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CardKey
          logo={giyat}
          title={"GİYAT"}
          subTitle={"Mentor"}
          description={
            <>
              I was invited as a mentor to the entrepreneurship community at
              Hacettepe University, where I shared my knowledge in both
              technical software development and entrepreneurship with aspiring
              entrepreneurs.
              <br />
              <br />
              The team I mentored successfully advanced to the finals and
              received high praise from the judges.
            </>
          }
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CardKey
          logo={kku}
          title={"Software Development Club"}
          subTitle={"President"}
          description={
            <>
              I provided software training sessions in the university-affiliated
              and official software development community, where I subsequently
              assumed the presidency of the club.
            </>
          }
        />
      </Col>
    </Row>
  );
}

export default Techstack;
