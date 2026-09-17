import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroCarousel.css";
import heroSlides from "./heroData";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 10000);

    return () => clearInterval(slide);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrent(
      (current - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const handleHeroAction = (link) => {
    // If the link is a section on the same page
    if (link.startsWith("#")) {
      const section = document.getElementById(link.substring(1));

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // For normal pages, React Router Link handles navigation
  };

  return (
    <section className="hero">

      {heroSlides.map((item, index) => (
        <div
          key={item.id}
          className={
            index === current ? "slide active" : "slide"
          }
        >

          <img
            src={item.image}
            alt={item.title}
          />

          <div className="overlay"></div>

          <div className="content">

            <span className="tag">Vania</span>

            <h1>{item.title}</h1>

            <p>{item.description}</p>

            {item.link.startsWith("#") ? (
              <button
                type="button"
                onClick={() => handleHeroAction(item.link)}
              >
                {item.button}
              </button>
            ) : (
              <Link
                to={item.link}
                className="hero-button"
              >
                {item.button}
              </Link>
            )}

          </div>
        </div>
      ))}

      {/* Previous slide */}
      <button
        className="arrow left"
        onClick={prevSlide}
        aria-label="Previous slide"
        type="button"
      >
        &#10094;
      </button>

      {/* Next slide */}
      <button
        className="arrow right"
        onClick={nextSlide}
        aria-label="Next slide"
        type="button"
      >
        &#10095;
      </button>

      {/* Slide indicators */}
      <div className="dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={
              index === current ? "dot active" : "dot"
            }
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

    </section>
  );
};

export default HeroCarousel;