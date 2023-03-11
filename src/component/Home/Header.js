import React from "react"; 
import { useState } from "react"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"; 

import logo from "../../logo.png";
function Header() {
  
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <>
    
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <Link className="navbar-brand" to="/">
          <img className="logoheader" src={logo} alt="name" />
        </Link>
        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse fixed`}  id="navbarsExample09">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link className=" qwe  nav-link" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="qwe  nav-link" to="/it-remote">
                IT Remote Team Resourcing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="qwe  nav-link" to="/career">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="qwe  nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="qwe  nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <button className="btnsearch  my-2 my-sm-0" type="contact">
            <Link to='/contact' className="text-decoration-none">  Contact us</Link>
           
          </button>
        </div>
      </nav> */}


      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
          <img className="logoheader" src={logo} alt="name" />
        </Link>
   
        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>
 
  <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse fixed`} id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/it-remote"> IT Remote Team Resourcing</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/career">Careers</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/blogs">Blog</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/about">About</Link>
      </li>
      <button className="btnsearch  my-2 my-sm-0" type="contact">
            <Link to='/contact' className="text-decoration-none">  Contact us</Link>
           
          </button>
    </ul>
  </div>
</nav>
    </>
  );
}

export default Header;
