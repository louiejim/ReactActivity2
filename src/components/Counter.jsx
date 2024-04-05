import { Component } from "react";
import "./index.css";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { FaPesoSign } from "react-icons/fa6";

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

function Counter(props) {
  return (
    <div className="containers">
      <div className="card-container">
        <h5>{props.counter.title}</h5>
        <h6>
          <FaPesoSign style={{ height: 15 }} />
          {props.counter.price}
        </h6>
        <img src={props.counter.image}></img>\
        <br />
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>DESCRIPTION</Accordion.Header>
            <Accordion.Body>{props.counter.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {props.counter.value === 0 ? (
            <Button
              variant="outline-light"
              style={{ color: "black" }}
              onClick={() => props.onIncrement(props.counter.id)}
            >
              🛒ADD TO CART
            </Button>
          ) : (
            <div>
              <button
                className="btn btn-primary me-4"
                onClick={() => props.onIncrement(props.counter.id)}
              >
                +
              </button>
              {props.counter.value}
              <button
                className="btn btn-primary ms-4"
                disabled={props.counter.value === 0}
                onClick={() => {
                  props.onDecrement(props.counter.id);
                }}
              >
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Counter;
