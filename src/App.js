import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Nav from './components/pages/Nav';
import Footer from './components/pages/Footer';
import Homepage from './components/pages/Homepage';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <Router >
      <div className = "">
        <Nav/>
        <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
