import React, { useState, useEffect } from 'react';
import post from "../../assets/image/5Blog/images/Asset 1.png";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'; 


const BlogDetail = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    
    async function fetchBlog() {
      const response = await fetch(`https://app.tenetsys.com/api/blog/${id}`);
      const data = await response.json();
      console.log(id)
      setBlog(data.data);
      
    }
    fetchBlog();
  }, []);
  
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
          
              <h1 className="blog2 h1">
              {blog.blog_title}
              </h1>
               
              <img className="blog2img"  src={`https://app.tenetsys.com/public/${blog.image}`} alt={blog.blog_title}/>
              <br />
              <br />
              
              <br />
              <p className="blog2p1"  dangerouslySetInnerHTML={{ __html: blog.long_description }}>
             
              </p> 
              <br />
             
              <br />
             
            </div>
          </div>
        </div>
      </section>

      <section className="blog2sec m-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="blog2h3"> Looking to get in touch with us? </h3>
            </div>
            <div className="col-lg-6">
              <button className="btnsearch1  my-2 my-sm-0" type="contact">
                <Link to="/contact" className="text-decoration-none">
                  {" "}
                  Contact us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
export default BlogDetail;
