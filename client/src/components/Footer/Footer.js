import React from "react";
import { Footer } from "react-materialize";

const footer = () => (

    <Footer copyrights="&copy; 2018 Brandon Lawson"
       
        links={
            
            <ul>
                <li><a className="grey-text text-lighten-3" href="tel:7035983362">+1 703.598.3362</a></li>
                <li><a className="grey-text text-lighten-3" href="mailto:blaws006@gmail.com">blaws006@gmail.com</a></li>
                <li className="gitHub"><a href="https://github.com/blaws006" target="_blank">
                    <i className="fab fa-github-square fa-w-5 fa-3x"></i></a>
                </li>
                <li className="linkedIn"><a href="https://www.linkedin.com/in/blawson1/" target="_blank">
                    <i className="fab fa-linkedin fa-w-1 fa-3x"></i></a>
                </li>
            </ul>
        }
        className='teal darken-1'
    >
        <h5 className="white-text">Brandon Lawson</h5>
    </Footer>

)

export default footer;