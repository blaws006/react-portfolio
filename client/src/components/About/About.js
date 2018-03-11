import React from "react";
import {Col, Row} from "react-materialize";


const About = () => (
    <div className="container">
        <Row className="aboutMe">
            <Col s={12} m={12} l={8}>
                <h3>Summary</h3>
                <p>Highly-motivated Certified Full Stack web developer and Email Marketing Specialist with a passion for problem-solving
					and analytical thinking. Proficient in front end technologies (HTML, CSS, JavaScript and jQuery), and comfortable with
					certain backend technologies (Node.js, Express, SQL and NoSQL databases) and seek to apply these skills in building
					web apps that combine both style and structure.</p>
            </Col>
            <Col s={12} m={12} l={4}>
                <h3>Ask Me About</h3>
                <ul className="ask">
                    <li>Craft Beer</li>
                    <li>DC Sports</li>
                    <li>Music</li>
                    <li>Cooking</li>
                    <li>Video Games</li>
                    <li>
                        <a href="https://www.instagram.com/b_law703/saved/" target="_blank">#tshirtgame</a>
                    </li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col s={12}  className="center-align">
                <h3>Contact Me</h3>
                <a href="tel:7035983362">+1 703.598.3362</a> &nbsp; | &nbsp;
                <a href="mailto:blaws006@gmail.com">blaws006@gmail.com</a> &nbsp; | &nbsp;
                <a href="https://github.com/blaws006" target="_blank">
                    <i className="fab fa-github-square fa-w-14 fa-3x"></i>
                </a> &nbsp; |&nbsp;
                <a href="https://www.linkedin.com/in/blawson1/" target="_blank">
                </a>
            </Col>
        </Row>
    </div>
)

export default About;