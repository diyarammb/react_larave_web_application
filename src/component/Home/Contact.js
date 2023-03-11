import cnt from "../../assets/image/1Homepage/Images/contact-us.gif";

function Contact() {
  return (
    <>
       

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <form>
              <h4 className="text-center text-white mt-4 ">CONTACT US</h4>
              <p className="text-center text-white">
                We design and build outsourcing solutions eeds
              </p>
              <input type="text" className="form-control " placeholder="Name" />
              <input type="text" className="form-control" placeholder="Email" />
              <input
                name="phone"
                className="form-control"
                type="text"
                id="phone"
                placeholder="phone"
              />
              
              <textarea
                className="message"
                name="message"
                placeholder="Message"
                cols="60"
                rows="4"
              ></textarea>
              <button className="submit" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img className="contformimg" src={cnt} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
