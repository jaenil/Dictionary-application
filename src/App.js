import React from 'react' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dictionary from './Dictionary' ;
import Randomizer from './Randomizer' ;
import About from './About'
import './App.css';
import NotFound from './NotFound'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <h1> App component</h1>
          <nav>
            <ul>
              <li>
                <Link to='/'> Home </Link>
                <Link to='/random'>Randomizer</Link>
                <Link to='/dictionary'>Dictionary</Link>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/'>
              <div>
                Hi this is the Home page
              </div>
            </Route>
            <Route exact path='/random'>
              <Randomizer/>
            </Route>
            <Route exact path='/dictionary'>
              <Dictionary/>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route path="*">
            <NotFound />
          </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
