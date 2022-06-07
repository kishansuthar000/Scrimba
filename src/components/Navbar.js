import React from "react"
import logo from "../images/logo.png";
export default function Navbar() {
    return(
      
               <nav class="nav-items">
               <img src= {logo} alt="Img not loaded"  className="logo"/>
                <h2 className="title">ReactFacts</h2> 
               <h3>Project - React Course</h3> 
               </nav>
               
       
    )
}