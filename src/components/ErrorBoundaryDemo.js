import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import BuggyCounter from './BuggyCounter'

function ErrorBoundaryDemo() {
    return (
        <div className="errorboundarydemo">
            <b><h2>This is an example of error boundaries in React 16.</h2></b>
            <br />
            <h4>Click on the numbers to increase the counters.</h4><br />
            <p>The counter is programmed to throw when it reaches 5. This simulates a JavaScript error
                in a component.
            </p>
            <hr />
            <div className="demo1">
                <ErrorBoundary>
                    <p>These two counters are inside the same error boundary.If one crashes, the error boundary will replace both of them.</p>
                    <BuggyCounter />
                    <BuggyCounter />
                </ErrorBoundary>
                <hr />
            </div><br />
            <div className="demo2 ">
                <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
                <ErrorBoundary><BuggyCounter /></ErrorBoundary>
                <ErrorBoundary><BuggyCounter /></ErrorBoundary>
                <hr />
            </div>
        </div>
    )
}

export default ErrorBoundaryDemo
