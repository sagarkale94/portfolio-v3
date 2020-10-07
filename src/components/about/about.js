import React from 'react';
import './about.css';
import Title from '../title/title';

function About() {
    return (
        <div data-aos="fade-right" className="page-container">
            <Title bgTitle="resume" splitedTitlePart1="about " splitedTitlePart2="me" />
            <div className="container">
                <section className="row">
                    <div className="col-md-6 col-xs-12">
                        <h3>PERSONAL INFO</h3>
                        <div className="row">
                            <span className="col-md-6 col-xs-12">
                                <h4>Name</h4>
                                <div>Sagar Kale</div>
                            </span>
                            <span className="col-md-6 col-xs-12">
                                <h4>Email</h4>
                                <div>sagarkale94@gmail.com</div>
                            </span>
                        </div>
                        <div className="row">
                            <span className="col-md-6 col-xs-12">
                                <h4>Address</h4>
                                <div>Pune, Maharashtra India</div>
                            </span>
                            <span className="col-md-6 col-xs-12">
                                <h4>Age</h4>
                                <div>28</div>
                            </span>
                        </div>
                        <div className="row">
                            <span className="col-md-6 col-xs-12">
                                <h4>Nationality</h4>
                                <div>Indian</div>
                            </span>
                            <span className="col-md-6 col-xs-12">
                                <h4>Freelancer</h4>
                                <div>Available</div>
                            </span>
                        </div>
                        <div>
                            <h4>Languages</h4>
                            <div>English, Hindi, Marathi</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="pi-row">
                            <span>
                                <div className="score-key">2.5+</div>
                                <div className="score-value">YEARS OF EXPERIENCE</div>
                            </span>
                            <span>
                                <div className="score-key">6+</div>
                                <div className="score-value">PROJECTS</div>
                            </span>
                        </div>
                    </div>
                </section>
                <div className="custom-hr"></div>
                <section className="about-row2">
                    <div className="section-title">
                        <h3>MY SKILLS</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-xs-12">
                                    Angular
                            </div>
                                <div className="col-md-4 col-xs-12">
                                    Angular Material
                            </div>
                                <div className="col-md-4 col-xs-12">
                                    Node
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;