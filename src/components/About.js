import React, { Component } from 'react'
import Img from './image/about.jpg'

class About extends Component {
    render() {
        return (
            <div className="container-fluid about">
                <div className="row">
                    <div className="col-md-7 about-content">
                        <h2>About our App</h2>
                        <h4>This App is based on the <strong>Multipage Website Routing</strong></h4>
                        <p>I know that the title of this post might confuse you if you are familiar with React.
                            Because React deals with components instead of pages. But how can we implement a multi-page website with React?
                    <br />
                            A React app consists of a single HTML file index.html. The views are coded in JSX format as components.
                    <br />
                            But we sometimes need to build multi-page websites because a single-page website can not always represent
                            complete information.
                    <br />
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src={Img} alt="Pic" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About
