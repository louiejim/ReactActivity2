import { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import "./index.css";

export default class Navbars extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>E-Commerce App</Navbar.Brand>
          <h6>
            🛒<Badge bg="secondary">{this.props.totalCount()}</Badge>
          </h6>
        </Container>
      </Navbar>
    );
  }
}
