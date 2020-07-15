import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input className="form-control" type="email" placeholder="Email" ref={ref}/>
        </div>
    )
})

export default FRInput
