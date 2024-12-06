import React from 'react'
import image from "../images/homeimg.webp"

function Navbar() {
  return (
    <div >
        <nav className='navbar flex'>
            <ul className='flex p-5'>
                <li className='pl-12 text-1xl'>Home </li>
                <li className='pl-12 text-1xl'>Necklaces </li>
                <li className='pl-12 text-1xl'>Earrings </li>
                <li className='pl-12 text-1xl'>Bangles </li>
                <li className='pl-12 text-1xl'>Collection </li>
                <li className='pl-12 text-1xl'>Wedding Store </li>
                <li className='pl-12 text-1xl'>Happy Customers </li>
            </ul>
        </nav>

        <main>
           <img src={image} className='border-t-2 border-t-slate-200 pl-10 w-full pr-10'></img>

        </main>
        
      
    </div>
  )
}

export default Navbar
