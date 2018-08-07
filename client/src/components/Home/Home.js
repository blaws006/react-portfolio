import React from "react";
import {Parallax} from "react-materialize";


const Home = () => (
    <div id="home" className="parallaxImage">
        <div className="profileName">
            <h1 className="white-text text-center">Brandon Lawson</h1>
            <h3 className="white-text">Full Stack Developer</h3>
        </div>
        <Parallax imageSrc ="https://image.ibb.co/fGJf3z/abstract_ai_art_373543.jpg" />
    </div>
)

export default Home;