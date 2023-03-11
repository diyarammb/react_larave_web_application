
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import React, { useState } from 'react';
import cnt from "../../assets/image/4Contact/Images/Asset 1.png";
import bg from "../../assets/image/4Contact/Images/bg.png";
import axios from "axios";
function ContactPage() {

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    axios.post('https://app.tenetsys.com/api/contact/store', formData)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header></Header>
      <div className="row mt-4"></div>
      <div className="row mt-4"></div> <div className="row mt-4"></div> 
    

      <section>
        <div className="container">
          <div className="row" >
            <div className="col-lg-12">
             
              <h6 className="get">
                GET IN{" "}
                <strong className="us">
                  TOUCH
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
                info@tenetsys.com
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
                <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control1 "
                  placeholder="Name"
                  name="last_name"
                
                />
                <input
                  type="text"
                  className="form-control1"
                  placeholder="Email"
                  name="email"
                   
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
                <button className="submit-contact" type="submit"  >
                  Send
                </button>
                </form>
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
  );
}

export default ContactPage;
