import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">

          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a MERN STACK DEVELOPER.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  Hello! My name is <span style={{ color: "var(--hl-color)" }}> Rashid sidhik</span>and I enjoy creating things that live on the internet. As a self-taught Full stack developer, I have a strong passion for learning new technologies and staying up-to-date with the latest trends in the industry. I enjoy conducting research on new tools and techniques to improve my skill set, and I am not afraid to dive into unfamiliar territories. <span style={{ color: "var(--hl-color)" }}> </span>.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Fast-forward to today, and I’ ve had the privilege of with multiple project . i have also build a E-commerce Web app from scratch to deployment<span style={{ color: "var(--hl-color)" }}> Shoemaze</span>
                  , With my expertise in building dynamic web applications, I am confident in my ability to deliver high-quality code that meets business requirements.{" "}
                  <span style={{ color: "var(--hl-color)" }}> </span>
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  I am currently working on an exciting new project - a learning management system platform that simplifies the learning process and makes education more accessible to everyone. I am excited to continue developing and enhancing this project
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
