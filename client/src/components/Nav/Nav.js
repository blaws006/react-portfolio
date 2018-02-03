import React from "react";
import {Navbar, NavItem} from "react-materialize";

const Nav = () => (

    <header>
        <div>
        <div className="nav-wrapper">
            <Navbar style={{ position: "fixed", zIndex: 999, top: 0 }} id="nav" className="teal darken-1" brand="Brandon Lawson" left>
            <NavItem className="scroll" href="#home">Home</NavItem>
            <NavItem className="scroll"  href="#about">About</NavItem>
            <NavItem className="scroll"  href="#skills">Skills</NavItem>
            <NavItem className="scroll"  href="#portfolio">Portfolio</NavItem>
            <NavItem className="scroll"  href="#contact">Contact</NavItem>
            <NavItem className="gift not">Free Promotional Gift!</NavItem>
            </Navbar>
        </div>
        </div>  
    </header>
)

export default Nav;