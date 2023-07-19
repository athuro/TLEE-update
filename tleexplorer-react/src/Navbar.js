import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    return(
        <>
            <div className="navBar">
                <Link className="navLink" to={'/'}>Home</Link>
                <Link className="navLink" to={'/filter'}>Filtered Search</Link>
                <Link className="navLink" to={'https://github.com/athuro/TLEE-update'}>About</Link>
            </div>
            <div className="titleBar">
                <div id="title">TLEExplorer</div>
            </div>
        </>

    )
}

export default Navbar