import React, { Component } from 'react'
// import UpdatedComponent from './withCounter'
import withCounter from './withCounter'

class ClickCounter extends Component {

     render() {
        const {count, incrementCount} = this.props 
        return (
            <div className="click-counter text-center">
                <button onClick={incrementCount}>{this.props.heroName} Click {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter) 
