import React  from 'react';
import './App.css';
import NavBar from './components/nav-bar/index.js';
import 'h8k-components';

const title = "Navigation Bar";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <NavBar/>
    </div>
  );
}

export default App;
