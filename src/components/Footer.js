import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="justify-content-between">
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Mehmet Mert HAN</h3>
        </Col>
        <Col md="4" className="footer-copywright text-md-right">
          <h3>Copyright © {year} MMH</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
