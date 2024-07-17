import React from "react";
import Card from "react-bootstrap/Card";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // İkonları ekleyin

function ReferanceCard(props) {
  return (
    <Card className="referance-card-view">
      <Card.Body>
        <div className="referance-card-header">
          <div style={{ flexDirection: "row" }}>
            {props.image && (
              <img
                src={props.image}
                alt={props.name}
                className="referance-card-image"
              />
            )}
            <Card.Title className="referance-card-title">
              {props.name}
            </Card.Title>
          </div>
        </div>
        <Card.Text style={{ textAlign: "justify", marginTop: "10px" }}>
          {props.description}
        </Card.Text>
        {props.email && (
          <div className="referance-card-contact">
            <FaEnvelope style={{ marginRight: "5px" }} /> {props.email}
          </div>
        )}
        {props.phone && (
          <div className="referance-card-contact">
            <FaPhone style={{ marginRight: "5px" }} /> {props.phone}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ReferanceCard;
