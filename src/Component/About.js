import React from 'react'
import { Link } from "react-router-dom";

const About = (props) => {
    return (
        <>
            <div  style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>About Us</h1>
                <p>Flash News is designed to be a fast & free medium to read your daily dose of news whenever and wherever you want.</p>
                {/* <p>There are also a range of converters to explore as well such as the binary code and morse code translators that will allow you to write up standard text and have it translated into the necessary code.</p> */}
                <p>Of course, if you have any suggestions over new tools that should be added and created that could help benefit, then by all means, please <a href="mailto:diliprk95@gmail.com">get in touch</a> with us and we will be more than happy to help you.</p>
                <p><Link to="/" className="btn btn-primary">Return to Flash News</Link></p>
            </div>
        </>
    )
}

export default About;