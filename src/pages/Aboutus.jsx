import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Educational technology expert with 10+ years experience in developing learning platforms.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Chief Technology Officer",
      bio: "Full-stack developer specializing in educational software and interactive learning tools.",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Content Director",
      bio: "Curriculum developer with expertise in creating engaging learning materials across subjects.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "User Experience Designer",
      bio: "Dedicated to creating intuitive interfaces that enhance the learning experience.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  return (
    <div className="content-wrapper">
      {/* Hero Section */}
      <div className="gradient-bg py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About Eduzone</h1>
              <p className="lead mb-4">
                We're on a mission to make quality education accessible to everyone, 
                anytime, anywhere. Our platform combines cutting-edge technology with 
                expert-crafted content to create an engaging learning experience.
              </p>
              <div className="d-flex gap-3">
                <a href="#our-story" className="btn btn-light px-4 rounded-pill">
                  Our Story
                </a>
                <a href="#team" className="btn btn-outline-light px-4 rounded-pill">
                  Meet Our Team
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Students learning together" 
                className="img-fluid rounded shadow-sm"
                style={{ objectFit: "cover", height: "350px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container py-5" id="our-story">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6 className="text-primary fw-bold mb-3">OUR STORY</h6>
            <h2 className="mb-4">From Vision to Reality</h2>
            <p className="lead">
              Founded in 2020, Eduzone began with a simple idea: education should be accessible, 
              engaging, and effective for everyone. What started as a small collection of online 
              courses has grown into a comprehensive platform serving thousands of learners worldwide.
            </p>
          </div>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-lift">
              <div className="card-body p-4">
                <div className="rounded-circle bg-light p-3 mb-3" style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-bullseye fs-3" style={{ color: "var(--primary)" }}></i>
                </div>
                <h4 className="card-title mb-3">Our Mission</h4>
                <p className="card-text">
                  To provide high-quality education that's accessible to everyone, regardless of 
                  location or background. We believe that knowledge should be a right, not a privilege.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-lift">
              <div className="card-body p-4">
                <div className="rounded-circle bg-light p-3 mb-3" style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-eye fs-3" style={{ color: "var(--primary)" }}></i>
                </div>
                <h4 className="card-title mb-3">Our Vision</h4>
                <p className="card-text">
                  To create a world where everyone has the opportunity to learn, grow, and succeed 
                  through education. We envision a future where learning knows no boundaries.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-lift">
              <div className="card-body p-4">
                <div className="rounded-circle bg-light p-3 mb-3" style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-heart fs-3" style={{ color: "var(--primary)" }}></i>
                </div>
                <h4 className="card-title mb-3">Our Values</h4>
                <p className="card-text">
                  Excellence, innovation, inclusivity, and learner-centricity guide everything we do. 
                  We're committed to creating an educational experience that inspires and empowers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="bg-light py-5">
        <div className="container py-4">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h6 className="text-primary fw-bold mb-3">WHAT SETS US APART</h6>
              <h2 className="mb-4">Why Choose Eduzone</h2>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-3">
                <div className="rounded-circle bg-white p-3 mb-3 mx-auto" style={{ width: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-laptop-code fs-2" style={{ color: "var(--primary)" }}></i>
                </div>
                <h5 className="mb-3">Interactive Learning</h5>
                <p className="mb-0">Engaging courses with interactive elements to enhance retention and understanding.</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-3">
                <div className="rounded-circle bg-white p-3 mb-3 mx-auto" style={{ width: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-chalkboard-teacher fs-2" style={{ color: "var(--primary)" }}></i>
                </div>
                <h5 className="mb-3">Expert Instructors</h5>
                <p className="mb-0">Learn from industry professionals with practical experience and teaching expertise.</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-3">
                <div className="rounded-circle bg-white p-3 mb-3 mx-auto" style={{ width: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-chart-line fs-2" style={{ color: "var(--primary)" }}></i>
                </div>
                <h5 className="mb-3">Progress Tracking</h5>
                <p className="mb-0">Monitor your learning journey with detailed analytics and personalized insights.</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-3">
                <div className="rounded-circle bg-white p-3 mb-3 mx-auto" style={{ width: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-certificate fs-2" style={{ color: "var(--primary)" }}></i>
                </div>
                <h5 className="mb-3">Certification</h5>
                <p className="mb-0">Earn recognized certificates to showcase your newly acquired skills and knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container py-5" id="team">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6 className="text-primary fw-bold mb-3">OUR TEAM</h6>
            <h2 className="mb-4">Meet the Minds Behind Eduzone</h2>
            <p className="lead">
              Our dedicated team of educators, technologists, and innovators work tirelessly 
              to create the best learning experience for our users.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {teamMembers.map(member => (
            <div className="col-md-6 col-lg-3" key={member.id}>
              <div className="card border-0 shadow-sm text-center hover-lift h-100">
                <div className="position-relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="card-img-top" 
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 end-0 p-3" 
                       style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))" }}>
                    <h5 className="text-white mb-0">{member.name}</h5>
                    <p className="text-white-50 mb-0">{member.role}</p>
                  </div>
                </div>
                <div className="card-body p-3">
                  <p className="card-text">{member.bio}</p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact/CTA Section */}
      <div className="gradient-bg py-5">
        <div className="container py-4 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="lead text-white-50 mb-4">
                Join thousands of students who are already expanding their knowledge and skills with Eduzone.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="/" className="btn btn-light px-4 py-2 rounded-pill">
                  <i className="fas fa-home me-2"></i>Explore Courses
                </a>
                <a href="/contact" className="btn btn-outline-light px-4 py-2 rounded-pill">
                  <i className="fas fa-envelope me-2"></i>Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
