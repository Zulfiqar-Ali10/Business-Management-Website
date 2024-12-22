
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { useLocation } from "react-router-dom";

// export default function Testimonial() {
//   const location = useLocation(); 
//   const noBgImgRoutes = ["/"];
//   return (
//     <section className="testimonials" id="testimonials" style={
//       noBgImgRoutes.includes(location.pathname) ? {}
//        :
//       {marginTop: "180px" }
//      }>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 offset-lg-3">
//             <div className="section-heading">
//               <h6>Testimonials</h6>
//               <h4>What They Say</h4>
//             </div>
//           </div>
//           <div className="col-lg-10 offset-lg-1">
//             <OwlCarousel
//               className="owl-theme"
//               loop
//               margin={10}
//               nav
//               items={1}
//               autoplay={true}
//               autoplayTimeout={3000}
//             >
//               <div className="item">
//                 <i className="fa fa-quote-left" />
//                 <p>
//                   “Donec et nunc massa. Nullam non felis dignissim, dapibus
//                   turpis semper, vulputate lorem. Nam volutpat posuere tellus,
//                   in porttitor justo interdum nec. Aenean in dapibus risus, in
//                   euismod ligula. Aliquam vel scelerisque elit.”
//                 </p>
//                 <h4>David Eigenberg</h4>
//                 <span>CEO of Mexant</span>
//                 <div className="right-image">
//                   <img src="/src/assets/images/testimonials-01.jpg" alt="" />
//                 </div>
//               </div>
//               <div className="item">
//                 <i className="fa fa-quote-left" />
//                 <p>
//                   “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum
//                   lectus cursus nec. In blandit nibh dolor, at rutrum leo
//                   accumsan porta. Nullam pulvinar eros porttitor risus
//                   condimentum tempus.”
//                 </p>
//                 <h4>Andrew Garfield</h4>
//                 <span>CTO of Mexant</span>
//                 <div className="right-image">
//                   <img src="/src/assets/images/testimonials-01.jpg" alt="" />
//                 </div>
//               </div>
//               <div className="item">
//                 <i className="fa fa-quote-left" />
//                 <p>
//                   “Ut dictum vehicula massa, ac pharetra leo tincidunt eu.
//                   Phasellus in tristique magna, ac gravida leo. Integer sed
//                   lorem sapien. Ut viverra mauris sed lobortis commodo.”
//                 </p>
//                 <h4>George Lopez</h4>
//                 <span>Crypto Manager</span>
//                 <div className="right-image">
//                   <img src="/src/assets/images/testimonials-01.jpg" alt="" />
//                 </div>
//               </div>
//             </OwlCarousel>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useLocation } from "react-router-dom";

export default function Testimonial() {
  const location = useLocation(); 
  const noBgImgRoutes = ["/"];

  
  const testimonials = [
    {
      id: 1,
      quote: "Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.",
      name: "David Eigenberg",
      designation: "CEO of Mexant",
      image: "/src/assets/images/testimonials-01.jpg",
    },
    {
      id: 2,
      quote: "Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
      name: "Andrew Garfield",
      designation: "CTO of Mexant",
      image: "/src/assets/images/testimonials-01.jpg",
    },
    {
      id: 3,
      quote: "Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo. Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo.",
      name: "George Lopez",
      designation: "Crypto Manager",
      image: "/src/assets/images/testimonials-01.jpg",
    },
  ];

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
              {testimonials.map((testimonial) => (
                <div className="item" key={testimonial.id}>
                  <i className="fa fa-quote-left" />
                  <p>{testimonial.quote}</p>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.designation}</span>
                  <div className="right-image">
                    <img src={testimonial.image} alt={testimonial.name} />
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
