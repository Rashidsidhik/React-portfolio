import Hero from "../../components/Hero";
import Draw from "../../components/Draw";
import About from "../../components/AboutMe";
import Skills from '../../components/Skills/Skills';
import { NavLink } from "react-router-dom";

import Button from "../../components/Button";
/**
 * Represents the Landing page component.
 * Displays the main landing page content including Hero, Drawing, and About sections.
 *
 * @component
 * @param {string} name - The name of the user displayed in the Hero section.
 */

const Landing = ({ name }) => {
  // Inline styles for the main landing container
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
   
      {/* Main Landing Page */}
      <main className="landing container" style={styles.landing}>
      
        {/* Display the drawing component */}
        {/* <Draw /> */}

        {/* Display the hero component */}
        <Hero name={name} />
      </main>
     
      {/* Display the about section */}
    
      <About />
      <Skills />
    </>
  );
};

export default Landing;
