import React, { useEffect } from 'react';
import './about.css';
import Title from '../title/title';
import Angular from '../../assets/images/ic_skills/angular.png';
import Material from '../../assets/images/ic_skills/material.png';
import Typescript from '../../assets/images/ic_skills/typescript.png';
import ReactJS from '../../assets/images/ic_skills/react.png';
import Javascript from '../../assets/images/ic_skills/javascript.png';
import NodeJs from '../../assets/images/ic_skills/nodejs.png';
import MongoDB from '../../assets/images/ic_skills/mongodb.png';
import MySql from '../../assets/images/ic_skills/mysql.png';

function About() {

    useEffect(() => {
        document.title = 'About | Sagar - Portfolio';
    }, []);

    return (
        <div data-aos="fade-right" className="page-container">
            <Title bgTitle="resume" splitedTitlePart1="about " splitedTitlePart2="me" />
            <div className="container">
                <section className="row">
                    <div className="col-md-6 col-xs-12 personal-info">
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
                        <div className="row">
                            <span className="col-md-5 col-xs-12 score-card">
                                <div className="score-key">2.5+</div>
                                <div className="score-value">YEARS OF EXPERIENCE</div>
                            </span>
                            <span className="col-md-5 offset-md-1 col-xs-12 score-card">
                                <div className="score-key">6+</div>
                                <div className="score-value">PROJECTS</div>
                            </span>
                        </div>
                    </div>
                </section>
                <div className="custom-hr"></div>
                <section className="section-skills">
                    <h3>MY SKILLS</h3>
                    <div className="row">
                        <div className="col-md-3 col-xs-12 skill-item">
                            <img src={Angular} alt="_ic" className="skill-icon" />
                            <p>Angular 2+</p>
                        </div>
                        <div className="col-md-3 col-xs-12 skill-item">
                            <img src={Material} alt="_ic" className="skill-icon" />
                            <p>Angular Material</p>
                        </div>
                        <div className="col-md-3 col-xs-12 skill-item">
                            <img src={Typescript} alt="_ic" className="skill-icon" />
                            <p>Typescript</p>
                        </div>
                        <div className="col-md-3 col-xs-12 skill-item">
                            <img src={ReactJS} alt="_ic" className="skill-icon" />
                            <p>React JS</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-xs-12 skill-item">
                            <img src={Javascript} alt="_ic" className="skill-icon" />
                            <p>Javascript</p>
                        </div>
                        <div className="col-md-3 col-xs-12 skill-item">
                            <img src={NodeJs} alt="_ic" className="skill-icon" />
                            <p>Node JS</p>
                        </div>
                        <div className="col-md-3 col-xs-12 skill-item">
                            <img src={MongoDB} alt="_ic" className="skill-icon" />
                            <p>Mongo DB</p>
                        </div>
                        <div className="col-md-3 col-xs-12 skill-item">
                            <img src={MySql} alt="_ic" className="skill-icon" />
                            <p>My SQL</p>
                        </div>
                    </div>
                </section>
                <div className="custom-hr"></div>
                <section className="section-exp-edu">
                    <h3>EXPERIENCE AND EDUCATION</h3>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="ed-ex-item">
                                <span className="ic-ed-ex">
                                    <i className='fa fa-briefcase'></i>
                                </span>
                                <span className="badge-year">2019 - 2020</span>
                                <h5>STACKMINT PVT. LTD.</h5>
                                <p>ANGULAR DEVELOPER</p>
                                <p>Designing the system as per the customer requirements and implementing the same effectively by working closely with the backend, UI/UX and Testing team members throughout the development cycle ensuring that the proposed design met customer requirements.</p>
                            </div>
                            <div className="ed-ex-item">
                                <span className="ic-ed-ex">
                                    <i className='fa fa-briefcase'></i>
                                </span>
                                <span className="badge-year">2018 - 2019</span>
                                <h5>BITCODE TECHNOLOGY PVT. LTD.</h5>
                                <p>SOFTWARE ASSOCIATE</p>
                                <p>Designing the system as per the customer requirements and implementing the same effectively by working closely with the backend, UI/UX and Testing team members throughout the development cycle ensuring that the proposed design met customer requirements.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="ed-ex-item">
                                <span className="ic-ed-ex">
                                    <i className='fa fa-graduation-cap'></i>
                                </span>
                                <span className="badge-year">2017 - 2015</span>
                                <h5>MASTER OF ENGINEERING</h5>
                                <p>Completed master of engineering from pune university.</p>
                            </div>
                            <div className="ed-ex-item">
                                <span className="ic-ed-ex">
                                    <i className='fa fa-graduation-cap'></i>
                                </span>
                                <span className="badge-year">2014 - 2011</span>
                                <h5>BACHELOR OF ENGINEERING</h5>
                                <p>Completed bachelor of engineering from pune university.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;