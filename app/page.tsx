'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Publications from "@/components/Publications";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)


  useEffect(() => {
    // Check the saved theme preference on initial load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
    }
  },[isDarkMode])

  return (
    <>

     <Navbar isDarkMode ={isDarkMode} setIsDarkMode ={setIsDarkMode} />

     <Header  isDarkMode ={isDarkMode}/>
     <About  isDarkMode ={isDarkMode}/>
     <Education isDarkMode ={isDarkMode}/>
     <Publications isDarkMode ={isDarkMode}/>
     <Contact isDarkMode ={isDarkMode}/>
     <Footer isDarkMode ={isDarkMode}/>
    </>
  );
}
