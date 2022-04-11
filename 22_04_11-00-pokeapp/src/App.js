import React from "react";
import Search from "./Components/Search/Search";

import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Pokedex</h1>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
