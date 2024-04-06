import React from "react";
import Counters from "../components/Counters";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
function CounterPage({ counters, onIncrement, onDecrement }) {
  return (
    <Container>
      <Container>
        <br />
        <Row style={{ justifyContent: "flex-end", textAlign: "right" }}>
          <Col xs={4}>
            <Link to="/addProduct">
              <Button variant="primary">
                ADD PRODUCT <MdAddShoppingCart />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Row>
        <Counters
          counters={counters}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        ></Counters>
      </Row>
    </Container>
  );
}

export default CounterPage;
