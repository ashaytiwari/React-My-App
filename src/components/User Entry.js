import React, { Component } from 'react'


class Form extends Component {
    initialState = {
        name: "",
        age: "",
        job: ""
    }
    state = this.initialState

    changeHandler = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

  

    submitUserRecord = () => {
        this.props.submitHandler(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, job, age } = this.state
        return (

            <form className="form-inline user-entry" >
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="name">Name:-</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                value={name}
                                autoFocus
                                onChange={this.changeHandler} 
                                placeholder="Name" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="age">Age:-</label>
                            <input type="number"
                                className="form-control"
                                name="age"
                                id="age"
                                value={age}
                                autoFocus
                                onChange={this.changeHandler} 
                                placeholder="Age"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="job">Job:-</label>
                            <input type="text"
                                className="form-control"
                                name="job"
                                id="job"
                                value={job}
                                autoFocus
                                onChange={this.changeHandler}
                                placeholder="Job" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <input type="button" 
                        value="Add Record"
                        onClick={this.submitUserRecord}
                        className="btn btn-warning" />
                    </div>
                </div>
            </form>

        )
    }
}

export default Form
