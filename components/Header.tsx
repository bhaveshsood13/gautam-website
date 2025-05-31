import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'
import { motion } from "motion/react"

const Header = ({isDarkMode}) => {
  console.log('isDarkMode in About:', isDarkMode);

  return (
    <div className='w-11/12 max-w-5xl text-center mx-auto pt-28 sm:pt-32 lg:pt-36 xl:h-screen flex flex-col items-center justify-center gap-4 '>

        <motion.div
         initial={{ y: -20, opacity:0 }}
         whileInView={{ y:0, opacity:1}}
         transition={{duration:0.6 , }}
         >
             <Image src={assets.profile_gautam} alt='' className='rounded-full w-32 lg:w-62'/>
        
        </motion.div>
        <motion.h3 
         initial={{ y: -20, opacity:0 }}
         whileInView={{ y:0, opacity:1}}
         transition={{duration:0.6 , delay:0.3 }}
        className='flex items-end gap-2 text-xl md:text-4xl mb-6'>
        Hi! I&rsquo;m Gautam Sood <Image src={assets.hand_icon} alt='' className='w-6'/>  </motion.h3>


        <motion.h1 className=''
          initial={{ y: -30, opacity:0 }}
          whileInView={{ y:0, opacity:1}}
          transition={{duration:0.8 , delay:0.7 }}
        >
          <div className='text-2xl sm:text-2xl lg:text-[40px]'>
            Assistant Professor of Law
          </div>
          <div className='flex items-center gap-2 text-3xl sm:text-3xl lg:text-[60px] mb-3'>
            <Image src={assets.pepperdine_law} alt="Pepperdine Logo" className="h-16 sm:h-8 w-auto" />
            Pepperdine Caruso Law
          </div>
        </motion.h1>
      
        <br />
        <motion.p 
         initial={{ opacity:0 }}
         whileInView={{opacity:1}}
         transition={{duration:1 , delay:1.3 }}
        
        className='max-w-4xl mx-auto '>With over 10 years of experience as a lawyer, I have successfully tried complex cases involving high-stakes criminal matters, handled a wide variety of business disputes and negotiations, real estate transactions, and business operational challenges. I have also leveraged my legal skills and knowledge to invest in and advise early stage startups, focusing on business development, product development, and corporate culture.         </motion.p>
        {/* <p>        Currently, I am an Adjunct Professor of Law at Pepperdine Caruso Law, where I teach courses on Trial Advocacy, Evidence and Criminal Procedure. I am also a Part-Time Lecturer at Chapman University School of Law where I teach Contract Drafting and Negotiations. Separate from teaching, I served as a Postdoctoral Scholar at UCLA Anderson School of Management, conducting research and advocacy on Equity, Diversity, and Inclusion (EDI) across various sectors and industries. This work has driven me to open a consultancy in the Equity, Diversity, and Inclusion space where my mission is to use my expertise and passion to promote fairness, business success, innovation, and organizational excellence. </p> */}
    
        <motion.div 
          initial={{  y: 30, opacity:0 }}
          whileInView={{ y: 0 ,opacity:1}}
          transition={{duration:1 , delay:1.3 }}
         
        className='flex flex-col sm:flex-row items-center gap-4 mt-4 mb-25'>
            <a href="#contactme" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2  dark:bg-transparent  '>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
        </motion.div>
    
    
    </div>
  )
}

export default Header
