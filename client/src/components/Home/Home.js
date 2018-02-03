import React from "react";
import {Parallax} from "react-materialize";


const Home = () => (
    <div id="home">
        <div className="profileName">
            <h1 className="white-text text-center">Brandon Lawson</h1>
            <h3 className="white-text">Full Stack Developer</h3>
        </div>
            <Parallax imageSrc="https://image.ibb.co/ewWD8m/laptop_black.png" />
    </div>
)

export default Home;