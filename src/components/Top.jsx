import React, { useEffect } from 'react';
import Typed from "typed.js"
import "../App.css"
import { motion } from "framer-motion";
function Top() {

   
    useEffect(()=>{
        const typedElement = document.querySelector('.typed');
        if(typedElement){
            new Typed(".typed",{
    
                strings:['Developer','Innovator','Designer','Artist'],
                typeSpeed:100,
                backSpeed: 100,       // Adjust this value for backspacing speed
                backDelay: 1000,     // Delay before starting to backspace
                startDelay: 50,  
                loop:true,
              
            })
        }

    },[])

 

   


    
    return (
        <motion.div className='top'
        animate={{
          rotate:360
          
        }}
        
        >
        <div className='info-top'>          
          <h3>Hello there...</h3>
          <h1 >User </h1>
          <p  className='p-typed'> I Am Passionate  <span className="typed"></span></p>
          <p>As a junior software developer, I am passionate about crafting efficient and elegant solutions to complex problems, continuously expanding my skills to contribute meaningfully to innovative projects.</p>
          

          <div className='top-links'>
          <a href=''>
            <button className='btn'>About me </button>
            </a>
        
          
            <a href=''>
          <button className='btn'>My Work</button>~
            </a>
          
          </div>
          
          
          </div>
          <div className='img-top'>
            <img className=' img-fluid w-50' src='https://static.vecteezy.com/system/resources/previews/022/484/140/non_2x/qualified-3d-electrician-with-cable-splicer-great-for-electrical-or-industrial-designs-transparent-background-free-png.png'/>
          </div>
          

          </motion.div>
          )


     
}

export default Top;