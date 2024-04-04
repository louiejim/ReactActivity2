import { Component } from "react";
import "./index.css";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    return (
      <div className="container">
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}
