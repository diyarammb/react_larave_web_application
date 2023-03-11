
import img2 from "../../assets/imagecir.png";
import img3 from "../../assets/image/1Homepage/Images/Asset 16.png";
 
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description content=Who is Tenet? How we work? What is the mission and vision behind our organization's existence? You can know it all, just visit our website" />
        <meta
          property="og:title"
          content="Who is Tenet? How we work? What is our mission and vision?u"
        />
      </Helmet>
     
       
      {/* <div className="bg5 container jumbotron">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img className="aboutimg1" src={img2} alt="" />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <h4 className="abouttext1">Accounting Outsourcing</h4>
            <br />
            <br />

            <p className="aboutp2">
              Every business needs an accountant to function properly, but
              hiring one is expensive. To help you minimize costs, Tenet
              provides accounting services including data screening and payrolls
              too. Our experts customize unique accounting solutions while
              considering your demands. Professional ethics, client privacy, and
              data security are also at the core of what we do
              <br />
              If data entry is bothering you not to worry as our professionals
              will handle bookkeeping as well so you can focus on the crucial
              aspects of your business while having more spare time.
            </p>
            <button className="btnfind1 my-2 my-sm-0" type="find">
              <Link to="/contact" className="text-decoration-none">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div> */}

      {/* what we do */}
      <div className="bg4container jumbotron container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-12">
            <img className="aboutimage" src={img3} alt="" />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12">
            <h4 className="abouttext">The Advantages of working with us</h4>

            <p className="aboutp1">
              <strong> Scale your workforce with ease </strong><br/>  
               Our IT recruiters take care of
              vetting candidates and presenting them on the employer value
              proposition to attract the best candidates that fit your needs .
              <br />
              <br /> 
              <strong>2-4 Weeks Closing Time </strong><br/>
              After initial contact, we prepare
              an analysis of your specific roles and provide a time-to-hire
              commitment.
              <br />  <br /> 
              <strong>We specialize in hiring Senior Software Developers </strong> <br/> On
                average it takes 8 CVs to procure a hire. Depending on the
                specific role.<br/> <br /> 
              
                <strong> Be in control of your overheads: </strong><br/>Our monthly fees are
                designed to spread the cost of hiring over the contract period
                while minimizing churn costs to the employer.
              
            </p>
            <p className="aboutp1">
            <strong>Mitigate your risks:</strong><br/> Outsourced workforce is hired directly by
              us and seconded to the employer. Saving you time and legal fees of
              setting up an LLC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
