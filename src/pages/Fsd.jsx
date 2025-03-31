import React from 'react'
import CourseProgress from '../components/CourseProgress'
import { NavLink } from 'react-router-dom'

function Fsd() {
  return (
    <div>
      <div>
        <br />
        <h1 align="center" style={{ color: 'var(--dark)', fontWeight: 'bold', fontFamily: '"Times New Roman", Times, serif' }}>FULL STACK DEVELOPMENT</h1>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="btn btn-light fs-5" style={{ backgroundColor: 'var(--bg-light)', color: 'var(--dark)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>Full Stack Development encompasses both frontend and backend technologies, enabling developers to build complete web applications. Full stack developers work with user interfaces, server logic, databases, and deployment systems. This field combines various programming languages, frameworks, and tools to create seamless and responsive applications that provide excellent user experiences while maintaining robust backend functionality. A full stack developer typically needs proficiency in HTML, CSS, JavaScript for frontend development, as well as backend technologies like Node.js, Python, Ruby, or Java, along with database management skills.</p>
              
              <div className="mt-4 d-flex justify-content-between">
                <NavLink to="/javascript-quiz" className="btn rounded-pill px-4 py-2" style={{ backgroundColor: 'var(--fsd-color)', color: 'white' }}>
                  <i className="fas fa-question-circle me-2"></i>Take JavaScript Quiz
                </NavLink>
                <a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank" className="btn btn-outline-secondary rounded-pill px-4">
                  <i className="fas fa-external-link-alt me-2"></i>MDN Web Docs
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <CourseProgress courseId="fsd" totalModules={4} />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="card mb-4 hover-lift">
            <div className="card-header" style={{ backgroundColor: 'var(--fsd-color)', color: 'white' }}>
              <h3 className="mb-0">Course Modules</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5 className="mb-0">Module 1</h5>
                    </div>
                    <div className="card-body">
                      <h6>Frontend Fundamentals</h6>
                      <ul>
                        <li>HTML5 Structure & Semantics</li>
                        <li>CSS3 & Responsive Design</li>
                        <li>JavaScript Basics</li>
                      </ul>
                      <a href="https://www.freecodecamp.org/learn/responsive-web-design/" className="btn btn-success mt-auto" target="_blank">
                        <i className="fas fa-external-link-alt me-2"></i>freeCodeCamp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5 className="mb-0">Module 2</h5>
                    </div>
                    <div className="card-body">
                      <h6>Frontend Frameworks</h6>
                      <ul>
                        <li>React.js Fundamentals</li>
                        <li>State Management</li>
                        <li>Component Architecture</li>
                      </ul>
                      <a href="https://react.dev/learn" className="btn btn-success mt-auto" target="_blank">
                        <i className="fas fa-external-link-alt me-2"></i>React Docs
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5 className="mb-0">Module 3</h5>
                    </div>
                    <div className="card-body">
                      <h6>Backend Development</h6>
                      <ul>
                        <li>Node.js & Express</li>
                        <li>RESTful API Design</li>
                        <li>Authentication & Security</li>
                      </ul>
                      <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" className="btn btn-success mt-auto" target="_blank">
                        <i className="fas fa-external-link-alt me-2"></i>Node.js Docs
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5 className="mb-0">Module 4</h5>
                    </div>
                    <div className="card-body">
                      <h6>Databases & Deployment</h6>
                      <ul>
                        <li>SQL & NoSQL Databases</li>
                        <li>DevOps Basics</li>
                        <li>Cloud Deployment</li>
                      </ul>
                      <a href="https://www.mongodb.com/docs/" className="btn btn-success mt-auto" target="_blank">
                        <i className="fas fa-external-link-alt me-2"></i>MongoDB Docs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100 hover-lift" style={{ backgroundColor: 'var(--fsd-color)', color: 'white' }}>
                <div className="card-body">
                  <h3 className="card-title">Career Scope</h3>
                  <ul className="fs-5">
                    <li>Full Stack Developer</li>
                    <li>Frontend Developer</li>
                    <li>Backend Developer</li>
                    <li>UI/UX Developer</li>
                    <li>Web Application Architect</li>
                    <li>DevOps Engineer</li>
                  </ul>
                  <div className="mt-3">
                    <h5>Education Paths:</h5>
                    <p><strong>Undergraduate:</strong> Computer Science, Information Technology</p>
                    <p><strong>Postgraduate:</strong> Web Development, Software Engineering</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100 bg-light hover-lift">
                <div className="card-body">
                  <h3 className="card-title" style={{ color: 'var(--fsd-color)' }}>Subject Outline</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Frontend</h5>
                      <ul>
                        <li>HTML5 & CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>DOM Manipulation</li>
                        <li>React.js</li>
                        <li>State Management</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Backend</h5>
                      <ul>
                        <li>Node.js & Express</li>
                        <li>RESTful APIs</li>
                        <li>Database Management</li>
                        <li>Authentication</li>
                        <li>Server Deployment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="card hover-lift">
            <div className="card-header" style={{ backgroundColor: 'var(--fsd-color)', color: 'white' }}>
              <h3 className="mb-0">Video Tutorials</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5>HTML, CSS & JavaScript Crash Course</h5>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/mU6anWqZJcc" title="Web Dev Crash Course" allowFullScreen></iframe>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Complete frontend fundamentals for beginners</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5>React.js Full Course</h5>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/bMknfKXIFA8" title="React Course" allowFullScreen></iframe>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Learn React.js in one video</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5>Node.js and Express.js Tutorial</h5>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/Oe421EPjeBE" title="Node.js and Express Tutorial" allowFullScreen></iframe>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Backend development with Node.js</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5>MongoDB Complete Tutorial</h5>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/ExcRbA7fy_A" title="MongoDB Tutorial" allowFullScreen></iframe>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Learn database management with MongoDB</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fsd