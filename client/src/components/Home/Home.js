import React from "react";
import {Parallax} from "react-materialize";


const Home = () => (
    <div id="home" className="parallaxImage">
        <div className="profileName">
            <h1 className="white-text text-center">Brandon Lawson</h1>
            <h3 className="white-text">Full Stack Developer</h3>
        </div>
        <Parallax imageSrc="http://image.ibb.co/eVBuxn/laptop_code_v2.jpg" />
    </div>
)

export default Home;