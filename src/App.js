import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/js/bootstrap.bundle';

 
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./component/Home/HomePage";
import ITremote from "./component/Itremote/ITremote";
import Career from "./component/Career/Career";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/ContactPage";
import Aboutus from "./component/About/About";
import BlogDetail from "./component/Blog/Blogdetails";
// import HomePage from "./component/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={<HomePage />} />
        <Route path="/it-remote"   element={<ITremote />} />
        <Route path="/career"   element={<Career />} />
        <Route path="/blogs"  exact  element={<Blog />} />
        <Route path="/about"    element={<Aboutus />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
