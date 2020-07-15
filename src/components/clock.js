import React from 'react';
import ChildComponent from './childComponent'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            brand: "ford",
            isToggleOn: true,
            message: "Please Subscribe",
            parentName: "Parents"
        };
        this.handleClick = this.handleClick.bind(this);
        this.callParent =this.callParent.bind(this);
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    brandChange = () => {
        this.setState({ brand: "rampage" })
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    subscribe = () => {
        this.setState({
            message: "Thanks for subscribing"
        })
    }
    callParent(){
        alert(`Hello ${this.props.name} 's ${this.state.parentName}`)
    }

    render() {
        return (
            <div className='clock text-center'>
                <h1>Hello {this.props.name}</h1>
                <h2>Nice to see you again</h2>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
                <h3>I am {this.state.brand}</h3>
                <button className="btn btn-danger changeBrand" onClick={this.brandChange}>Change brand</button><br />
                <button onClick={this.handleClick} className="togglebtn">
                    {this.state.isToggleOn ? 'On' : 'Off'}
                </button><br />
        <h3>{this.state.message}</h3>
                <button className="subscribebtn" onClick={this.subscribe}>Subscribe</button><br />
                <ChildComponent parentHandler={this.callParent}/>
            </div>
        );
    }
}


export default Clock