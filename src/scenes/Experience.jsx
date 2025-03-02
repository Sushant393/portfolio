import LineGradient from "../components/LineGradient";
// import useMediaQuery from "../hooks/useMediaQuery";  
import { motion } from "framer-motion";
import { useState } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
const companies = ["Deloitte","Myntra","Bharat Tech"];
const workDetails = {
    "Deloitte":{
    role:"Backend Developer",
    location:"Hyderabad,India",
    duration:"Jul 2022 - Aug 2023",
    details:["Integrated multiple payment gateways with the native app",
        "Optimized user authentication by eliminating certain redundant processess"
    ]
    },
    "Myntra":{
        role:"Frontend Developer",
        location:"Banglore,India",
        duration:"Jul 2021 - Jun 2022",
        details:["Added filters for the wide range of products in the marketplace to help customers view and choose the best products",
            "Added feature to display products of each category with respect to the user ratings and stars",
            "UI enhancements using React JS, optimizing the website by 20% and increasing customer by 10%"
        ]
        },
        "Bharat Tech":{
            role:"Front End Developer Intern",
            location:"Mumbai[Remote],India",
            duration:"Oct 2023 - Present",
            details:["Collaborated with senior developers to design and implement responsive user interfaces using HTML, CSS, and JavaScript, improving the user experience of core web applications.",
                "Assisted in converting static design mockups into interactive web pages using ReactJS and integrated them with backend APIs, ensuring seamless data flow.",
                "Contributed to creating reusable UI components with TailwindCSS and React, which reduced development time for future features by 25%.",
                "Gained hands-on experience with front-end frameworks and tools like React, TailwindCSS, and Webpack, leading to a strong understanding of modern web development practices."                
            ]
            }
}
    

const MyExperience = () => {
    const [companySelected,setCompanySelected] = useState("Bharat Tech");
  // const  isAboveLarge = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section id="experience" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            Where I've<span className="text-red"> Worked</span>
          </p>
          <LineGradient width="w-1/2" />
        </motion.div>
      </div>

      {/* WORK */}
      
     <div className="md:flex items-center justify-evenly border py-5 md:py-14">
     <motion.div        
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex gap-4 md:flex-col md:border-l-2 border-blue"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        {companies.map((company)=>{
            return <div key={company}
            className={`md:p-5 ${companySelected===company?"md:bg-gradient-rainblue md:border-none border-b-2 border-blue":""}`}
                onClick={e=>{setCompanySelected(company)}}
            >{company}</div>
        })}
        </motion.div>
        <div className="details md:w-1/2">
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
            <div>
                <h1 className=" text-2xl font-semibold">{workDetails[companySelected].role} <span className=" text-blue hover:underline hover:cursor-pointer">@ {companySelected}</span> </h1>
                <div className="text-sm font-semibold block py-2">
                <span>{workDetails[companySelected].location} | {workDetails[companySelected].duration}</span>
                </div>
                
            </div>
            </motion.div>

            <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },            
          }}
          className="mx-5 my-5 text-lg"
        >
                {workDetails[companySelected].details.map((detail,key)=>{
                   return  <li className="list-disc" key={key}>{detail}</li>
                })}
            </motion.div>
        </div>
     </div>
    </section>
  );
};

export default MyExperience;
