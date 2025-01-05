import axios from "axios";
import slide1 from '/src/assets/images/slide-01.jpg';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Banner() {
  const [data, setData] = useState([]);

 
  const fetchBanners = async () => {
    try {
      const response = await axios.get("https://6742d9d9b7464b1c2a62dd44.mockapi.io/bannerApi"
      );
      console.log("response data Here=>", response.data)
      setData(response.data);
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div id="top">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-inner"
              style={{
                backgroundImage: `url(${slide1})`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="header-text">
                      <h2>{slide.heading}</h2>
                      <div className="div-dec" />
                      <p>{slide.paragraphy}</p>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
