import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Full stack social media app"
              description="Developed a feature-rich social media application using React Native and AWS
              Amplify, implementing real-time messaging, push notifications, and security
              features."
              technologies={[
                "React Native",
                "AWS Amplify",
                "Real-time Messaging",
                "Push Notifications",
              ]}
              ghLink="https://github.com/mehmetmerthan/Up-Music"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="AI based language practice app"
              description="Created an AI-driven language learning app with interactive sections, including
              personalized dictionaries and real-time subtitle translations. Integrated AI for
              feedback and scenario-based simulations."
              technologies={[
                "Expo",
                "AWS Amplify",
                "Gemini",
                "Hugging Face",
                "GraphQL",
              ]}
              ghLink="https://github.com/mehmetmerthan/Polingo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Gamification service"
              description="A virtual try-on experiment crafted with the power derived from graphic motifs for e-commerce services. Users can try on clothes on their own avatars, alter their hairstyles, and determine hair colors, ultimately deciding how they will appear."
              technologies={["Unity", "C#", "WebGL"]}
              ghLink="https://github.com/mehmetmerthan/metadya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Full backend API"
              description=" A full backend API service coded with Java Spring Boot, Maven, and MySQL. The purpose of the API is to consolidate users' social media addresses into a single service. Within this service, I delved into various areas such as IoC."
              technologies={["Java", "Spring Boot", "Maven", "MySQL"]}
              ghLink="https://github.com/mehmetmerthan/metadya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Mobile & Pc games"
              description="I have created numerous games for both computers and mobile devices.These games span across various categories. I have extensive experience and a high level of proficiency in Unity, as I have been using it for a long time."
              technologies={["Unity", "C#"]}
              ghLink="https://github.com/mehmetmerthan/images-of-games/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="AR service for art"
              description=" It is a service designed for art, bringing together artists and collectors. We utilize augmented reality and gamification technologies, along with Flutter and Unity Engine, to create the system. You can explore virtual exhibition halls and choose to completely conceal your identity as an artist or collector if you wish."
              technologies={["Flutter", "Unity", "C#"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
