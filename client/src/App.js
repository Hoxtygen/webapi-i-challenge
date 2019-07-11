import React from 'react';
import './App.css';
import UsersList from './components/UsersList';
import NewUserForm from './components/NewUserForm';

function App() {
  return (
    <div className="App">
      <NewUserForm />
      <UsersList />
    </div>
  );
}

export default App;
