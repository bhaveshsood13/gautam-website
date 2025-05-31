import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
  console.log('isDarkMode in About:', isDarkMode);

  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 mb-20'>
      <h2 className='text-center text-5xl '>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20  max-w-screen-xl mx-auto px-6 lg:px-10' >
          <div className='w-64 sm:w-80 lg:w-96 xl:w-[28rem]  rounded-3xl max-w-none'>
              <Image src={assets.gautam_headshot} alt='user' className='w-full  h-auto rounded-3xl'/>
          </div>
          <div className='flex-1'>
            <p className='leading-relaxed max-w-8xl lg:text-lg xl:text-2xl'>
            Currently, I am an Adjunct Professor of Law at Pepperdine Caruso Law, where I teach courses on Trial Advocacy, Evidence and Criminal Procedure. I am also a Part-Time Lecturer at Chapman University School of Law where I teach Contract Drafting and Negotiations. Separate from teaching, I served as a Postdoctoral Scholar at UCLA Anderson School of Management, conducting research and advocacy on Equity, Diversity, and Inclusion (EDI) across various sectors and industries. This work has driven me to open a consultancy in the Equity, Diversity, and Inclusion space where my mission is to use my expertise and passion to promote fairness, business success, innovation, and organizational excellence.
            </p>
          </div>
      </div>
    </div>
  )
}

export default About
