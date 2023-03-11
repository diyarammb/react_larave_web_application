import img from "../../assets/typing2.gif";
import serviceImage from "../../assets/ite.gif";
import icons from "../../assets/image/1Homepage/icons/Asset 17.png";
import imgg from "../../assets/Asset 1.png";
import imgg1 from "../../assets/Asset 2.png";
import cir from "../../assets/imagecir.png"
import iconv from "../../assets/image/Asset 1.png"
import pr1 from "../../assets/image/2Services/Logo and icon/persn.png";
import pr2 from "../../assets/image/./2Services/Logo and icon/idea.png";
import pr3 from "../../assets/image/2Services/Logo and icon/msg.png";
import pr4 from "../../assets/image/2Services/Logo and icon/like.png";
import seo from "../../assets/image/2Services/images/ezgif.com-gif-maker.gif";
import ft from "../../assets/image/2Services/images/1.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
function HeroPage() {
  return (
    <>
      <Helmet>
        {/* <title>Are you looking for IT Remote Team resourcing? Or looking for IT Team outstaffing?</title> */}
        <meta
          name="keywords"
          content="IT Remote Team Resourcing, IT Team outstaffing, IT Team Recruiting"
        />

        <meta
          name="description"
          content="Our professionally managed IT team resourcing services are infused with a wide range of features that are cost-effective, and can be readily deployed in any setting for all of its clients, either huge corporations or SMEs."
        />
        <meta
          property="og:title"
          content=" Are you looking for IT Remote Team resourcing? Or looking for IT Team outstaffing?

"
        />
      </Helmet>
      <div className="row mt-4"></div>
      <div className="row mt-4"></div>
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h1 className="ith1">
                IT Remote Team Resourcing <br />
                for Software Peoduct
                <br />
                Companies
              </h1>
              <p className="itp">
                In your arms to scale your IT team <br />
                with confidence.
              </p>
              <br />
              <button className="btnsearch2  my-2 my-sm-0" type="contact">
                <Link to="/contact" className="text-decoration-none">
                  {" "}
                  Contact us
                </Link>
              </button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <img className="itimg" src={serviceImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <img className="img2ser rounded-circle" src={img} alt=""   />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h2 className="ith2">WE OFFER SERVICES INCLUDING </h2>
              <div>
                <img className="aset17" src={icons} alt="" />
                <p className="aset17p">
                  A team of IT specialists particularly assigned
                  <br /> for specific projects.
                </p>
              </div>

              <div>
                <img className="aset17" src={icons} alt="" />
                <p className="aset17p">
                  Remote IT management as well as Highly
                  <br />
                  Skilled Team Resourcing for Remote projects.
                </p>
              </div>
              <div>
                <img className="aset17" src={icons} alt="" />
                <p className="aset17p">
                  Software designing after analyzing all the
                  <br />
                  needs of our client.
                </p>
              </div>
              <div>
                <img className="aset17" src={icons} alt="" />
                <p className="aset17p">
                  Database management with proper
                  <br />
                  networking and dedicated administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* garuantee section */}

      <section className="gurantee">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="guranteeh3">We Gurantee </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3">
              <h2 className="7"> 7+</h2>
              <p className="7p">services we are expert in</p>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3">
              <h2 className="7"> 15+</h2>
              <p className="7p">Certified Partners</p>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3">
              <h2 className="7"> 40+</h2>
              <p className="7p">our happy clients</p>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-3">
              <h2 className="7"> 3+</h2>
              <p className="7p">regions where we provide our services</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6"> 
             </div>
            
            <div className="col-lg-6 ">
              
           
              <img className="curve" src={imgg} alt="" />
             <img src={iconv} className='itIcons'/>
              <h5 className="imageoopertext">it is only when  thing you go wrong than <br/>
              we remind you know powerful you are</h5>
             
            </div>
          </div>
        </div>
      </section>

      
      {/* advantage of working */}
      <section className="purple mt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="purh2">
                The advantages <br />
                of working <br />
                with us:
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <br />
              <br />
              <br />
              <br />
              <br />
              <span>
                <img className="persn" src={pr1} alt="" />
                <div>
                  <h6 className="happy">Happy Clients</h6>
                  <p className="persnp">
                    We are admired by many of our clients as our priority is to
                    secure our client’s data while providing the resource to
                    meet their needs.
                  </p>
                </div>
              </span>
              <br />
              <br />
              <br />
              <span>
                <img className="persn" src={pr2} alt="" />
                <div>
                  <h6 className="happy">Consultancy</h6>
                  <p className="persnp">
                    Our expert advise the best possible solution Our expert
                    advise the best possible solution
                  </p>
                </div>
              </span>
            </div>
            <div className="col-lg-6">
              <span>
                <img className="persn" src={pr3} alt="" />
                <div>
                  <h6 className="happy">24/7 Services</h6>
                  <p className="persnp">
                    You will have a complete assistance and best possible
                    solution by our experts in your requirements
                  </p>
                </div>
              </span>
              <br />
              <br />
              <br />
              <br />
              <span>
                <img className="persn" src={pr4} alt="" />
                <div>
                  <h6 className="happy">Qualified Tech</h6>
                  <p className="persnp">
                    With competing world of IT, we recruit qualified tech
                    experts who can fulfil all the requirements of our clients.
                  </p>
                </div>
              </span>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>

      {/* Process of our work */}

      <section class="onesec">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h4 class="pro">Process of our work</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="one">
                <h5 class="oneh5">1</h5>
                <h6 class="oneh6">Screening</h6>
                <p class="onep">
                  We align the best match candidates, both unskilled and skilled
                  as per the requirements, to meet short, medium or long term
                  hiring needs of our clients.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="one">
                <h5 class="oneh5">2</h5>
                <h6 class="oneh6">Pre-interview</h6>
                <p class="onep2">
                  Candidates are then pre-interviewed by our professionals to
                  shortlist the suitable match.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="one">
                <h5 class="oneh5">3</h5>
                <h6 class="oneh6">Interview</h6>
                <p class="onep">
                  Final interview is conducted in the presence of our client or
                  their representatives along with our experts to find the best
                  match among the shortlisted candidates.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="one">
                <h5 class="oneh5">4</h5>
                <h6 class="oneh6">
                  Hiring either remote or in office with equipped{" "}
                </h6>
                <p class="onep">
                  After hiring the candidate, orientation is given to proceed
                  with their work, elaborating their responsibilities along with
                  company policies.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="one">
                <h5 className="oneh5">5</h5>
                <h6 className="oneh6">Software Soultions</h6>
                <p className="onep">
                  Our professionals at Tenet develop software as per the
                  clients' choice, based on their requirements.We aim to connect
                  you with salable, integrated, cost-effective systems for your
                  success
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="one">
                <h5 className="oneh5">6</h5>
                <h6 className="oneh6">
                  IT Outsourcing and Customer Management{" "}
                </h6>
                <p className="onep3">
                  Our professionally managed IT services are infused with a wide
                  range of features that are cost-effective, and can be readily
                  deployed in any setting for all of its clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>
      {/* SEO Outsourcing */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="seo">SEO Outsourcing</h3>
              <p className=" ">
                Search Engine Optimization is an intensive process and requires
                expertise. If you are looking for a sustainable organic growth,
                our dedicated resources can boost your online presence to help
                you reach your audience and we will tell you the success metrics
                you would be measuring in future via implementing our SEO
                strategy.
              </p>
            </div>
            <div className="col-lg-6">
              <img className="seoimg" src={seo} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="row mt-3"></div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img className="seoimg1" src={ft} alt="" />
            </div>
            <div className="col-lg-6">
              <h3 className="seo1">We are here for you! </h3>
              <p className="">
                If you like to explore what Tenet can do for you then give us a
                call or email us.
              </p>
            </div>
          </div>
        </div>
        <div className="row m-4"></div>
        <div className="row m-4"></div>
      </section>
    </>
  );
}
export default HeroPage;
