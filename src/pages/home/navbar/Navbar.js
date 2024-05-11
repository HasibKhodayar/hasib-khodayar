
import "./Navbar.css"; 
import React from "react";
import { Link as L1} from "react-scroll";
import {Link as L2} from "react-router-dom";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'




const Navbar = () => {
   

    return (
        <>
        
        <div className="navbar">

            <div className="leftside">
                <L1 to= "home" smooth={true} offset={10} duration={500}>HK <FontAwesomeIcon icon={faDice} style={{color: "#262223",}} /> </L1>
            </div>

           

            <div className="rightside">

            <L1 to= "about" smooth={true} offset={-80} duration={500} >  about </L1>
            <L1 to= "projects"  smooth={true} offset={50} duration={500} > projects</L1>
            <L2 to = 'https://www.linkedin.com/in/hasibkhodayar/' target='_blank'>linkedin</L2>
            <L2 to = 'https://github.com/HasibKhodayar' target='_blank'>github</L2>
            <L2><button className="contactbutton" onClick={() => window.open('mailto:khodayarhasib@gmail.com')}>mail</button></L2>
            </div>
            

        </div>
        </>
    );


}

export default Navbar