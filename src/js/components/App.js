import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Header     from './Header';
import Stock      from './Stock';
import About      from './About';
import Team       from './Team';
import Financials from './Financials';
import NotFound   from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/:id/about" component={About}></Route>
            <Route path="/:id/financials" component={Financials}></Route>
            <Route path="/:id/team" component={Team}></Route>
            <Route path="/:id" component={Stock}></Route>
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
