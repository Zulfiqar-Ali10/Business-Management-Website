import { Routes, Route } from "react-router-dom";
import Homedash from "../Dashboard/Homedash";
import Home from "../Components/Home"
import ServicesPage from "../Pages/servicesPage";
import AboutPage from "../Pages/aboutPage";
import TestimonialPage from "../Pages/testimonialPage";
import DashBanner from "../DashPages.jsx/DashBanner";
import DashTestimonial from "../DashPages.jsx/DashTestimonial";


export default function Routers() {
  return (
   <>
   <Routes>
    <Route path="/dashboard" element={<Homedash/> } />
    <Route path="/" element={<Home/> } />
    <Route path="/services" element={<ServicesPage/> } />
    <Route path="/about" element={<AboutPage/> } />
    <Route path="/testimonial" element={<TestimonialPage/> } />
    <Route path="/dashbanner" element={<DashBanner/> } />
    <Route path="/dashtestimonial" element={<DashTestimonial/> } />
   </Routes>
   </>
  )
}
