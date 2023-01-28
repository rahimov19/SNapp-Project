import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function MainPage() {
  return (
    <div>
      <Container className="mt-4">
        <Row className="jumboTron d-flex align-items-center p-4">
          <Col xs={6}>
            <img
              id="imagesuper"
              src="/aufbau-im-supermarkt-removebg-preview.png"
              alt="super"
            />
          </Col>
          <Col xs={6}>
            <h1 className="h1Jumbo">Search for products?</h1>

            <div className={"mt-4"}>
              <Button variant="success">Find your way now!</Button>
            </div>
          </Col>
        </Row>
        <div className="d-flex flex-column">
          <Row className="d-flex align-items-center justify-content-center my-4">
            <Col xs={4}>
              <img
                src="http://placekitten.com/200"
                alt="n1"
                className="imageCenter"
              />
            </Col>
            <Col xs={8}>
              <h3>First text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                eveniet magni temporibus neque{" "}
              </p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center my-4">
            <Col xs={8}>
              <h3>First text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                eveniet magni temporibus neque{" "}
              </p>
            </Col>
            <Col xs={4}>
              <img
                src="http://placekitten.com/200"
                alt="n1"
                className="imageCenter"
              />
            </Col>
          </Row>
          <Row className="d-flex align-items-center my-4">
            <Col xs={4}>
              <img
                src="http://placekitten.com/200"
                alt="n1"
                className="imageCenter"
              />
            </Col>
            <Col xs={8}>
              <h3>First text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                eveniet magni temporibus neque{" "}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
