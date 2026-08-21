import { useEffect, useState } from "react";
import "./HeroCarousel.css";
import heroSlides from "./heroData";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(slide);
  }, []);

  const nextSlide = () =>
    setCurrent((current + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrent((current - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="hero">
      {heroSlides.map((item, index) => (
        <div
          key={item.id}
          className={
            index === current ? "slide active" : "slide"
          }
        >
          <img src={item.image} alt={item.title} />

          <div className="overlay"></div>

          <div className="content">
            <span className="tag">VAnia</span>

            <h1>{item.title}</h1>

            <p>{item.description}</p>

            <button>{item.button}</button>
          </div>
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {heroSlides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};
export default HeroCarousel;

