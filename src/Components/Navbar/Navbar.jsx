import React from 'react'
import {BiMenuAltLeft} from "react-icons/bi";
import "./navbar.css";
function Navbar() {
  return (
    <div id='navbar'>
        <ul>
            <li className="logo"><a href="/"><img atl="cafe" src='./my-cafe.png'/></a></li>
            <li><BiMenuAltLeft size="1.5rem"/></li>
        </ul>
    </div>
  )
}

export default Navbar