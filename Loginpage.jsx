import React from 'react'

function Loginpage() {
  return (
    <div className='background h-screen flex flex-col items-center justify-center'>
      <div className='border-2 border-white/30 py-2 w-[20rem] flex flex-col relative items-center backdrop-blur-md rounded-lg'> </div>
        <div className='absolute top-16 flex flex-col'>
         <span className='text-4x1 font-semibold'>Login</span>
       <div />
        <form action="">
            <input type="text" placeholder='username' className='w-[18rem] h-[2.5rem] bg-inherit text-white border-2 rounded-md pl-3 outline-none'/>
             <input type="text" placeholder='password' className='w-[18rem] h-[2.5rem] bg-inherit text-white border-2 rounded-md pl-3 outline-none' />
        </form>
        <button className='absolute button-14 text-gray-300/100 border-2 border-white/40 w-[18rem] h[2.5rem] rounded-lg hover:border-white/60 hover:text-gray-300/100'>Submit</button>
    </div>
      </div>
      
  )
}

export default Loginpage
