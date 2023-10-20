import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skillls(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: 'rgb(243,243,243)'}}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
