import Image from 'next/image'
import React, { useRef } from 'react'
import {assets} from '@/assets/assets'

const Navbar = () => {

  const sideMenuReferenceVariable = useRef <HTMLUListElement| null >(null); // creates a hook to reference the div element without re-rendering.
  const openMenu = () => {
    if (sideMenuReferenceVariable.current) {
       sideMenuReferenceVariable.current.style.transform = 'translateX(-16rem)'
      }
    
  }

  const closeMenu = () => {
    if (sideMenuReferenceVariable.current) {
        sideMenuReferenceVariable.current.style.transform = 'translateX(16rem)'
       }
  }
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-86%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
            <Image src={assets.gautam_logo} className='w-60 cursor-pointer mr-14' alt='' />
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm opacity-75 hover:opacity-100'>
            <li><a href="#top" className='font-ovo '>Home</a></li>
            <li><a href="#about">About</a></li>

            <li><a href="#education">Education</a></li>

            <li><a href="#publications">Publications</a></li>

            <li><a href="#contactme">Contact Me</a></li>


        </ul>

        <div className='flex items-center gap-4'>
            <button>
                <Image src={assets.moon_icon} alt='' className='w-6'/>
            </button>
            <a href="contact" className='hidden lg:flex item-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'> Contact
                <Image src={assets.arrow_icon} className='w-4 h-4 mt-1' alt='' />
            </a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={assets.menu_black} alt='' className='w-6'/>
            </button>
        </div>
        {/* Mobile menu */}
        
        <ul ref={sideMenuReferenceVariable} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-lime-200 transition duration-500'>
            
            <div className='flex flex-col gap-4 m-0 p-0' onClick={closeMenu}>
            <div className='absolute right-6 top-6' >
            <Image src={assets.close_black} alt='' className='w-6 cursor-pointer'/>
            </div>
            <li><a href="#top" className='font-ovo '>Home</a></li>
            <li><a href="#about">About</a></li>

            <li><a href="#education">Education</a></li>

            <li><a href="#publications">Publications</a></li>

            <li><a href="#contactme">Contact Me</a></li>
            </div>
           



        </ul>
      </nav>
    </>
  )
}

export default Navbar


