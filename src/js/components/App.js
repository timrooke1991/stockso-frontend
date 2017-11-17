import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Header from './Header';
import Stock from './Stock';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/:id" component={Stock} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
