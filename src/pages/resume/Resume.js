import PageHeader from "../../components/PageHeader";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";

const Resume = ({ brand }) => {
  return (
    <section className="resume container">
     
      <PageHeader title="Resume" description="Uncover my expertise" />
      <p className="brand">{brand}</p>
      <NavLink to="https://drive.google.com/file/d/11gmq-9xsTz7Mz3RftvJYQ2_zyaDB5TB6/view?usp=sharing">
    <Button name="VIEW RESUME" />
  </NavLink>
    </section>
  ); 
};
 
export default Resume;
