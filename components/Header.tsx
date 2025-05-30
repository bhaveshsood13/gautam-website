import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-5xl text-center mx-auto pt-28 sm:pt-32 lg:pt-36 xl:h-screen flex flex-col items-center justify-center gap-4 '>

        <div>
             <Image src={assets.profile_gautam} alt='' className='rounded-full w-32 lg:w-62'/>
        
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
        Hi! I'm Gautam Sood <Image src={assets.hand_icon} alt='' className='w-6'/>  </h3>
        <h1 className='text-3xl sm:text-4xl lg:text-[66px] font-ovo '>
        Assistant Professor of Law @ <br /> Pepperdine Caruso Law </h1>
        <br />
        <p className='max-w-4xl mx-auto '>With over 10 years of experience as a lawyer, I have successfully tried complex cases involving high-stakes criminal matters, handled a wide variety of business disputes and negotiations, real estate transactions, and business operational challenges. I have also leveraged my legal skills and knowledge to invest in and advise early stage startups, focusing on business development, product development, and corporate culture.         </p>
        {/* <p>        Currently, I am an Adjunct Professor of Law at Pepperdine Caruso Law, where I teach courses on Trial Advocacy, Evidence and Criminal Procedure. I am also a Part-Time Lecturer at Chapman University School of Law where I teach Contract Drafting and Negotiations. Separate from teaching, I served as a Postdoctoral Scholar at UCLA Anderson School of Management, conducting research and advocacy on Equity, Diversity, and Inclusion (EDI) across various sectors and industries. This work has driven me to open a consultancy in the Equity, Diversity, and Inclusion space where my mission is to use my expertise and passion to promote fairness, business success, innovation, and organizational excellence. </p> */}
    
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 mb-20'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2  '>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
        </div>
    
    
    </div>
  )
}

export default Header
