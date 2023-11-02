import PageHeader from "../../components/PageHeader";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
const Resume = ({ brand }) => {
  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      <p className="brand">{brand}</p>
      <NavLink to="https://drive.google.com/file/d/1L041-IzSTW29hPOEglCmRE4vipTR4fb_/view?usp=sharing">
    <Button name="VIEW RESUME" />
  </NavLink>
    </section>
  );
};

export default Resume;
