import {infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Education = () => {
  return (
    <div id='education' className='w-full px-[7%] py-10 scroll-mt-20 '>
      
       <h2 className='text-center text-5xl '> Education </h2>
       <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 w-full '>

            {infoList.map(({icon,logo, title, degree , description},index)=>(
                <li key={index} className='border-[0.5px]  border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-teal-100 hover:-translate-y-1  duration-500 hover:shadow-black'>
                    <Image alt={title} src={icon} className='w-7 mt-3 pb-3'/>
                    <div className="flex flex-col sm:flex-row  items-center gap-2">
                    <Image
                        src={logo} // your UCLA logo image
                        alt="UCLA Logo"
                        className="w-9 h-9 object-contain shrink-0"
                    />
                    <h3 className='my-4 font-semibold text-gray-700 whitespace-nowrap '>{title}</h3>
                    </div>
                     
                     <p className='text-sm lg:text-md xl:text-xl font-semibold text-gray-600 mb-4'>{degree}</p>
                    <p className='text-gray-600 text-sm lg:text-md xl:text-xl  whitespace-pre-line'>{description}</p>
                </li>
            ))}
        </ul>
       </div>
    </div>
  )
}

export default Education
