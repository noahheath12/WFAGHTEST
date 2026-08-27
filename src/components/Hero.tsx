import { useState, useEffect } from 'react'
import './Hero.css'

interface Slide {
  id: number
  image: string
  alt: string
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // Placeholder images - user will replace these later
  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/1920x1080/1a1a1a/d4af37?text=Slide+1',
      alt: 'Slide 1'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1920x1080/1a1a1a/d4af37?text=Slide+2',
      alt: 'Slide 2'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/1920x1080/1a1a1a/d4af37?text=Slide+3',
      alt: 'Slide 3'
    }
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number): void => {
    setCurrentSlide(index)
  }

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero">
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
          </div>
        ))}

        <button className="slide-nav prev" onClick={prevSlide} aria-label="Previous slide">
          &#8249;
        </button>
        <button className="slide-nav next" onClick={nextSlide} aria-label="Next slide">
          &#8250;
        </button>

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Empowering Communities. Inspiring Resilience. Changing Lives.</h1>
      </div>
    </section>
  )
}

export default Hero
