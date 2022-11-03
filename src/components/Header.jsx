import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";


function Header({setErrorMessage, loggedIn, setLoggedIn, facade}) {


    return (
        <nav className="topnav">
            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
            <NavLink to="/search"><i className="fa fa-fw fa-search"></i> Search</NavLink>
            <NavLink to="/contact"><i className="fa fa-fw fa-envelope"></i> Contact</NavLink>
            {facade.hasUserAccess('user', loggedIn) && (
            <NavLink to="/jokes"><i className="fa fa-smile-o"></i> Jokes</NavLink>
            )}
            {facade.hasUserAccess('admin', loggedIn) && (
            <NavLink to="/scrape"><i className="fa fa-fw fa-grin"></i> Scrape</NavLink>
            )}
            {!loggedIn ? (<Login setLoggedIn={setLoggedIn} setErrorMsg={setErrorMessage}  />) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                </div>)}
        </nav>
    );
}

export default Header;
