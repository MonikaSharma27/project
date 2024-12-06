import React from 'react'
import image from "../images/homeimg.webp";
import image1 from "../images/returnimg.jpg"
import image2 from "../images/freeshiping.png"
import image3 from "../images/cod.png"

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
           <div className='flex items-start justify-center gap-20 mt-3 '>
            <div >
            <img src={image1} className='w-20 ' ></img>
            <h2 className='font-bold text-gray-600 text-center text-2xl'>15 Days Free</h2>
            <p className='text-center text-gray-600'>Return</p>
            </div>
            <div>
            <img src={image2} className='w-20' ></img>
            <h2 className='font-bold text-gray-600 text-center text-2xl'>Free Shipping</h2>
            <p className='text-center text-gray-600'>Across India</p>
            </div>
            <div>
            <img src={image3} className='w-20' ></img>
            <h2 className='font-bold text-gray-600 text-center text-2xl'>COD</h2>
            <p className='text-center text-gray-600'>Available</p>
            </div>
           </div>

        </main>
        
      
    </div>
  )
}

export default Navbar
