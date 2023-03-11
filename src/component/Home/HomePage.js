
import Header from "./Header";
import Hero from "./Hero"; 
import About from "./About";
import How from "./How";
import Contact from "./Contact";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import img from "../../assets/image/1Homepage/Images/Asset 15.png";
import { Helmet } from "react-helmet";

// import HeroPage from "./component/Itremote/Heropage";
function HomePage(){
    return(
        <><Helmet>
        <meta charSet="utf-8"/>
        <title>Looking for a Top IT Resourcing agency? Tenet is here and can help you in ways for expanding your business</title>
        <meta name="keywords" content="Top IT Team Resourcing Agency"/>
          <meta name="description" content="Are you looking for IT resources for an upcoming project? Our IT agency is here to completely comprehend your special needs and offer you a variety of IT solutions so you may focus on other projects and assure your success" />
          <meta property="og:title" content="What is Tenet offering? and How Tenet can help you in expanding your business?" />
      </Helmet>
    <Header></Header>
      <Hero></Hero> 
      <About></About>
      <How></How>
      <Contact></Contact>
      
      <div className="bg4container container-fluid jumbotron m-0">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="about">About us</h4>
            <p className="aboutp">
              We take great pride in our clients with the highest level of
              service across multiple industries. We are concerned to understand
              the ins and outs of your business so we can design and offer the
              best possible solution for your needs. Whether it's increasing
              your clientele, expanding your team, staying ahead on the digital
              spectrum or laying the groundwork for your company’s next stage,
              we've got your back the whole way.
            </p>
            <button className="btnsearch4 my-2 my-sm-0" type="contact">
              <Link to="/about" className="text-decoration-none">
                Learn More
              </Link>
            </button>
          </div>

          <div className="col-lg-6">
            <img className="aboutimg" src={img} alt="aboutimg" />
          </div>
        </div>
      </div> 
      <Footer></Footer>

        </>
    );
}
export default HomePage;