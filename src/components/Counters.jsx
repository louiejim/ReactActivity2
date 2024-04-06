import "./index.css";
import Counter from "./Counter";
import Container from "react-bootstrap/Container";

// export default class Counters extends Component {
//   render() {
//     return (
//       <div className="container">
//         {this.props.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             counter={counter}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             onDecrement={this.props.onDecrement}
//           />
//         ))}
//       </div>
//     );
//   }
// }

import React from "react";

function Counters(props) {
  return (
    <Container>
      <div className="align-container">
        {props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={props.onDelete}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
          />
        ))}
      </div>
    </Container>
  );
}

export default Counters;
