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

  // Not quite the same
  // Will probably require three separate layouts inside the container

  // On success
  // // this.setState({
  //   stock: data for stock initial page (financial basic)
  //   about: data for the stock about
  //   financial: data for the stock financial
  //   team: data for the stock team
  // });

  // In StockSubHeader do something like:
  // Pass in the relevant data to a Stock container
  // <Route exact path={ `${match.path}` } render={ () => <Redirect to={ `${match.url}/html` } /> } />
  // <Route path={ `${match.path}/html` } render={ () => <CourseContainer data={HTMLCourses} /> } />
  // <Route path={ `${match.path}/css` } render={ () => <CourseContainer data={CSSCourses} /> } />
  // <Route path={ `${match.path}/javascript` } render={ () => <CourseContainer data={JSCourses} /> } />

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
        <StockSubHeader props={this.props} />
        <h2>Stock Name: {this.state.stock.name}</h2>
        <div>
          <p>URL: {this.state.stock.summary[0].url}</p>
          <p>Phone: {this.state.stock.summary[0].phone}</p>
          <p>Address: {this.state.stock.summary[0].address}</p>
          <p>{this.state.stock.summary[0].overview}</p>
        </div>
      </div>
    );
  }
}


export default Stock;
