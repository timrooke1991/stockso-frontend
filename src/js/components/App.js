import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Header from './Header';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
