import { Link, useLocation } from "react-router-dom";
const Img = "src/assets/images/slide-01.jpg";

export default function Header() {
  const location = useLocation(); 
  const noBgImgRoutes = ["/"];
 
  return (
    <>
      <header
    className="header-area header-sticky"
    style={
     noBgImgRoutes.includes(location.pathname) ? {}
      :
     { backgroundImage: `url(${Img})`, backgroundSize: "auto",}
    }
  >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img src="src/assets/images/logo.png" alt="" />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="has-sub">
                    <a href="javascript:void(0)">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#about">About Us</a>
                      </li>
                      <li>
                        <a href="our-services.html">Our Services</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <Link to="/testimonial">Testimonials</Link>
                  </li>
                  <li>
                    <a href="#">Contact Support</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
