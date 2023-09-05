
import "./Navbar.css"; 
import React from "react";
import { Link as L1} from "react-scroll";
import {Link as L2} from "react-router-dom";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'




const Navbar = () => {
   

    return (
        <>
        
        <div className="navbar">

            <div className="leftside">
                <L1 to= "home" spy={true} smooth={true} offset={10} duration={500}>HK  </L1>
            </div>

           

            <div className="rightside">

            <L1 to= "about" spy={true} smooth={true} offset={10} duration={500} >  about </L1>
            <L1 to= "projects" spy={true} smooth={true} offset={10} duration={500} > projects</L1>
            <L2 to = 'https://www.linkedin.com/in/hasibkhodayar/' target='_blank'>linkedn</L2>
            <L2 to = 'https://github.com/HasibKhodayar' target='_blank'>github</L2>
            <L2 to = "/carousel" target="_blank" >cc</L2>
            </div>

        </div>
        </>
    );


}

export default Navbar