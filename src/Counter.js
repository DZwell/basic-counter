import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    }

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  handleDecrement() {
    this.setState((state) => ({ count: state.count - 1 }));
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;

    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement} className="full-width">Increment</button>
        <button onClick={this.handleDecrement} className="full-width">Decrement</button>
        <button onClick={this.handleReset} className="full-width">Reset</button>
      </section>
    );
  }
}
