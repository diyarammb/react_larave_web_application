
import Header from '../Home/Header'
import aboutbg from "../../assets/image/6about/Images/team.gif";

import cnt from "../../assets/image/4Contact/Images/Asset 1.png";
import bg from "../../assets/image/4Contact/Images/bg.png";
import Footer from '../Home/Footer';
import { Helmet } from 'react-helmet';

function Aboutus(){
    return(
        <>
        <Header></Header>
        <Helmet>
        <title>About</title>
        <meta name="keywaords" content="Recruiting agnecy, Top staffing agency" />

            <meta name="description" content="Tenet is one of the top recruiting agency. We recruit the best suitable resources for our different clients. We have a number of satisfied clients with reliable results." />
            <meta property="og:title" content="Tenet is one of the top recruiting agency. We recruit the best suitable resources for our different clients" />
        </Helmet>
          <section
        className="aboutbg"
        style={{
          height: "684px",
          backgroundImage:
            "linear-gradient(158deg, rgb(75 74 76 / 69%), rgb(90 90 90 / 43%))," +
            `url(${aboutbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="aboutwho">WHO WE ARE?</h1>
              <p className="aboutwhop">We are your wealth wisher!</p>
              <p className="aboutwhop">
                Our dedication can lead any business to success, beyond your
                imagination.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="container">
   <h4 className="itsupport">
                Your outsourcing partner for your IT Support, <br />
                Accounting and Back-Office needs.
              </h4>
              <br />
              <p>
                Tenet Systems’ vision is: “Innovate where no one is looking”.
                <br />
                <br />
                Our aim is to nurture long-term partnerships with our clients to
                ensure mutual success and growth.
                <br />
                <br /> Tenet System was established with the goal of becoming
                the ‘number one’ partner of choice for back-end and IT
                outsourcing needs. Our success is rooted in the success of our
                clients and their customers.
                <br />
                <br />
                We strive to adapt and continuously develop our expertise for
                the benefit of our clients. Customer services projects
                ultimately benefit your customers and their overall experience
                with your offerings. We provide innovative ways to serve our
                client’s customers and execute service projects with a focus on
                accuracy and agility to provide you with a distinct customer
                service advantage.
              </p>
              <br />
              <br />
              <h5 className="why">
                WHY{" "}
                <strong className="us">
                  {" "}
                   US?
                </strong>
              </h5>
              <br />
              <p>
                Tenet Systems tailors outsourcing services and solutions to your
                business needs, offering your more flexibility and
                cost-efficiency in the long run. We design systems and solutions
                with experienced teams to meet the standards set by you.
              </p>
              <li>
                Easily deployable and scalable service offerings customized for
                you.
              </li>
              <br />
              <br />
              <li>
                Focused on delivering agreed-upon service levels e ffectively
                and efficiently.
              </li>
              <br />
              <br />
              <p>
                Enabling the culture of problem-solving for the betterment of
                communities and industries, we strive to ease the process of
                doing business regardless of location, size or product type
              </p>
              <br />
              <br />
              <h5 className="why">
                WHAT IS
                <strong className="us">
                 &nbsp;BPO?
                </strong>
              </h5>
              <br />
              <p>
                Business process outsourcing, or BPO, is the practice of
                outsourcing the non-core business operations to a third party
                provider in order to cut costs, enhance customer satisfaction,
                and devote more time and resources to the company's core
                operations.
                <br />
                <br />
                Tenet offers you BPO as well and we claim to boost the
                shareholder’s value in a longer run and give businesses a way to
                accomplish transformational goals and access specialized
                competencies that are much more difficult and expensive if
                bought in-house by our clients.
              </p>
              <br />
              <br />
              <br />
              <br />
</div>
</section>
<section>
        <div className="container">
          <div className="row" >
            <div className="col-lg-12">
             
              <h6 className="get">
                GET IN{" "}
                <strong className="us">
                &nbsp;TOUCH
                </strong>
              </h6>
              <br />
              <p className="for">
                Your initial step toward success!
                <br />
                Within a short period of time, one of our staff members will get
                in touch with you (Except Holidays)
                <br />
                We first get in touch with you via email, and then we interact
                using the methods you want.
                <br />
                Your provided information is never shared with anyone else. NOC
                can always be requested.
                <br />
                <br />
                contact us.
                <strong className="email">
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@tenetsys.com
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "684px",
      }}
      >
        <div className="container">
          <div className="row" 
          >
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="formshadow">
              <h5 className=" text-contact mt-4">Contact Information</h5>
                <p className="  text-center  contactpageb">
                Please drop us a line and share your at:
                  contact us. careers@tenetsys.com
                </p>
                <input
                  type="text"
                  className="form-control1 "
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control1"
                  placeholder="Email"
                />
                <input
                  name="phone"
                  className="form-control1"
                  type="text"
                  id="phone"
                  placeholder="phone"
                />

                <textarea
                  className="message1"
                  name="message"
                  placeholder="Message"
                  cols="60"
                  rows="4"
                ></textarea>
                <button className="submit-contact" type="submit">
                  Send
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img className="contactImageB" src={cnt} alt="" />
            </div>
          </div>
        </div>
      </section>


      <Footer></Footer>
        </>
    )

}
export default Aboutus;