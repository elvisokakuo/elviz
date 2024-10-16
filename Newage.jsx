import React, { useState } from 'react'

function Newage() {
    const [Data, setData] = useState(50)
    const handleSubmit = () => {
        setData('100')
    }
  return (
    <div>
      <h1> Recive: {Data}</h1>
      <button onClick={handleSubmit}>change</button>
    </div>
  )
}

export default Newage
