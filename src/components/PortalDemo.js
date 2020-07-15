import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class PortalDemo extends Component {
    render() {
        return ReactDOM.createPortal(
            <div className='portal' onClick={this.props.onClose}>
                <div className='portal-content'>
                    {this.props.children}
                    <hr />
                    <button onClick={this.props.onClose}>Close</button>
                </div>
            </div>   ,
            document.getElementById('portal-root')
        )
    }
}

export default PortalDemo



