import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: ""
        }
    }

    submitHandler = event => {
        event.preventDefault();
        alert(`Subscribed Email is : ${this.state.email}`);
    }

    changeHandler = event => {
        this.setState({
            email: event.target.value
        })

    }


    render() {
        return (
            // Navbar Starts 

            <div>
                {/* Navbar Starts */}
                <ul className="navigation">
                    <li className="logo"><Link to="/">React-app</Link></li>
                    <li><div className="dropdown">
                        <button className="dropBtn">Components
                        <span className="glyphicon glyphicon-arrow-down"></span>
                        </button>
                        <div className="dropdown-content">
                        {/* <Link to="/parentComp">Parent-Component</Link> */}
                        <Link to="/higherordercomponents">HOC-Demo</Link>
                        <Link to="/errorboundarydemo">ErrBoundaryDemo</Link>
                            <Link to="/parentportal">ParentPortal</Link>
                        </div>
                    </div></li>
                    <li ><Link to="/refsDemo">Refs-Demo</Link></li>
                    
                    <li ><Link to="/counter">Counter</Link></li>
                    <li ><Link to="/about">About</Link></li>
                    <li ><Link to="/">Home</Link></li>
                </ul>
                {/* <div className="row">
                    <Link to="/" style={{textDecoration:'none'}}><div className="col-md-2 logo">ReactApp</div></Link>
                    <div className="col-md-6"></div>
                    <Link to="/" style={{textDecoration:'none'}}> <div className="col-md-1 link"> Home</div> </Link>
                    <Link to="/about" style={{textDecoration:'none'}}> <div className="col-md-1 link"> About</div> </Link>
                    <Link to="/counter" style={{textDecoration:'none'}}> <div className="col-md-1 link"> Counter </div></Link>
                    <Link style={{textDecoration:'none'}}><div className="col-md-1 link">Login</div></Link>
                </div> */}

                <div className="jumbotron text-center">
                    <h1>React-App</h1>
                    <p>We specialize in <strong>Web Development</strong></p>

                    {/* Subscribing form starts*/}
                    <form className="form-inline subscribingForm" onSubmit={this.submitHandler}>
                        <div className="input-group subscribing-form">
                            <input type="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.changeHandler}
                                size="70"
                                placeholder="Email..."
                                required
                                autoFocus />
                            <div className="input-group-btn">
                                <input type="submit" value="Subscribe" className="subscribingBtn" />
                            </div>
                        </div>
                    </form>
                    {/* Subscribing form closes*/}
                </div>
            </div>

        )
    }
}

export default withRouter(Header);
