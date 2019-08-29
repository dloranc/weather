import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import './App.css';

import { Home } from './components/Home';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route component={NoMatch}/>
        </Switch>
    </Router>
  );
}

export default App;
