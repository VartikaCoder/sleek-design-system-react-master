import React from "react";
// reactstrap components
import { Container, Row, Col} from "reactstrap";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Do you love this Bootstrap 4 React Design System?
            </h2>
            <br />
            <h3 className="text-info font-weight-light mb-2">
              Did you like it? Reach me at
            </h3>
            <br />
            <h4 className="mb-0 font-weight-light">
               linkedin.com/in/vartikatiwari1927 | vartikatiwari527@gmail.com | +91-9278851111
            </h4>
            <br />
            <br />
          </Col>
          <Col className="text-center" lg="8" md="12">
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}
