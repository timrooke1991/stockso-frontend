import React, { Component } from 'react';
import $ from 'jquery';

import StockSubHeader from './StockSubHeader';

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: {
        name: '',
        summary: [
          {
            url: '',
            phone: '',
            fax: '',
            address: '',
            overview: ''
          }
        ]
      }
    };
  }


  getShare() {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/api/shares/${this.props.match.params.id}`,
      dataType: 'json',
      cache: false,
      success: (stock) => {
        this.setState({
          stock: stock.stock_info
        });
      },
      error: (xhr, status, err) => {
        console.log(err);
      }
    });
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
        <StockSubHeader props={this.props}/>
        <h2>Stock Name: {this.state.stock.name}</h2>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

// <div>
//   <p>URL: {this.state.stock.summary[0].url}</p>
//   <p>Phone: {this.state.stock.summary[0].phone}</p>
//   <p>Address: {this.state.stock.summary[0].address}</p>
//   <p>{this.state.stock.summary[0].overview}</p>
// </div>

export default Stock;
