import img21 from "../../assets/image/1Homepage/icons/Asset 21.png";
import { Link } from "react-router-dom";
 

function Footer() {
  return (
    <>
<section className="footersec">
  <div className="container">
    <div className="row">
      <div className="footercol1 col-lg-3 col-md-4 col-sm-6">
        <h6 className="footerh6">TENET SYSTEM</h6>
        <p className="footerp">
        Tenet is an excellent choice for anyone who is looking for affordable and reliable source. We learn from our mistakes and our motivation is to become better every day.
       </p>
    </div>
      <div className=" footercol2 col-lg-3 col-md-4 col-sm-6">
        <h4>SERVICES</h4>
        <li>Remote IT Team Out-staffing</li>
        <li>IT Remote Team Resourcing</li>
        <li>Accounting Outsourcing 
        </li>
        <li>Software Solutions</li> 
        <li>SEO Outsourcing</li>
      </div>
      <div className=" footercol2 col-lg-3 col-md-4 col-sm-6">
        <h4>USEFUL LINKS</h4>
        <Link to="/it-remote" className="text-decoration-none"><li>IT Remote Team Resourcing</li></Link>
       <Link to="/career" className="text-decoration-none"><li>Careers</li></Link>
      <Link to="/about" className="text-decoration-none"><li>About</li></Link>
      <Link to="/blog" className="text-decoration-none"><li>Blog</li></Link>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <h4 className="contush4">CONTACT US</h4>
        <p className="contusp"> <i className="fa fa-phone" aria-hidden="true"></i>
        &nbsp; +971 50 283 6750</p>
         
        <p className="contusp"><i className="fa fa-envelope" aria-hidden="true"></i>
         &nbsp; info@tenetsys.com</p>
        <h5 className="contusp">FOLLOW US</h5>
        <div className="linkdiv"> 
        <a href='https://in.linkedin.com/company/tenet-systems-pvt-ltd'>
        <img className="link" src={img21} alt="yes"/>
        </a>
      </div>
    </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <p style={{
          marginBottom: "-29px", marginTop:"38px",fontSize: "14px",textAlign: "center"
        }}>
         Copyright© 2023 Tenet Systems. All Rights Reserved.  
             </p>
      </div>
    </div>
  </div>

</section>
 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </>
  );
}
export default Footer;
