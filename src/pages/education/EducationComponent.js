import React, { Component } from "react";

import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { chosenTheme } from "./theme";

class Education extends Component {
  render() {
    const theme={chosenTheme};
    return (
      <div className="education-main">
      
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color:'rgb(243,243,243)' }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color:'rgb(243,243,243)' }}>
                  Basic Qualification and Certifcations
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div> 
          </Fade>
          <Educations theme={chosenTheme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={chosenTheme} />
          ) : null}
        </div>
     
        <TopButton theme={chosenTheme} />
      </div>
    );
  }
}

export default Education;