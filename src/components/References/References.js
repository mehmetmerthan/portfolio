import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReferanceCard from "./ReferenceCard";
import Particle from "../Particle";
import ae from "./ReferanceImages/ae.png";
import ea from "./ReferanceImages/ea.png";
import ab from "./ReferanceImages/ab.png";
import my from "./ReferanceImages/my.png";
import mg from "./ReferanceImages/mg.png";
const references = [
  {
    name: "Assoc. Prof. Atilla ERGÜZEN ",
    email: "atilla@kku.edu.tr",
    phone: " (+90) 5354452400",
    description:
      " Head of the Department of Computer Engineering at Kırıkkale University ",
    image: ae,
  },
  {
    name: "Assoc. Prof. Enes AYAN",
    email: "enesayan@kku.edu.tr",
    description:
      " Associate Professor in the Department of Computer Engineering at Kırıkkale University.",
    image: ea,
  },
  {
    name: " Dr. Ali BALCI",
    email: "dralibalci@gmail.com",
    phone: " (+90) 505132886 ",
    description: "  General Manager at Digitest.",
    image: ab,
  },
  {
    name: "Assoc. Prof. Mete YAĞANOĞLU",
    email: "yaganoglu@atauni.edu.tr",
    phone: " (+90) 5354452400",
    description:
      " Associate Professor in the Department of Computer Engineering at Atatürk University.",
    image: my,
  },
  {
    name: "Murat GÜNDOĞAN",
    email: "gundoganmurat2@gmail.com",
    phone: "  (+90) 5378457581",
    description: "  Senior Computer Engineer at the Ministry of Finance.",
    image: mg,
  },
];

function References() {
  return (
    <Container fluid className="referance-section">
      <Particle />
      <Container>
        <h1 className="referance-heading">
          My <strong className="purple">References</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my professional references.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {references.map((ref, index) => (
            <Col md={4} className="referance-card" key={index}>
              <ReferanceCard
                name={ref.name}
                email={ref.email}
                phone={ref.phone}
                description={ref.description}
                image={ref.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default References;
