import { useEffect, useState } from 'react';
import List from './components/List.jsx';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="todo-wrapper">
        <Header />
        <List />
        <Nav />
      </div>
    </div>
  );
}

export default App;
