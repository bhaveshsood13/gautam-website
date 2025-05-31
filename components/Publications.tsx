import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Publications = ({isDarkMode}) => {
  return (
    <div id='publications' className='w-full px-[12%] py-10 scroll-mt-20 mb-20'>
        <h2 className='text-center text-5xl '>Publications</h2>

        <div className='flex flex-col lg:flex-row gap-20 my-20 items-center justify-center'>
            <div className=' grid grid-cols-1 sm:grid-cols-4  gap-6 px-10 my-10 mt-20 '>
        {serviceData.map(({title, description , link},index)=>(

                    <div key={index}  className='border border-gray-400 rounded-lg px-8 py-12  hover:bg-lime-200 hover:-translate-y-1  duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover/50'>
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm lg:text-md xl:text-xl  whitespace-pre-line leading-5 dark:text-white/80'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read Paper <Image src={isDarkMode? assets.right_arrow_white: assets.right_arrow} className='w-4 ' alt=''/></a>
                    </div>
                    ))}
        </div>
        </div>
        
    </div>
  )
}

export default Publications
