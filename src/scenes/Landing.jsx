import React from 'react'
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="md:flex  gap-16 md:h-full py-10"
    >
        <div className="z-30  mt-20 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="flex flex-col md:text-8xl text-6xl  font-playfair z-10 text-start">
            <span className='text-lg'>Hi, I am</span>
            <span className=''>
              Sushant 
            </span>
            <div className="md:mt-10 mt-5 animated-text relative md:h-[90px] h-[60px] overflow-hidden md:text-[5rem] text-[2rem] text-blue">
                <h3 className='leading-[70px] md:leading-[90px] '>Software Developer</h3>
                <h3 className='leading-[70px] md:leading-[90px] '>FrontEnd Developer</h3>
            </div>  
          </p>
          
          <p className="mt-10  mb-7 text-sm md:text-base md:w-[70%] text-start">
            I am an enthusiastic and keen learner in the field of computers,
            programming and current technological issues. A multidisciplinary developer with a passion to solve real world problem with code in combination with  engaging & entertaining user experiences.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-10  justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            href="/assets/sushant-resume.pdf"
            target="_blank"  
            download="Sushant-FrontEnd-Resume.pdf"    
            onClick={e=>{console.log("Button Clicked")}}      
          >
            Resume
          </a>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default Landing