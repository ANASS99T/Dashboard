import React from 'react'
import './status.css'
export const StatusSuccessful = () =>{

    return(
        <dvi className='success'>Successful</dvi>
    )
}

export const StatusCanceled = () =>{

    return <div className='cancel'>Canceled</div>
}

export const StatusPending = () =>{

    return <div className='pending'>Pending</div>
}

export const Actions = ()=>{
    
    return(
        <div className='actions'>
            <button type="button" className="btn"><i className="fas fa-edit"></i></button>
            <button type="button" className="btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}