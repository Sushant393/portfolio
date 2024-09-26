import LineGradient from "../components/LineGradient";
// import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  // const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
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
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

        {/* <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 h-[260px] w-full "
                src="assets/banner.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/banner.jpg" />
          )}
        </div> */}
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* FOUNDATION */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                FOUNDATION
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 flex gap-2  ">
            <div className="w-[100px] h-[200px]  flex justify-center items-center "><img className="h-full w-full object-contain " src="/assets/html.png" alt="html-logo"  /></div>
            <div className="w-[100px] h-[200px]  flex justify-center items-center "><img className="h-full w-full object-contain " src="/assets/css.png" alt="css-logo" /></div>
            <div className="w-[100px] h-[200px]  flex justify-center items-center "><img className="h-full w-full object-contain " src="/assets/javascript.png" alt="js-logo" /></div>
            
          </div>
        </motion.div>

        {/* FRAMEWORKS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              FRAMEWORKS
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 flex gap-2  flex-wrap  justify-center">
          <div className=" flex items-center justify-center h-[200px] w-[60px]  "><img className="object-contain   h-full w-full" src="/assets/react.png" alt="react-logo"  /></div>
            <div className=" flex items-center justify-center h-[200px] w-[60px] "><img className="object-contain  h-full w-full" src="/assets/TailwindCSS.png" alt="tw-css-logo" /></div>
            <div className=" flex items-center justify-center h-[200px] w-[60px] "><img className="object-contain  h-full w-full" src="/assets/bootstrap-brand.png" alt="bootstap-logo"  /></div>
            <div className=" flex justify-center h-[200px] w-[60px] "><img className="object-contain  h-full w-full" src="/assets/mui.png" alt="mui-logo"  /></div>
          </div>
        </motion.div>
        {/* SERVER*/}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              SERVER
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  bg-yellow absolute right-0 top-0 z-[-1]" />
            
          </div>
          <div className="mt-5 flex gap-2 justify-center  ">
            <div className=" w-[100px] h-[200px]  flex justify-center items-center"><img className="  h-full w-full object-contain" src="/assets/python-logo.png" alt="python-logo"  /></div>
            <div className="w-[100px]  h-[200px]  flex justify-center items-center "><img className="  h-full w-full object-contain" src="/assets/firebase.png" alt="firebase-logo" /></div>
            <div className="w-[100px]  h-[200px]  flex justify-center items-center "><img className="  h-full w-full object-contain" src="/assets/nodejs.png" alt="nodejs-logo" /></div>
            <div className="w-[100px]  h-[200px]  flex justify-center items-center "><img className="  h-full w-full object-contain" src="/assets/mongodb.png" alt="mongodb-logo" /></div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
