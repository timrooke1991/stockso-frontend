import React, { Component } from 'react';
import $ from 'jquery';

class Stock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stock: {
        name: ''
      }
    };
  }

  componentDidMount() {
    this.getShare();
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
    this.getShare();
  }

  render() {
    return (
      <div className="main-content home">
        <h2>Stock Name: {this.state.stock.name}</h2>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    );
  }
}


export default Stock;
