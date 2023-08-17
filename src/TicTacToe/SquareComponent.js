import React from 'react'

const SquareComponent = ({state, onClick}) => {

  return (
    
    <div className='ticTacBox' onClick={onClick}>
        <span className='Symbol'>
             <h1>{state}</h1>  {/* For Showing Values */}
        </span>
    </div>
  
  )
}

export default SquareComponent;
