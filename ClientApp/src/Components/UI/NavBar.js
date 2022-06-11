import Img from "../../Alter Life(3).png";
import React from "react";

const NavBar = () => {
    return (
        <div style={{background: "#0f0f0f", color: "white", float:"left"}}>
            <img src={Img} style={{marginLeft: "-1.5%"}} width={150} alt=""/>
            <h2>alter life</h2>
            <button>Sign Up</button>
            <br/>
            <button>Log In</button>
            <br/>
            <button>Documentation</button>
            <br/>
            <button>Properties</button>
            <br/>
            <button>Developer Opportunities</button>
        </div>
    );
}
export default NavBar;