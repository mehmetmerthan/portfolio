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
              description="It is a fully-featured social media application built with React Native on the front end and microservices on AWS Amplify
              on the back end. The database and relationships have been established, and it is ready for end-users to use. The
              application includes features such as real-time messaging, push notifications, in-app notifications, filtering, infinite
              scroll pagination, security, and authentication. "
              ghLink="https://github.com/mehmetmerthan/metadya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Gamification service"
              description="A virtual try-on experiment crafted with the power derived from graphic motifs for e-commerce services. Users can try on clothes on their own avatars, alter their hairstyles, and determine hair colors, ultimately deciding how they will appear."
              ghLink="https://github.com/mehmetmerthan/metadya"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="AI based language practice app"
              description="LangAI is an AI-powered language training mobile application that also offers chatbot support. I developed the app using the Gemini API and Expo, customizing the AI model to meet the project's specific needs. The app allows users to write a sentence in their native language and attempt to translate it into the target language. The AI provides feedback on errors, corrects the translation, or confirms that it’s accurate. Additionally, there's a chat mode where the AI interacts like a real chatbot, but with a key difference: it analyzes any mistakes the user makes during conversation and offers training on those errors. Chat history and personal data are stored on the device's memory."
              ghLink="https://github.com/mehmetmerthan/LangAI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Full backend API"
              description=" A full backend API service coded with Java Spring Boot, Maven, and MySQL. The purpose of the API is to consolidate users' social media addresses into a single service. Within this service, I delved into various areas such as IoC."
              ghLink="https://github.com/mehmetmerthan/metadya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Mobile & Pc games"
              description="I have created numerous games for both computers and mobile devices.These games span across various categories. I have extensive experience and a high level of proficiency in Unity, as I have been using it for a long time."
              ghLink="https://github.com/mehmetmerthan/images-of-games/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="AR service for art"
              description=" It is a service designed for art, bringing together artists and collectors. We utilize augmented reality and gamification technologies, along with Flutter and Unity Engine, to create the system. You can explore virtual exhibition halls and choose to completely conceal your identity as an artist or collector if you wish."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
