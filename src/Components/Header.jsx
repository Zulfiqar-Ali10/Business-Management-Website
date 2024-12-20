

export default function Header() {
  return (
   <>

<header className="header-area header-sticky">
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
              <a href="#top" className="active">
                Home
              </a>
            </li>
            <li className="scroll-to-section">
              <a href="#services">Services</a>
            </li>
            <li className="scroll-to-section">
              <a href="#about">About</a>
            </li>
            <li className="has-sub">
              <a href="javascript:void(0)">Pages</a>
              <ul className="sub-menu">
                <li>
                  <a href="about-us.html">About Us</a>
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
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="contact-us.html">Contact Support</a>
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
  )
}
