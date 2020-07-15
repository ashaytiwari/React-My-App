import React, { Component } from 'react'

class ErrorBoundary extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isError: null,
             errorInfo: null
        }
    }

    componentDidCatch(isError, errorInfo){
        this.setState({
            isError: isError,
            errorInfo: errorInfo
        })
    }
    
    render() {
        if(this.state.errorInfo){
            return (
           <div className="errorboundary">
               <h2>Something went wrong here</h2>
               <details>
                   {this.state.isError && this.state.isError.toString()}
                   <br />
                   {this.state.errorInfo.componentStack}
               </details>
           </div>
            );        
        }
        return this.props.children;
    }
}

export default ErrorBoundary
