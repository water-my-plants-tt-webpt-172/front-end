
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignLogin from './components/signlogin';
import PlantGallery from './components/plantgallery'

function App() {
  return (
    <Router>
    <div className="App">
        {/**Sign up Linked to from Marketing Page**/}
        <Route exact path ="/" component = { SignLogin }/>
        <PrivateRoute path='/plants' component={PlantGallery}/>
    </div>
    </Router>
  );
}

export default App;
