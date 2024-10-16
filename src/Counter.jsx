import React, { useState } from 'react'

function Counter() {
    const [Count,setCount]=useState(0)
  return (
    <div className='h-96   '>
       <div className= " flex text-[15rem] bg-black/90 text-white justify-center items-center h-screen w-full relative"> {Count} 
     <button className='text-6xl left-7 absolute border-2 h-16 w-16 rounded-full ' onClick={() => setCount(Count - 1)} > -</button>
     <button className='text-6xl right-7 absolute border-2 h-16 w-16 rounded-full ' onClick={() => setCount(Count 
+ 1)} > +</button>
      <div> 
          
      </div>
      </div>
    </div>
  );
}

export default Counter
