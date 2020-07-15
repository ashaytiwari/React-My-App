import React, { Component } from 'react'
import Img from './image/Higher-Order.png'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

class HigherOrderComponents extends Component {
    render() {
        return (
            <div className="HOC">
                <div className="row">
                <div className="col-md-6">
                <h1>Higher Order Components</h1>
                <p>A higher-order component (HOC) is an advanced technique in React for reusing component logic. 
                    HOCs are not part of the React API, per se. 
                    They are a pattern that emerges from React’s compositional nature.
                </p>
                <ClickCounter heroName='IronMan'/><br/>
                <HoverCounter heroName='Hulk'/>
                </div>
                <div className="col-md-6">
                    <img src={Img} alt="pic" />
                </div>
                </div>
            </div>
        )
    }
}

export default HigherOrderComponents
