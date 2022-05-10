import React  from "react";
import "./index.css";

export default function NavBar() {

  return (

    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <a>Home</a>
          <a>News</a>
          <a>Contact</a>
          <a>About</a>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span>PAGE</span>
        </section>
      </div>
    </div>
  );
}