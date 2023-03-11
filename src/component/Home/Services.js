import img1 from "../../assets/image/1Homepage/Images/asset 1.png";
import img2 from "../../assets/image/1Homepage/icons/Asset 14.png";
import img3 from "../../assets/image/1Homepage/icons/Asset 13.png";
import img4 from "../../assets/image/1Homepage/icons/Asset 11.png";
import img5 from "../../assets/image/1Homepage/icons/Asset 12.png"; 
import { Link } from "react-router-dom";
function Services() {
  return (
    <>
      <div className="bg4 contanier jumbotron">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <img className="asset1" src={img1} alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <h1 className="text">
              OUR <strong className="serblue">SERVICES</strong>
            </h1>
            <br />
            <br />
            <p className="textp">
              We add our expertise with various IT services designed to increase
              traffic, leads, and sales to your organization along with hiring
              and outsourcing. We achieve results by producing potent content
              that converts and generates leads through compelling campaigns
              using IT tools and digital tactics.
            </p>
            <span>
              <button className="btnfind2 my-2 my-sm-0" type="find">
              <Link to='it-remote' className="text-decoration-none">  Explore</Link>
              </button>
            </span>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-6">
            
        <ul>
        <li>Dedicated IT Recruitment Services to match perfect candidate with provided job description </li>
        <li>Office and equipment procurement for larger teams </li>
        <li>Remote Software team creation </li>
          <li>Payroll Management to process attendance and calculate salaries</li>
        </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
