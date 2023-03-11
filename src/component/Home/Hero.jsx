import image from "../../assets/image/1Homepage/Images/cast_gif-1.gif";
import img1 from "../../assets/image/1Homepage/Images/asset 1.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>Home</title> */}
        <meta name="keywords" content="Top IT Team Resourcing Agency" />
        <meta
          name="description"
          content="Are you looking for IT resources for an upcoming project? Our IT agency is here to completely comprehend your special needs and offer you a variety of IT solutions so you may focus on other projects and assure your success."
        />
        <meta
          property="og:title"
          content="Looking for a Top IT Resourcing agency? Tenet is here and can help you in ways for expanding your business"
        />
      </Helmet>
      <section className="bg2 container jumbotron mt-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12  col-lx-12">
            <h1 className="textblack ">
              <b>
                <strong className="heed">
                  IT Recruitment and
                  <br /> Outsourced Manpower
                </strong>{" "}
                <br />
                <strong className="colorblue">
                  Your local partner to scale your IT team with confidence
                </strong>
              </b>
            </h1>
          </div>
          {/* image hero section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-lx-12 ">
            <img src={image} alt="homepagimage " className="homepagimage " />
          </div>
          <div></div>
          <div className="row">
            <section className="col-lg-12 col-md-12 col-sm-12">
              {/* <p className=" TXT1 colorblue ">
              Tenet is a business hub that creates and offers
              solution to give our clients a big edge.
            </p> */}
              <span>
                <button className="btnfind  my-2 my-sm-0 " type="find">
                  <Link to="/it-remote" className="text-decoration-none">
                    {" "}
                    Find Out More
                  </Link>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btnfind3  my-2 my-sm-0 m-1" type="contact">
                  <Link to="/contact" className="text-decoration-none">
                    {" "}
                    Contact us
                  </Link>
                </button>
              </span>
              <br />
              <br />
            </section>
          </div>
        </div>
      </section>
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
              <i className="fa fa-plus i"></i>
              <span>
                Dedicated IT Recruitment Services to match perfect candidate
                with provided job description{" "}
              </span><br/>
              <i className="fa fa-plus i"></i>{" "}
              <span>Office and equipment procurement for larger teams </span><br/>
              <i className="fa fa-plus i"></i>{" "}
              <span>Remote Software team creation </span><br/>
              <i className="fa fa-plus i"></i>{" "}
              <span>
                Payroll Management to process attendance and calculate salaries
              </span><br/>
            </p>

            <span>
              {/* <ul className="ullist">
              <li>
                Dedicated IT Recruitment Services to match perfect candidate
                with provided job description{" "}
              </li>
              <li>Office and equipment procurement for larger teams </li>
              <li>Remote Software team creation </li>
              <li>
                Payroll Management to process attendance and calculate salaries
              </li>
            </ul> */}
              <button className="btnfind2 my-2 my-sm-0" type="find">
                <Link to="it-remote" className="text-decoration-none">
                  {" "}
                  Explore
                </Link>
              </button>
            </span>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-6"></div>
        </div>
      </div>

      {/* <div className=" bg2 contanier jumbotron">
        <div className="row">
          <div className=" what col-md-3 col-lg-3 col-sm-3">
            <img className="bulb" src={icon1} />
            <h2 className="ser">Services</h2>
            <p className="serp">
              Being in the service business,
              <br /> our client’s problem is our
              <br /> responsibility and we strive to make things possible.
            </p>
          </div>
          <div className=" what col-md-3 col-lg-3 col-sm-3">
            <img className="bulb" src={icon2} />
            <h2 className="ser">Qualified Tech</h2>
            <p className="serp">
              Our team is trained to handle every type of tech and are always
              here to assist you
            </p>
          </div>
          <div className=" what col-md-3 col-lg-3 col-sm-3">
            <img className="bulb" src={icon3} />
            <h2 className="ser">Happy Clients</h2>
            <p className="serp">
              We are admired by many
              <br />
              of our clients as our priori-
              <br />
              ty is to secure our client’s
              <br />
              data while providing the
              <br />
              resource to meet their
              <br />
              needs.
            </p>
          </div>

          <div className=" what col-md-3 col-lg-3 col-sm-3">
            <img className="bulb" src={icon4} />
            <h2 className="ser">24/7 Support</h2>
            <p className="serp">
              With competing world of
              <br />
              IT, we recruit qualified tech
              <br />
              experts who can fulfil all
              <br />
              the requirements of our
              <br />
              clients.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Hero;
