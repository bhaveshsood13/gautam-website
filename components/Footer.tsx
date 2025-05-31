import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center items-center'>
            <Image src={isDarkMode? assets.logo_dark: assets.gautam_logo} alt='' className='w-40  items-center mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto pr-17'>
            <Image src={isDarkMode? assets.mail_icon_dark :assets.mail_icon} alt='' className='w-6 mx-auto '/>
            gautamsood@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
              © Gatuam Sood All rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer
