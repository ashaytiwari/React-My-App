import React, { Component } from 'react'


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
    }
    reset = () => {
        this.setState(() => ({
            count: 0
        }))
    }
    render() {
        return (
            <div className="row counter">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="countercard text-center">
                        <h1>Counter</h1>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <button className="increment" onClick={this.increment}>+</button>
                            </div>
                            <div className="col-md-4 countcard">
                                {this.state.count}
                            </div>
                            <div className="col-md-4">
                                <button className="decrement" onClick={this.decrement}>-</button>
                            </div>
                        </div><br />
                        <button className="reset" onClick={this.reset}>RC</button>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default Counter
