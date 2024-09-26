import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about" className="pt-10 pb-24">
      <div className="mt-32">
        {/* {TITLE} */}
        <motion.div
          className="md:w-[35%]"
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
            ABOUT <span className="text-red">ME</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
        <div className="md:flex md:justify-between md:gap-16">
          {/* IMAGE */}
          <motion.div
            className="md:order-2 mt-16 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {isAboveLarge ? (
              <div
                className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-16 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
              >
                <img
                  alt="profile"
                  className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] rounded-t-full md:max-w-[600px]"
                  src="assets/profilepic.jpg"
                />
              </div>
            ) : (
              <img
                alt="profile"
                className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-full"
                src="assets/profilepic.jpg"
              />
            )}
          </motion.div>
          {/* PARAGRAPH */}
          <motion.div className="mt-16 md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
            <p className=" text-left">
              Hi, I am Sushant Kumar Shah Kanu. As a passionate and avid learner
              in the realm of computers and programming, I find myself
              captivated by the ever-evolving landscape of technology. My
              journey as a software engineer has been nothing short of
              exhilarating. Armed with a B.Tech in{" "}
              <span className="font-semibold text-red ">
                Computer Science and Engineering
              </span>{" "}
              with an impressive{" "}
              <span className="font-semibold text-red">8.80 CGPA</span> from
              MRCET College in Hyderabad, I have honed my skills in various
              domains, including{" "}
              <span className="font-semibold text-red">
                web development, machine learning, OOPs, Python, and React
              </span>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
