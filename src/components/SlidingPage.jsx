import React, { useEffect } from "react";

const SlidingPage = () => {
  let slideIndex = 0;
  let timeoutId = null;

  useEffect(() => {
    showSlides();
  }, []);

  const showSlides = () => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(showSlides, 3000); // Change image every 3 seconds
  };

  const currentSlide = (index) => {
    slideIndex = index;
    showSlides();
  };

  const plusSlides = (step) => {
    if (step < 0) {
      slideIndex -= 2;
      if (slideIndex < 0) {
        slideIndex = document.getElementsByClassName("mySlides").length - 1;
      }
    }
    showSlides();
  };

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 7</div>
          <img
            src="/assests/homePage/campus.jpg"
            style={{ width: "100%", height: "500px" }}
            alt="Diet-Campus"
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 7</div>
          <img
            src="/assests/homePage/certificate.jpg"
            style={{ width: "100%" , height: "500px"}}
            alt="certificate"
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 7</div>
          <img
            src="/assests/homePage/guest.jpg"
            style={{ width: "100%" , height:"500px"}}
            alt="guests"
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">4/ 7</div>
          <img
            src="/assests/homePage/carrer-img.png"
            style={{ width: "100%", height:"500px" }}
            alt="carrer-image"
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">5 / 7</div>
          <img
            src="/assests/homePage/graduation-img.jpg"
            style={{ width: "100%", height:"500px" }}
            alt="gradution-image"
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">6 / 7</div>
          <img
            src="/assests/homePage/nirtf-certificate.jpg"
            style={{ width: "100%" , height:"500px"}}
            alt="nirtf-certificate"
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">7 / 7</div>
          <img
            src="/assests/homePage/ranking-img.jpg"
            style={{ width: "100%" , height:"500px"}}
            alt="ranking-image"
          />
          <div className="text"></div>
        </div>

        
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
    </div>
      {/* <br/> */}
      <div className="image-dots" style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(0)}></span>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
        <span className="dot" onClick={() => currentSlide(6)}></span>
      </div>
    </>
  );
};

export default SlidingPage;
