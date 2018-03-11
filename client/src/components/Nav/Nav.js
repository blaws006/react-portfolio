import React from "react";
import {Navbar, NavItem, Modal, Button} from "react-materialize";

const Nav = () => (

    <header>
        <div>
        <div className="nav-wrapper">
            <Navbar style={{ zIndex: 999, top: 0 }} id="nav" className="teal darken-1" brand="Brandon Lawson" left>
            <NavItem className="scroll" href="#home">Home</NavItem>
            <NavItem className="scroll"  href="#about">About</NavItem>
            <NavItem className="scroll"  href="#skills">Skills</NavItem>
            <NavItem className="scroll"  href="#portfolio">Portfolio</NavItem>
            <NavItem className="scroll"  href="#contact">Contact</NavItem>
            </Navbar>
        </div>
        </div>  
    </header>
)

export default Nav;