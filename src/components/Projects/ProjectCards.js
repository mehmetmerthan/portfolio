import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title
          style={{
            backgroundColor: "purple",
            display: "inline-block",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", marginTop: "10px" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
