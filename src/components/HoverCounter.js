import React, { Component } from 'react'
// import UpdatedComponent from './withCounter'
import withCounter from './withCounter'


class HoverCounter extends Component {
    
    render() {
        const {count, incrementCount} = this.props 
        return (
            <div className="hover-counter text-center">
    <p onMouseOver={incrementCount} className="hover-heading">{this.props.heroName} Hovered {count} Times</p> 
            </div>
        )
    }
}

export default withCounter(HoverCounter) 
