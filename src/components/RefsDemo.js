import React, { Component } from 'react'
import { element } from 'prop-types';
import FRInput from './FRInput';

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRefs = React.createRef();
        this.cbRefs = null ;
        this.setcbRefs = element => {
            this.cbRefs = element;
        }
        this.emailRefs = React.createRef();
    }
     
    componentDidMount() {
        this.inputRefs.current.focus();
        // this.emailRefs.current.focus();
        console.log(this.inputRefs)
    }
    clickHandler = () => {
        alert(this.inputRefs.current.value);
        alert(this.cbRefs.value);
        alert(this.emailRefs.current.value);
    }

    render() {
        return (
            <div className="row refs-demo">
                <div className="col-md-3"></div>
                <div className="col-md-6 card text-center">
                    <h2>Refs Demo</h2>
                    <input type="text" className="form-control" ref={this.inputRefs} placeholder="FirstName"/><br />
                    <input type="text" className="form-control" ref={this.setcbRefs} placeholder="LastName"/><br />
                    <FRInput ref={this.emailRefs}/><br />
                    <button type="button" onClick={this.clickHandler}>Click</button><br />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default RefsDemo
