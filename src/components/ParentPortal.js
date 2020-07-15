import React, { Component } from 'react'
import PortalDemo from './PortalDemo'

class ParentPortal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    handleShowMessageClick = () => {
        this.setState({
            showModal: true
        })
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div className="parent-portal">
                <div className="card">
                    <h1>Portal-Demo</h1>
                    <p>Portals provide a first-class way to render children into a DOM node 
                        that exists outside the DOM hierarchy of the parent component.<br />
                    The first argument (child) is any renderable React child, such as an element, 
                    string, or fragment. The second argument (container) is a DOM element.
                    </p>
                    <button onClick={this.handleShowMessageClick}>
                        Show Secret Modal
                    </button>
                    {this.state.showModal ? (
                        <PortalDemo onClose={this.handleCloseModal} >
                            <div>
                                <h1>React Portals</h1>
                                <p>React makes it painless to create interactive UIs. 
                                    Design simple views for each state in your application, 
                                    and React will efficiently update and render just the right 
                                    components when your data changes.<br />
                                    Declarative views make your code more predictable and easier to debug.
                                    </p>
                            </div>

                        </PortalDemo>
                     ) : null}
                </div>
            </div>
        )
    }
}

export default ParentPortal
