import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Img4 = "/src/assets/images/testimonials-01.jpg"

export default function Testimonial() {
   const [data, setData] = useState([]);

  const location = useLocation(); 
  const noBgImgRoutes = ["/"];

  
  // const testimonials = [
  //   {
  //     id: 1,
  //     quote: "Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.",
  //     name: "David Eigenberg",
  //     designation: "CEO of Mexant",
  //     image: Img4,
  //   },
  //   {
  //     id: 2,
  //     quote: "Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
  //     name: "Andrew Garfield",
  //     designation: "CTO of Mexant",
  //     image: Img4,
  //   },
  //   {
  //     id: 3,
  //     quote: "Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo. Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo.",
  //     name: "George Lopez",
  //     designation: "Crypto Manager",
  //     image: Img4,
  //   },
  // ];

  const fetchTestimonial = async () => {
    try {
      const response = await axios.get(
        "https://6773d23c77a26d4701c67010.mockapi.io/testimonial"
      );
      console.log(response.data , "response");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching Testimonial:", error);
    }
  };

  
    useEffect(() => {
      fetchTestimonial();
    }, []);

  return (
    <section
      className="testimonials"
      id="testimonials"
      style={
        noBgImgRoutes.includes(location.pathname)
          ? {}
          : { marginTop: "180px" }
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h6>Testimonials</h6>
              <h4>What They Say</h4>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              items={1}
              autoplay={true}
              autoplayTimeout={3000}
            >
              {data.map((item, index) => (
                <div className="item" key={index}>
                  <i className="fa fa-quote-left" />
                  <p>{item.quote}</p>
                  <h4>{item.name}</h4>
                  <span>{item.designation}</span>
                  <div className="right-image">
                        <img src={Img4} alt="photo" />    
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
