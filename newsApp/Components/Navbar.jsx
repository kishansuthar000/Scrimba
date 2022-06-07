import React from "react";
import "./CSS/Navbar.css";
export default function () {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
       
          <i className="bx bx-store"></i>
          <h3> News <span>.<span className="dot">..</span></span></h3>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a>Home</a>
            </li>
            
           
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
