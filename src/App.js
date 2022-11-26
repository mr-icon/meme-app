import React from 'react';
import Joke from './components/Joke'
import jokesData from './components/jokesData'
import Nav from "./components/Nav"
import Form from "./components/Form"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
    </div>
  );
}
export default App;
