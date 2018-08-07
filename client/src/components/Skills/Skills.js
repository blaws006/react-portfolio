import React from "react";
import { Parallax, Row, Col } from "react-materialize";

const Skills = () => (
   
    <div id="skills" className="parallaxImage">
        <Parallax imageSrc = "https://image.ibb.co/fGJf3z/abstract_ai_art_373543.jpg" />
        <Row className="container">
            <Col className="skills" s={12}>
        <div>
            <ul id="staggered-test" className="left-align">
                <li className="left-align"> 
                    <p>HTML</p>
                    <div className="arrow">
                        <div className="arrow-status html">100%
                        <span className="arrow-pointer">
                        </span>
                        </div>
                    </div>
                </li>
                <li>
                    <p>CSS</p>
                    <div className="arrow">
                        <div className="arrow-status css">80%
                        <span className="arrow-pointer">
                        </span>
                        </div>
                    </div>
                </li>
                <li>
                    <p>JavaScript</p>
                    <div className="arrow">
                    <div className="arrow-status javascript">75%
                    </div>
                    </div>
                </li>
                <li>
                    <p>Node.js</p>
                    <div className="arrow">
                        <div className="arrow-status node">80%</div>
                    </div>
                </li>
                <li>
                    <p>React.js</p>
                    <div className="arrow">
                        <div className="arrow-status react">50%
                        </div>
                    </div>
                </li>
                <li>
                    <p>Express</p>
                    <div className="arrow">
                        <div className="arrow-status express">80%
                        </div>
                    </div>
                </li>
                <li>
                    <p>MySQL</p>
                    <div className="arrow">
                        <div className="arrow-status mysql">60%</div>
                    </div>
                </li>
            </ul>
        </div>
        </Col>
        </Row>
       </div> 
       
 
)

export default Skills;