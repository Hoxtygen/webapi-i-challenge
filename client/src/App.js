import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UsersList from './components/UsersList';
import SingleUser from './components/SingleUser';


function App() {
  return (
    <Router>
      <div className="App">
        <Route 
          exact path = '/' 
          component = {UsersList}
        /> 
        <Route
          path = '/:id'
          render = {props => <SingleUser {...props}/>}
        />    
      </div>
    </Router>
  );
}

export default App;
