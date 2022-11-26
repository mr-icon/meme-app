import React from "react";
import Bro from "../images/Troll Face.png"
 
function Nav() {
    return(
        <nav className="nav">
            <img src={Bro} alt="" className="logo" />
            <h2 className="nav-header">Meme Generator</h2>
        </nav>
    )
}

export default Nav;