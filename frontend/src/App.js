
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignLogin from './components/signlogin';

function App() {
  return (
    <Router>
    <div className="App">

        {/**Sign up Linked to from Marketing Page**/}
        <Route path ="/" component = { SignLogin }/>
    </div>
    </Router>
  );
}

export default App;
