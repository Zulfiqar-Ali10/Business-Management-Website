import { useLocation } from "react-router-dom";


export default function Services() {
  const location = useLocation(); 
  const noBgImgRoutes = ["/"];
  return (
   <>
   <section className="services" id="services" style={
     noBgImgRoutes.includes(location.pathname) ? {}
      :
     {marginTop: "180px" }
    }>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="service-item">
          <i className="fas fa-archive" />
          <h4>CSS Templates</h4>
          <p>
            TemplateMo website is the best for you to explore and download free
            website templates website jksjka kjsak.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="service-item">
          <i className="fas fa-cloud" />
          <h4>HTML5 Web Pages</h4>
          <p>
            Templates are based on Bootstrap 5 CSS framework. You can easily
            adapt or modify based on your needs.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="service-item">
          <i className="fas fa-charging-station" />
          <h4>Responsive Designs</h4>
          <p>
            All of our CSS templates are 100% free to use for commercial or
            business websites.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="service-item">
          <i className="fas fa-suitcase" />
          <h4>Mobile and Tablet ready!</h4>
          <p>
            Our HTML CSS templates are well-tested on mobile, tablet, and
            desktop compatibility.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="service-item">
          <i className="fas fa-archway" />
          <h4>Fast Customer Support</h4>
          <p>
            Do not be hesitated to contact us if you have any question or
            concern about our templates.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="service-item">
          <i className="fas fa-puzzle-piece" />
          <h4>Fully Customizable</h4>
          <p>
            If you have any idea or suggestion about new templates, feel free to
            let us know.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}
