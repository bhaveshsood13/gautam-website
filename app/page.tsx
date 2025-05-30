'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     <Education/>
     <Publications/>
     <Contact/>
     <Footer/>
    </>
  );
}
