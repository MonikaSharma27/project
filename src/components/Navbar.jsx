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
                <li className='pl-12 text-1xl group'>
                  <a>Home</a>
                  <div className='bg-gray-200 w-full hidden z-[-1] p-4 w-48 mt-5 group-hover:block z-40 '>
                   <ul>
                    <li><a>Bridal Sets</a></li>
                    <li><a>Short Necklaces</a></li>
                    <li><a>Pair Bangle</a></li>
                    <li><a>Bracelet</a></li>
                   </ul>
                  </div>
                  </li>
                <li className='pl-12 text-1xl'><a>Necklaces </a></li>
                <li className='pl-12 text-1xl'><a>Earrings</a> </li>
                <li className='pl-12 text-1xl'><a>Bangles</a> </li>
                <li className='pl-12 text-1xl'><a>Collection </a></li>
                <li className='pl-12 text-1xl'><a>Wedding Store </a></li>
                <li className='pl-12 text-1xl'><a>Happy Customers </a></li>
            </ul>
        </nav>

        <main>
           <img src={image} className='border-t-2 border-t-slate-200 pl-10 w-full pr-10'></img>
           <div className='flex items-start justify-center gap-20 mt-3 '>
            <div >
            <img src={image1} className='w-20 mx-auto' ></img>
            <h2 className='font-bold text-gray-600 text-center text-2xl'>15 Days Free</h2>
            <p className='text-center text-gray-600'>Return</p>
            </div>
            <div>
            <img src={image2} className='w-20 mx-auto' ></img>
            <h2 className='font-bold text-gray-600 text-center text-2xl'>Free Shipping</h2>
            <p className='text-center text-gray-600'>Across India</p>
            </div>
            <div>
            <img src={image3} className='w-20 mx-auto' ></img>
            <h2 className='font-bold text-gray-600 text-center text-2xl'>COD</h2>
            <p className='text-center text-gray-600'>Available</p>
            </div>
           </div>

        </main>
        
      
    </div>
  )
}

export default Navbar
