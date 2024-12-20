import About from "./About";
import Banner from "./Banner";
import CompanyName from "./CompanyName";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Resources from "./Resources";
import Services from "./Services";
import Testimonial from "./Testimonial";


export default function Home() {
  return (
    <>
    <Header/>
     <Banner/>
     <Services/>
     <Resources/>
     <About/>
     <Contact/>
     <Testimonial/>
     <CompanyName/>
     <Footer/>
    </>
  )
}
