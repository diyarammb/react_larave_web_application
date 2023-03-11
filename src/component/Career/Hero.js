import careerbg from "../../assets/image/3careers/images/cover.png";
import career1 from "../../assets/image/3careers/Logo and icon/Asset 4.png";
import career2 from "../../assets/image/3careers/Logo and icon/Asset 3.png";
import career3 from "../../assets/image/3careers/Logo and icon/Asset 2.png";
import career4 from "../../assets/image/3careers/Logo and icon/Asset 5.png";
import cnt from "../../assets/image/3careers/images/image_processing20191030-27317-1d6n4nq.gif";
import { Helmet } from "react-helmet";
import axios from "axios";
function Hero() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    axios.post('https://app.tenetsys.com/api/career/store', formData)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <Helmet>


    <title>Careers</title>
    <meta name="keywords" content="Apply jobs online"/>

            <meta name="description" content="We welcome our young generation to apply for best suitable jobs! Our job portal is always open to both hard and smart workers." />
            <meta property="og:title" content="We welcome our young generation to apply for best suitable jobs! Our job portal is always open to both hard and smart workers." />

    </Helmet>
      <section
        className="careerbg"
        style={{
          height: "487px",
          backgroundImage: `url(${careerbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="careerwho">WE BELIEVE THAT </h1>
              <p className="aboutwhop">
                Only "happy Employee keep happy client”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="careerh2">CAREERS</h2>
              <p className="careerp1">At Tenet Systems</p>
              <p className="careerp2">
                Our customers are at the heart of everything we do. We actively
                recruit talent who share our commitment to service, innovation
                and growth.
              </p>
              <p className="careerp3">
                Culture is important at Tenet Systems, we focus on fostering
                growth, learning opportunities and challenges that give you
                control of your career paths, plan your personal development
                objectives and help with discovering opportunities available to
                you Please drop us a line and share your at:
                <b  className='bts'style={{ color: "#404b69" }}> careers@tenetsys.com</b>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div>
                <img className="careerimg" src={career1} alt="career1" />
                <h6 className="careerh6">Conductive Enviroment </h6>
                <p className="careerpar">
                  Providing the right conditions for <br />
                  something good to happen or exist.
                </p>
              </div>
              <div>
                <img className="careerimg" src={career2} alt="career2" />
                <h6 className="careerh6">Culture of Learning </h6>
                <p className="careerpar">Make learning a habit.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img className="careerimg" src={career3} alt="career3" />
                <h6 className="careerh6">Shared Success </h6>
                <p className="careerpar">
                  You'll create more trust by letting them <br />
                  be a part of the glory.
                </p>
              </div>
              <div>
                <img className="careerimg" src={career4} alt="career4" />
                <h6 className="careerh6">Get your Goals </h6>
                <p className="careerpar">
                  One of your life goals is to gain valuable <br />
                  industry knowledge and experience.
                </p>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="careerh2">APPLICATION FORM</h2>
              <p className="careerp">
                From the job site and operations to accounting and estimation,
                Hagerman has a variety of <br />
                career opportunities for people of all types of expertise and
                all levels of experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* contact form */}

      <div class="container">
        <div class="row">
          <div class=" form col-md-6 col-lg-6 col-sm-6 ">
            <form onSubmit={handleSubmit}>
            <div class="naemnu">
              <label class="full">Full Name</label>
              <br />
              <input type="name"  className="form-control" name="full_name" placeholder="Full Name" />
              <br />
              <label class="full">Country</label>
              <br />
              <input type="text" className="form-control" name="country" placeholder="Country" />
              <br />
              <label class="full">City</label>
              <br />
              <input type="text" className="form-control" name="city" placeholder="City" />
              <br />
              <label> Select Option</label>
              <br />
              <select  className="select form-control" name="position">
                <option value="Select Position">Select Position</option>
                <option value="React Developer">React Developer</option>
                <option value="JavaScript Developer">
                  JavaScript Developer
                </option>
                <option value="WordPress Developer">WordPress Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
                <option value="Node.js Developer">Node.js Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Zend Developer">Zend Developer</option>
                <option value="Asp .net Developer">Asp .net Developer</option>
                <option value="C# Developer">C# Developer</option>
                <option value="Python Developer">Python Developer</option>
                <option value="ROR Developer">ROR Developer</option>
                <option value="Database Engineer">Database Engineer</option>
                <option value="Networking Engineer">Networking Engineer</option>
                <option value="Networking Administrator">
                  Networking Administrator
                </option>
                <option value="Cisco Engineer">Cisco Engineer</option>
              </select>
              <br />
              <label> Select Option</label>
              <br />
              <select  className=" select form-control" name="experience">
                <option value="Select Experience">Select Experience</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15+">15+</option>
              </select>
              <br />
              <label>Attach Resume </label>
              <br />
              <input type="file" id="myFile" className="form-control" name="image" />
              
              <button class="submit2" type="submit"  >
                Send
              </button>
              
            </div></form>
          </div>
          <div class="col-lg-6">
            <img class="contaformimg" src={cnt} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
