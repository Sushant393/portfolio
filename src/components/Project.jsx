import React from 'react';
import { motion } from "framer-motion";

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col  items-center  p-16 text-deep-blue`;
const Project = ({name,details,techStack,imageURL,linkGithub,linkDemo}) => {
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className= {`${overlayStyles} text-base text-justify`} >
        <p className="text-2xl font-playfair">{name}</p>
        <p className="mt-7">
          {details}
        </p>
        <p className="mt-5  flex">
           {techStack.map((tech,i)=><img src={`/assets/${tech}`} alt={tech} key={i} className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] '/>)}
        </p>
        <div className="bttns flex gap-52 mt-5 items-center">
            <div >
            <a className='p-5 ' href={linkGithub}><img src="/assets/github-mark.png" alt="git" className='md:h-[75px] md:w-[75px] h-[50px] w-[50px] object-contain'/> </a>
            </div>
            
            
          <div>
          <a href={linkDemo}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>
          </div>   
        </div>
      </div>
     
      <div className="h-[400px] max-w-[400px] bg-white flex justify-center">
      <img src={imageURL} alt={name}  />
      </div>
      
    </motion.div>
  )
}

export default Project