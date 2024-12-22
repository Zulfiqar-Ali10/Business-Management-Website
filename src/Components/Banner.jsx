
import { useEffect } from 'react';
import Swiper from 'swiper';
// import  { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Banner() {
  useEffect(() => {
    // Initialize Swiper
    new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="swiper-container" id="top">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div
            className="slide-inner"
            style={{ backgroundImage: 'url(src/assets/images/slide-01.jpg)' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="header-text">
                    <h2>
                      Get <em>ready</em> for your business
                      <br />
                      &amp; upgrade <em>all aspects</em>
                    </h2>
                    <div className="div-dec" />
                    <p>
                      Mexant HTML5 Template is provided for free of charge. This
                      layout is based on Boostrap 5 CSS framework. Anyone can
                      download and edit for any professional website. Thank you
                      for visiting TemplateMo website.
                    </p>
                    <div className="buttons">
                      <div className="green-button">
                        <a href="#">Discover More</a>
                      </div>
                      <div className="orange-button">
                        <a href="#">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div
            className="slide-inner"
            style={{ backgroundImage: 'url(src/assets/images/slide-02.jpg)' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="header-text">
                    <h2>
                      <em>Digital</em> Currency for you <br />
                      &amp; Best <em>Crypto</em> Tips
                    </h2>
                    <div className="div-dec" />
                    <p>
                      You will see a bunch of free CSS templates when you search on
                      Google. TemplateMo website is probably the best one because it
                      is 100% free. It does not ask you anything in return. You have
                      a total freedom to use any template for any purpose.
                    </p>
                    <div className="buttons">
                      <div className="green-button">
                        <a href="#">Discover More</a>
                      </div>
                      <div className="orange-button">
                        <a href="#">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div
            className="slide-inner"
            style={{ backgroundImage: 'url(src/assets/images/slide-03.jpg)' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="header-text">
                    <h2>
                      Best One in Town
                      <br />
                      &amp; Crypto <em>Services</em>
                    </h2>
                    <div className="div-dec" />
                    <p>
                      When you browse through different tags on TemplateMo website,
                      you can see a variety of CSS templates which are responsive
                      website designs for different individual needs. Please tell
                      your friends about our website. Thank you.
                    </p>
                    <div className="buttons">
                      <div className="green-button">
                        <a href="#">Discover More</a>
                      </div>
                      <div className="orange-button">
                        <a href="#">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-button-next swiper-button-white"></div>
      <div className="swiper-button-prev swiper-button-white"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

