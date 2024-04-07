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
      <br />
      <Row>
        <Col xs={6}>
          <Link to="/addProduct">
            <Button variant="primary">
              ADD PRODUCT <MdAddShoppingCart />
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Counters
            counters={counters}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counters>
        </Col>
      </Row>
    </Container>
  );
}

export default CounterPage;
