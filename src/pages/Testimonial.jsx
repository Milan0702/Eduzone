import React, { useState, useEffect } from 'react';
import './testimonial.css';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Software Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "The Python course on Eduzone helped me land my first developer job.",
      color: "primary"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      content: "As a career changer, Eduzone's Full Stack Development course provided exactly what I needed.",
      color: "success"
    },
    {
      id: 3,
      name: "David Patel",
      role: "Technical Writer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      content: "The Technical Communication course improved my documentation skills tremendously.",
      color: "warning"
    },
    {
      id: 4,
      name: "Amelia Rodriguez",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      content: "What sets Eduzone apart is their attention to the practical aspects of learning.",
      color: "info"
    },
    {
      id: 5,
      name: "James Wilson",
      role: "CS Student",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      content: "I've tried many platforms, but Eduzone provides the most comprehensive learning experience.",
      color: "danger"
    }
  ];
  
  // Handle auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        changeSlide('next');
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);
  
  // Get the previous, active, and next indices
  const getPrevIndex = () => (activeIndex - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (activeIndex + 1) % testimonials.length;
  
  // Handle slide change with animation
  const changeSlide = (newDirection) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(newDirection);
    
    setTimeout(() => {
      if (newDirection === 'next') {
        setActiveIndex(getNextIndex());
      } else {
        setActiveIndex(getPrevIndex());
      }
      
      // Reset animation state after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }, 200);
  };
  
  // Handle dot click
  const handleDotClick = (index) => {
    if (isAnimating || index === activeIndex) return;
    
    const newDirection = index > activeIndex 
      ? (index - activeIndex <= testimonials.length / 2 ? 'next' : 'prev') 
      : (activeIndex - index <= testimonials.length / 2 ? 'prev' : 'next');
      
    setIsAnimating(true);
    setDirection(newDirection);
    
    setTimeout(() => {
      setActiveIndex(index);
      
      // Reset animation state after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }, 200);
  };
  
  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="fw-bold display-5">Student Voices</h2>
        </div>
        
        <div className="testimonial-wrap">
          {/* Navigation Buttons */}
          <div className="testimonial-navigation d-flex justify-content-between align-items-center mb-4">
            <button 
              className="btn-nav btn-prev" 
              onClick={() => setActiveIndex(getPrevIndex())}
              aria-label="Previous testimonial"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Testimonial ${index + 1}`}
                ></span>
              ))}
            </div>
            
            <button 
              className="btn-nav btn-next" 
              onClick={() => setActiveIndex(getNextIndex())}
              aria-label="Next testimonial"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          
          {/* Testimonial Cards */}
          <div className="testimonial-cards">
            {/* Previous Card */}
            <div className="testimonial-card prev" style={{ borderTopColor: `var(--bs-${testimonials[getPrevIndex()].color})` }}>
              <div className="testimonial-card-inner">
                <div className="quote-icon" style={{ backgroundColor: `var(--bs-${testimonials[getPrevIndex()].color})` }}>
                  <i className="fas fa-quote-right"></i>
                </div>
                <p className="testimonial-content">"{testimonials[getPrevIndex()].content}"</p>
                <div className="testimonial-user">
                  <img 
                    src={testimonials[getPrevIndex()].image} 
                    alt={testimonials[getPrevIndex()].name} 
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">{testimonials[getPrevIndex()].name}</h5>
                    <p className="testimonial-role">{testimonials[getPrevIndex()].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Active Card */}
            <div className="testimonial-card active" style={{ borderTopColor: `var(--bs-${testimonials[activeIndex].color})` }}>
              <div className="testimonial-card-inner">
                <div className="quote-icon" style={{ backgroundColor: `var(--bs-${testimonials[activeIndex].color})` }}>
                  <i className="fas fa-quote-right"></i>
                </div>
                <p className="testimonial-content">"{testimonials[activeIndex].content}"</p>
                <div className="testimonial-user">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">{testimonials[activeIndex].name}</h5>
                    <p className="testimonial-role">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Next Card */}
            <div className="testimonial-card next" style={{ borderTopColor: `var(--bs-${testimonials[getNextIndex()].color})` }}>
              <div className="testimonial-card-inner">
                <div className="quote-icon" style={{ backgroundColor: `var(--bs-${testimonials[getNextIndex()].color})` }}>
                  <i className="fas fa-quote-right"></i>
                </div>
                <p className="testimonial-content">"{testimonials[getNextIndex()].content}"</p>
                <div className="testimonial-user">
                  <img 
                    src={testimonials[getNextIndex()].image} 
                    alt={testimonials[getNextIndex()].name} 
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">{testimonials[getNextIndex()].name}</h5>
                    <p className="testimonial-role">{testimonials[getNextIndex()].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;