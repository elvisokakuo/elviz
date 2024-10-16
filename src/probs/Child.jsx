import React from 'react'

function Child({Name,Age,Gender,Class}) {
  return (
    <div>
      <h1 className='bg-red-500'>MY DATA</h1>
      <ul>
        <li>Name:{Name} </li>
        <li>Age:{Age} </li>
        <li>Gender:{Gender} </li>
        <li>Clas:{Class} </li>
      </ul>
    </div>
  )
}

export default Child
