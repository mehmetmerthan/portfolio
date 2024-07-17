import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiReact, SiSpringboot } from "react-icons/si";
import { TbApi, TbBrandAws, TbBrandUnity, TbDatabase } from "react-icons/tb";
import {} from "react-icons/";

function Toolstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons" style={{ width: "350px" }}>
        <SiSpringboot />
        <ul>
          <li>Data JPA</li>
          <li>Layered Architecture</li>
          <li>Security</li>
          <li>Microservice</li>
          <li>Hibernate</li>
          <li>Maven</li>
          <li>Annotations</li>
          <li>Dependency Injection</li>
          <li>MVC </li>
        </ul>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "350px" }}>
        <TbBrandAws />
        <ul>
          <li>Amplify</li>
          <li>S3</li>
          <li>Cognito</li>
          <li>AppSync</li>
          <li>API Gateway</li>
          <li>Lambda</li>
          <li>DynamoDB</li>
          <li>EC2</li>
          <li>Route 53</li>
        </ul>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "350px" }}>
        <TbDatabase />
        <ul>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>GraphQL</li>
          <li>Apollo</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Database Design</li>
        </ul>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "350px" }}>
        <SiReact />
        <ul>
          <li>React</li>
          <li>React Native</li>
          <li>Redux</li>
          <li>MobX</li>
          <li>Thunk</li>
          <li>JavaScript Libraries</li>
        </ul>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "350px" }}>
        <TbBrandUnity />
        <ul>
          <li>2D/3D Games</li>
          <li>Multiplayer system</li>
          <li>AR</li>
          <li>VR</li>
          <li>Mobile, PC, WebGL</li>
        </ul>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "350px" }}>
        <TbApi />
        <ul>
          <li>RESTful API</li>
          <li>GraphQL</li>
          <li>WebSockets</li>
          <li>OpenAI</li>
          <li>Gemini</li>
          <li>Fine tuning</li>
        </ul>
      </Col>
    </Row>
  );
}

export default Toolstack;
