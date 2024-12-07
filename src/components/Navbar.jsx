import React from 'react'
import image from "../images/homeimg.webp";
import image1 from "../images/returnimg.jpg"
import image2 from "../images/freeshiping.png"
import image3 from "../images/cod.png"

function Navbar() {
  return (
    <div >
        <nav className='navbar flex'>
            <ul className='flex p-5 relative cursor-pointer '>
                <li className='pl-12 text-1xl group  '>
                  <a className='hover:font-bold hover:text-gray-600'>Accessories</a>
                  <div className='bg-white w-[100vw] border-t-2 border-t-slate-200 border-b-2  border-b-slate-200 hidden p-4 absolute left-0 mt-5 group-hover:block  '>
                 <div className='flex items-start justify-center gap-48'>
                  <div className='mb-7'>
                    <h1 className='mb-4 text-sm'>Head Accessories</h1>
                    <p>Matils</p>
                    <p>Maang Tikkas</p>
                    <p>Hair Brooch</p>
                    <p>Chotis</p>
                    <p>Sheeshphool</p>
                  </div>
                  <div>
                    <h1 className='mb-4 text-sm'>Hand Accessories</h1>
                    <p>Hathpans</p>
                    <p>Bajubands</p>
                    <p>Finger Rings</p>
                  </div>
                  <div>
                    <h1 className='mb-4 text-sm'>Other Accessories</h1>
                    <p>Nath</p>
                    <p>Toe Rings</p>
                    <p>Belts</p>
                    <p>Chotis</p>
                    <p>Payals</p>
                  </div>
                  </div>
                  </div>
                  </li>


                <li className='pl-12 text-1xl group '><a className='hover:font-bold hover:text-gray-600'>Necklaces </a>
                <div className='bg-white w-[100vw] border-t-2 border-t-slate-200 border-b-2  border-b-slate-200 hidden p-4 absolute left-0 mt-5 group-hover:block  '>
                 <div className='flex items-start justify-center gap-48'>
                  <div className='mb-7'>
                    <h1 className='mb-4 text-sm'>Shop By Type</h1>
                    <p>Short Necklaces</p>
                    <p>Long Necklaces/Haaram</p>
                    <p>Chokers</p>
                    <p>Layered Necklaces</p>
                    <p>Pendant Sets</p>
                  </div>
                  <div>
                    <h1 className='mb-4 text-sm'>Shop By Collection</h1>
                    <p>Antique</p>
                    <p>Kundan</p>
                    <p>Temple</p>
                    <p>92.5 Silver</p>
                    <p>Zircon</p>
                
                  </div>
                  <div>
                    <h1 className='mb-4 text-sm'>Shop By Occasion</h1>
                    <p>Nath</p>
                    <p>Toe Rings</p>
                    <p>Belts</p>
                    <p>Chotis</p>
                    <p>Payals</p>
                  </div>
                  </div>
                  </div>
                
                </li>
                <li className='pl-12 text-1xl group'><a className='hover:font-bold hover:text-gray-600'>Earrings</a>
                <div className='bg-white w-[100vw] border-t-2 border-t-slate-200 border-b-2  border-b-slate-200 hidden p-4 absolute left-0 mt-5 group-hover:block  '>
                 <div className='flex items-start justify-center gap-48'>
                  <div className='mb-7'>
                    <h1 className='mb-4 text-sm'>Earrings Type</h1>
                    <p>Jhumkas</p>
                    <p>Balis/ Hoops</p>
                    <p>Chandbalis</p>
                    <p>Studs</p>
                    <p>Danglers</p>
                  </div>
                  <div>
                    <h1 className='mb-4 text-sm'>Shop By Collection</h1>
                    <p>Antique</p>
                    <p>Temple</p>
                    <p>Zircon</p>
                  </div>
                  <div>
                    <h1 className='mb-4 text-sm'>Shop By Occasion</h1>
                    <p>Bridal</p>
                    <p>Office Wear</p>
                    <p>Festive</p>
                    <p>Party</p>
                    <p>Casual</p>
                  </div>
                  </div>
                  </div> </li>
                <li className='pl-12 text-1xl group'><a className='hover:font-bold hover:text-gray-600'>Bangles</a>
                <div className='bg-white w-[100vw] border-t-2 border-t-slate-200 border-b-2  border-b-slate-200 hidden p-4 absolute left-0 mt-5 group-hover:block  '>
                 <div className='flex items-start justify-center gap-48'>
                  <div className='mb-7'>
                    <h1 className='mb-4 text-sm'>Shop By Type</h1>
                    <p>Kadas</p>
                    <p>Single Bangle</p>
                    <p>Pair Bangle</p>
                    <p>Bracelet</p>
                    <p>92.5 Changeable</p>
                  </div>
                  <div>
                    <h1 className='mb-4 text-sm'>Shop By Collection</h1>
                    <p>Antique</p>
                    <p>Kundan</p>
                    <p>Temple</p>
                    <p>92.5 Silver</p>
                    <p>Zircon</p>
                
                  </div>
                  <div>
                    <h1 className='mb-4 text-sm'>Shop By Occasion</h1>
                    <p>Bridal</p>
                    <p>Office Wear</p>
                    <p>Festive</p>
                    <p>Party</p>
                    <p>Casual</p>
                  </div>
                  </div>
                  </div>
                 </li>
                <li className='pl-12 text-1xl group'><a className='hover:font-bold hover:text-gray-600'>Collection </a>
                <div className='bg-white  border-t-2 border-t-slate-200 border-b-2  border-b-slate-200 hidden p-4 absolute left-auto mt-5 group-hover:block  '>
                 <div >
                  <div className='mb-3'>
                    <p className='pb-2'>New Arrivals</p>
                    <p className='pb-2'>Pastel Hues</p>
                    <p className='pb-2'>Divine</p>
                    <p className='pb-2'>Antique Jewellery</p>
                    <p className='pb-2'>Kundan Jewellery</p>
                   <p className='pb-2'>Zircon Jewellery</p> 
                  </div>
                 
                 
                  </div>
                  </div>
                </li>
                <li className='pl-12 text-1xl group'><a className='hover:font-bold hover:text-gray-600'>Occasions </a>
                <div className='bg-white  border-t-2 border-t-slate-200 border-b-2  border-b-slate-200 hidden p-4 absolute left-auto mt-5 group-hover:block  '>
                 <div >
                  <div className='mb-3 w-32'>
                    <p className='pb-2'>Gift Cards</p>
                    <p className='pb-2'>Bridal</p>
                    <p className='pb-2'>Bridesmaid</p>
                    <p className='pb-2'>Office Wear</p>
                    <p className='pb-2'>Festive</p>
                   <p className='pb-2'>Party</p> 
                  <p> Casual</p>
                  </div>
                 
                 
                  </div>
                  </div></li>
                <li className='pl-12 text-1xl'><a className='hover:font-bold hover:text-gray-600'>Happy Customers </a></li>
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
