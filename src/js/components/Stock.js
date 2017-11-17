import React, { Component } from 'react';
import $ from 'jquery';

class Stock extends Component {

  constructor() {
    super();
    this.state = {
      stock: {}
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/api/stocks/LSE`,
      dataType: 'json',
      cache: false,
      success: (data) => {
        console.log(data);
        this.setState({ stock: data });
      },
      error: (xhr, status, err) => {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="main-content home">
        <h2>Stock Name: {this.state.stock.name}</h2>
      </div>
    );
  }
}


export default Stock;
