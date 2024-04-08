import "./index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// export default class Counter extends Component {
//   render() {
//     return (
//       <div className="containers">
//         <div className="card-container">
//           <h5>{this.props.counter.title}</h5>
//           <h6>
//             <FaPesoSign style={{ height: 15 }} />
//             {this.props.counter.price}
//           </h6>
//           <img src={this.props.counter.image}></img>\
//           <br />
//           <Accordion defaultActiveKey="1">
//             <Accordion.Item eventKey="0">
//               <Accordion.Header>DESCRIPTION</Accordion.Header>
//               <Accordion.Body>{this.props.counter.description}</Accordion.Body>
//             </Accordion.Item>
//           </Accordion>
//           <br />
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             {this.props.counter.value === 0 ? (
//               <Button
//                 variant="outline-light"
//                 style={{ color: "black" }}
//                 onClick={() => this.props.onIncrement(this.props.counter.id)}
//               >
//                 🛒ADD TO CART
//               </Button>
//             ) : (
//               <div>
//                 <button
//                   className="btn btn-primary me-4"
//                   onClick={() => this.props.onIncrement(this.props.counter.id)}
//                 >
//                   +
//                 </button>
//                 {this.props.counter.value}
//                 <button
//                   className="btn btn-primary ms-4"
//                   disabled={this.props.counter.value === 0}
//                   onClick={() => {
//                     this.props.onDecrement(this.props.counter.id);
//                   }}
//                 >
//                   -
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";
import { Link } from "react-router-dom";

function Counter({ counter, onIncrement, onDecrement }) {
  return (
    <CardGroup>
      <Card style={{ width: "18rem", margin: "30px 10px 10px 10px" }}>
        <Card.Body>
          <Card.Title>{counter.title}</Card.Title>
          <Card.Text> &#8369; {counter.price}</Card.Text>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Img
              variant="top"
              src={counter.image}
              style={{
                height: "10rem",
                width: "10rem",
                position: "relative",
              }}
            />
          </div>
        </Card.Body>
        <Card.Footer>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>DESCRIPTION</Accordion.Header>
              <Accordion.Body>{counter.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            {counter.value === 0 ? (
              <Button
                variant="outline-light"
                style={{ color: "black" }}
                onClick={() => onIncrement(counter.id)}
              >
                🛒ADD TO CART
              </Button>
            ) : (
              <div>
                <button
                  className="btn btn-primary me-4"
                  onClick={() => onIncrement(counter.id)}
                >
                  +
                </button>
                {counter.value}
                <button
                  className="btn btn-primary ms-4"
                  disabled={counter.value === 0}
                  onClick={() => {
                    onDecrement(counter.id);
                  }}
                >
                  -
                </button>
              </div>
            )}
          </div>
          <br />
          <div>
            <Col xs={12}>
              <Row>
                <Link to={`/editProduct/${counter.id}`}>
                  <Button variant="primary" style={{ width: "100%" }}>
                    EDIT PRODUCT
                  </Button>
                </Link>
              </Row>
            </Col>
          </div>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Counter;
