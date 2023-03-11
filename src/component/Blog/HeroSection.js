import React, { useEffect, useState } from 'react';
import bg from "../../assets/image/5Blog/images/cover.png";
import post from "../../assets/image/5Blog/images/Asset 1.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
 import axios from "axios";

function HeroSection() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch('https://app.tenetsys.com/api/blogs');
      const data = await response.json();
      console.log(data.data)
      setBlogs(data.data);
    }
    fetchBlogs();
  }, []);
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta
          name="keywaords"
          content="latest news, latest tech news, employement news"
        />

        <meta
          name="description"
          content="We can acknowledge you with the latest trends of this world. You can find latest tech news and employement news on our website."
        />
        <meta
          property="og:title"
          content="We can acknowledge you with the latest trends of this world."
        />
      </Helmet>
      <div className="row mt-4"></div>
      <section
        className="careerbg"
        style={{
          height: "487px",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >




        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="careerwho">
                Personalised Solutions To Streamline Your Business{" "}
              </h1>
              <p className="aboutwhop">
                We design and build outsourcing solutions services tailored to
                your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-4">
          <div className="row">
            <div className=" col-md-12 col-sm-12">
              <h6 className="our">
                OUR<strong className="us"> BLOGS</strong>
              </h6>
              <p className="text-center">
                We design and build outsourcing solutions services
                <br />
                tailored to your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        
          <div className="row" >
          {blogs.map((blog) => (
           <div className="col-md-4" key={blog.id}>
            <Link  to={`/blog/${blog.id}`}>
              <div className="card bg-dark" >
                <img className="card-img-top" src={`https://app.tenetsys.com/public/${blog.image}`} alt="image not load" />
                <p className="text-white m-2" >{blog.blog_title}</p> 
              </div>
              </Link>
            </div>
              ))}
          </div>
        
        </div>
      </section>

      <section>
        <div className="page container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <Link className="page-link" to="/detail">
                      2 <span className="visually-hidden"></span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroSection;
