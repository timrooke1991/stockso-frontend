import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Header from './Header';
import Stock from './Stock';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/:id" component={Stock} />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
