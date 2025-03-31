import React from 'react'
import CourseProgress from '../components/CourseProgress'
import { NavLink } from 'react-router-dom'

function Python() {
  return (
    <div>
      <div>
        <br />
        <h1 align="center" style={{ color: 'var(--dark)', fontWeight: 'bold', fontFamily: '"Times New Roman", Times, serif' }}>PYTHON</h1>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="btn btn-light fs-5" style={{ backgroundColor: 'var(--bg-light)', color: 'var(--dark)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>Python is a versatile and widely used high-level programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability and ease of use. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python has a vast standard library that provides modules and functions for various tasks, making it a powerful tool for a wide range of applications, from web development and scientific computing to artificial intelligence and data analysis. Its interpreted nature and dynamic typing make it accessible and efficient for both beginners and experienced developers.</p>
              
              <div className="mt-4 d-flex justify-content-between">
                <NavLink to="/python-quiz" className="btn rounded-pill px-4 py-2" style={{ backgroundColor: 'var(--python-color)', color: 'white' }}>
                  <i className="fas fa-question-circle me-2"></i>Take Python Quiz
                </NavLink>
                <a href="https://docs.python.org/3/" target="_blank" className="btn btn-outline-secondary rounded-pill px-4">
                  <i className="fas fa-external-link-alt me-2"></i>Official Documentation
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <CourseProgress courseId="python" totalModules={4} />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="card mb-4 hover-lift">
            <div className="card-header" style={{ backgroundColor: 'var(--python-color)', color: 'white' }}>
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
                      <h6>Python Fundamentals</h6>
                      <ul>
                        <li>Installation and Setup</li>
                        <li>Variables and Data Types</li>
                        <li>Basic Operations</li>
                      </ul>
                      <a href="https://www.w3schools.com/python/python_getstarted.asp" className="btn btn-primary mt-auto" target="_blank">
                        <i className="fas fa-external-link-alt me-2"></i>W3Schools
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
                      <h6>Control Structures</h6>
                      <ul>
                        <li>Conditional Statements</li>
                        <li>Loops and Iterations</li>
                        <li>Functions and Arguments</li>
                      </ul>
                      <a href="https://realpython.com/python-conditionals/" className="btn btn-primary mt-auto" target="_blank">
                        <i className="fas fa-external-link-alt me-2"></i>Real Python
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
                      <h6>Data Structures</h6>
                      <ul>
                        <li>Lists and Tuples</li>
                        <li>Dictionaries and Sets</li>
                        <li>List Comprehensions</li>
                      </ul>
                      <a href="https://docs.python.org/3/tutorial/datastructures.html" className="btn btn-primary mt-auto" target="_blank">
                        <i className="fas fa-external-link-alt me-2"></i>Python Docs
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
                      <h6>Advanced Topics</h6>
                      <ul>
                        <li>OOP in Python</li>
                        <li>Exception Handling</li>
                        <li>File I/O and Modules</li>
                      </ul>
                      <a href="https://www.codecademy.com/learn/learn-python-3" className="btn btn-primary mt-auto" target="_blank">
                        <i className="fas fa-external-link-alt me-2"></i>Codecademy
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
              <div className="card h-100 hover-lift" style={{ backgroundColor: 'var(--python-color)', color: 'white' }}>
                <div className="card-body">
                  <h3 className="card-title">Career Scope</h3>
                  <ul className="fs-5">
                    <li>Data Scientist/Analyst</li>
                    <li>Machine Learning Engineer</li>
                    <li>Backend Developer</li>
                    <li>DevOps Engineer</li>
                    <li>Automation Engineer</li>
                    <li>Research Scientist</li>
                  </ul>
                  <div className="mt-3">
                    <h5>Education Paths:</h5>
                    <p><strong>Undergraduate:</strong> Computer Science, Data Science</p>
                    <p><strong>Postgraduate:</strong> AI/ML, Data Analytics, Computational Science</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100 bg-light hover-lift">
                <div className="card-body">
                  <h3 className="card-title" style={{ color: 'var(--python-color)' }}>Subject Outline</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Basic Concepts</h5>
                      <ul>
                        <li>Syntax and Semantics</li>
                        <li>Data Types and Variables</li>
                        <li>Operators and Expressions</li>
                        <li>Control Flow</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Advanced Topics</h5>
                      <ul>
                        <li>Object-Oriented Programming</li>
                        <li>Functional Programming</li>
                        <li>File Handling and I/O</li>
                        <li>Exception Handling</li>
                        <li>Modules and Packages</li>
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
            <div className="card-header" style={{ backgroundColor: 'var(--python-color)', color: 'white' }}>
              <h3 className="mb-0">Video Tutorials</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5>Python Basics for Beginners</h5>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/7wnove7K-ZQ?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" title="Python Basics" allowFullScreen></iframe>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Complete Python Tutorial for Beginners</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5>Python Full Course</h5>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/_uQrJ0TkZlc" title="Python Full Course" allowFullScreen></iframe>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Learn Python in one video</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5>Python for Beginners - FreeCodeCamp</h5>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/rfscVS0vtbw" title="Python FreeCodeCamp" allowFullScreen></iframe>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Full Course from FreeCodeCamp</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header bg-light">
                      <h5>Advanced Python Concepts</h5>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/vLqTf2b6GZw" title="Advanced Python" allowFullScreen></iframe>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">For more experienced programmers</small>
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

export default Python