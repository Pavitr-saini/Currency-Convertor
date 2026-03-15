import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="flex bg-black text-white py-4 justify-between">
    <div className="logo">
      <span className='mx-8 font-bold text-xl'>iTask</span>
    </div>
      <ul className='flex mx-8 gap-8'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Todo</li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar