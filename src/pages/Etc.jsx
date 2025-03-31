import React from 'react';
import CourseProgress from '../components/CourseProgress';
import { NavLink } from 'react-router-dom';

const Etc = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row">
                    {/* Header Section */}
                    <div className="col-12 mb-5">
                        <div className="d-flex flex-column text-center">
                            <h1 className="display-4 fw-bold">
                                <span style={{ color: 'var(--etc-color)' }}>English Technical Communication</span>
                            </h1>
                            <p className="fs-5 mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Master the art of clear and effective technical writing essential for today's professional environment.
                            </p>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="col-lg-8 mx-auto mb-5">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h2 className="h4 mb-3">What is Technical Communication?</h2>
                                <p>
                                    Technical Communication is the process of conveying complex technical information in a clear, concise, and accessible manner. It's an essential skill in today's information-driven workplace, enabling professionals to effectively share knowledge, instructions, and ideas across diverse audiences.
                                </p>
                                <p>
                                    Unlike general writing, technical communication focuses on precision, clarity, and usability. It encompasses a wide range of documents including reports, manuals, proposals, emails, presentations, and online content designed to inform, instruct, or persuade in technical contexts.
                                </p>
                                <p className="mb-0">
                                    In our increasingly digital and global workplace, mastering technical communication skills is crucial for career advancement in virtually every industry, from IT and engineering to healthcare and business management.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="col-12 text-center mb-5">
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <NavLink to="/technical-quiz" className="btn btn-primary px-4 py-2 rounded-pill">
                                <i className="fas fa-clipboard-list me-2"></i>Take Technical Communication Quiz
                            </NavLink>
                            <a 
                                href="https://www.stc.org/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="btn btn-outline-primary px-4 py-2 rounded-pill"
                            >
                                <i className="fas fa-external-link-alt me-2"></i>Society for Technical Communication
                            </a>
                        </div>
                    </div>

                    {/* Course Modules Section */}
                    <div className="col-12 mb-5">
                        <h2 className="text-center mb-4">Course Modules</h2>
                        <div className="row g-4">
                            {/* Module 1 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center" 
                                                style={{ width: '45px', height: '45px', backgroundColor: 'var(--light-etc-color)' }}>
                                                <i className="fas fa-pencil-alt text-etc-color"></i>
                                            </div>
                                            <h3 className="h5 ms-3 mb-0">Fundamentals of Technical Writing</h3>
                                        </div>
                                        <p>Core principles of technical writing, audience analysis, clarity, and conciseness.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Writing for Different Audiences</li>
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Technical vs General Writing</li>
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Clarity and Precision</li>
                                        </ul>
                                        <a href="/resources/tech-writing-basics.pdf" className="btn btn-sm btn-outline-primary d-block">
                                            <i className="fas fa-download me-2"></i>Download Resources
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Module 2 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center" 
                                                style={{ width: '45px', height: '45px', backgroundColor: 'var(--light-etc-color)' }}>
                                                <i className="fas fa-file-alt text-etc-color"></i>
                                            </div>
                                            <h3 className="h5 ms-3 mb-0">Document Design & Structure</h3>
                                        </div>
                                        <p>Creating well-organized and visually effective technical documents.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Information Organization</li>
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Visual Elements & Typography</li>
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Templates & Style Guides</li>
                                        </ul>
                                        <a href="/resources/document-design.pdf" className="btn btn-sm btn-outline-primary d-block">
                                            <i className="fas fa-download me-2"></i>Download Resources
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Module 3 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center" 
                                                style={{ width: '45px', height: '45px', backgroundColor: 'var(--light-etc-color)' }}>
                                                <i className="fas fa-laptop-code text-etc-color"></i>
                                            </div>
                                            <h3 className="h5 ms-3 mb-0">Technical Documentation</h3>
                                        </div>
                                        <p>Creating effective technical documentation for various purposes.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>User Manuals & Guides</li>
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>API Documentation</li>
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Process Documentation</li>
                                        </ul>
                                        <a href="/resources/technical-documentation.pdf" className="btn btn-sm btn-outline-primary d-block">
                                            <i className="fas fa-download me-2"></i>Download Resources
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Module 4 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center" 
                                                style={{ width: '45px', height: '45px', backgroundColor: 'var(--light-etc-color)' }}>
                                                <i className="fas fa-comment-dots text-etc-color"></i>
                                            </div>
                                            <h3 className="h5 ms-3 mb-0">Professional Communication</h3>
                                        </div>
                                        <p>Effective communication in professional settings and across media.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Email & Business Writing</li>
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Technical Presentations</li>
                                            <li><i className="fas fa-check-circle me-2 text-success"></i>Proposal & Report Writing</li>
                                        </ul>
                                        <a href="/resources/professional-comm.pdf" className="btn btn-sm btn-outline-primary d-block">
                                            <i className="fas fa-download me-2"></i>Download Resources
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Tracker */}
                    <div className="col-lg-10 mx-auto mb-5">
                        <CourseProgress courseId="etc" />
                    </div>

                    {/* Career Scope Section */}
                    <div className="col-12 mb-5">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4">Career Scope</h2>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <h3 className="h5 mb-3">Job Roles</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-briefcase me-2 text-primary"></i>Technical Writer/Editor
                                            </li>
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-briefcase me-2 text-primary"></i>Documentation Specialist
                                            </li>
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-briefcase me-2 text-primary"></i>Content Developer
                                            </li>
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-briefcase me-2 text-primary"></i>UX Writer
                                            </li>
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-briefcase me-2 text-primary"></i>Knowledge Manager
                                            </li>
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-briefcase me-2 text-primary"></i>Information Developer
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="h5 mb-3">Educational Path</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-graduation-cap me-2 text-primary"></i>Certificates in Technical Writing
                                            </li>
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-graduation-cap me-2 text-primary"></i>Bachelor's in Technical Communication
                                            </li>
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-graduation-cap me-2 text-primary"></i>Master's in Professional Writing
                                            </li>
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-graduation-cap me-2 text-primary"></i>Professional Association Memberships
                                            </li>
                                            <li className="list-group-item bg-transparent border-0 ps-0">
                                                <i className="fas fa-graduation-cap me-2 text-primary"></i>Specialized Industry Certifications
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subject Outline */}
                    <div className="col-12 mb-5">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4">Subject Outline</h2>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <h3 className="h5 mb-3"><i className="fas fa-list me-2 text-primary"></i>Core Writing Skills</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bg-transparent ps-0">Grammar & Style for Technical Writing</li>
                                            <li className="list-group-item bg-transparent ps-0">Clarity & Conciseness</li>
                                            <li className="list-group-item bg-transparent ps-0">Technical Vocabulary Management</li>
                                            <li className="list-group-item bg-transparent ps-0">Document Organization</li>
                                            <li className="list-group-item bg-transparent ps-0">Editing & Proofreading Techniques</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="h5 mb-3"><i className="fas fa-list me-2 text-primary"></i>Document Types & Applications</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bg-transparent ps-0">Technical Reports & White Papers</li>
                                            <li className="list-group-item bg-transparent ps-0">User Manuals & Standard Operating Procedures</li>
                                            <li className="list-group-item bg-transparent ps-0">Proposals & Business Documents</li>
                                            <li className="list-group-item bg-transparent ps-0">Online Documentation & Help Systems</li>
                                            <li className="list-group-item bg-transparent ps-0">Visual Communication & Data Visualization</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Tutorials */}
                    <div className="col-12">
                        <h2 className="text-center mb-4">Video Tutorials</h2>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe 
                                            src="https://www.youtube.com/embed/FOw3esO5CfI?rel=0" 
                                            title="Introduction to Technical Writing" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Introduction to Technical Writing</h5>
                                        <p className="card-text">Learn the basics of technical writing and what makes it different from other types of writing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe 
                                            src="https://www.youtube.com/embed/ELJ0XBZOY44?rel=0" 
                                            title="Document Design for Technical Writers" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Document Design for Technical Writers</h5>
                                        <p className="card-text">Explore best practices for organizing and formatting technical documents effectively.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe 
                                            src="https://www.youtube.com/embed/InYDaZ6AZGk?rel=0" 
                                            title="Technical Writing for Software Documentation" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Technical Writing for Software Documentation</h5>
                                        <p className="card-text">Learn how to create effective documentation for software products and APIs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Etc;