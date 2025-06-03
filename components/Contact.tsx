import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = ({isDarkMode}) => {
  console.log('isDarkMode in About:', isDarkMode);

    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target as HTMLFormElement);
  
      formData.append("access_key", "1b9faa4e-db46-4587-871d-3053f1dd1e93");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
       (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div id='contactme' className='w-full px-[12%] py-10 scroll-mt-10 mb-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <h4 className='text-center  text-xl  p-3'>Connect with me </h4>
        <h2 className='text-center text-5xl '> Get in Touch </h2>
        <p className='leading-relaxed max-w-2xl lg:text-lg xl:text-2xl text-center mx-auto mt-5 mb-12 '>
           I&apos;d love to hear from you! If you have any questions, comments or concerns you would like to discuss, please use the form below.
        </p>

        <form onSubmit={onSubmit} action="" className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                <input type="text" placeholder='Enter your name'   required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white px-5  dark:bg-dark-hover/30 dark:border-white/90  '  name='name'/>
                <input type="email" placeholder='Enter your email id' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white px-5  dark:bg-dark-hover/30 dark:border-white/90 ' name='emailid' />
            </div>
            <textarea rows={5} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white px-5  mb-5  dark:bg-dark-hover/30 dark:border-white/90' name='message'></textarea>
            <button type='submit' className='py-1 px-5 w-max flex items-center justify-between gap-2 bg-black/85 text-white rounded-full mx-auto hover:bg-black duration-500  dark:bg-transparent dark:border-[0.5px] dark:hover:bg-fuchsia-400'> Submit Now <Image alt='' className='w-4' src={assets.right_arrow_white}/></button>
        
        <p className='mt-4 text-center'>{result} </p>
        </form>
    </div>
  )
}

export default Contact
