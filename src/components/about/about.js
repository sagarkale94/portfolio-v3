import React from "react";
import "./about.css";
import Title from "../title/title";
import Angular from "../../assets/images/ic_skills/angular.png";
import Material from "../../assets/images/ic_skills/material.png";
// import Typescript from "../../assets/images/ic_skills/typescript.png";
import ReactJS from "../../assets/images/ic_skills/react.png";
// import Javascript from "../../assets/images/ic_skills/javascript.png";
import StyledComp from "../../assets/images/ic_skills/styledComp.png";
import NgRX from "../../assets/images/ic_skills/ngrx.svg";
import Redux from "../../assets/images/ic_skills/redux.svg";
import { Helmet } from "react-helmet";

function About() {
    return (
        <div data-aos="fade-right" className="page-container">
            <Helmet>
                <title>About | Sagar - Portfolio</title>
                <meta name="description" content="About Sagar Kale" />
            </Helmet>
            <Title
                bgTitle="resume"
                splitedTitlePart1="about "
                splitedTitlePart2="me"
            />
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
                        </div>
                        <div>
                            <h4>Languages</h4>
                            <div>English, Hindi, Marathi</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="row">
                            <span className="col-md-5 col-xs-12 score-card">
                                <div className="score-key">4+</div>
                                <div className="score-value">
                                    YEARS OF EXPERIENCE
                                </div>
                            </span>
                            <span className="col-md-5 offset-md-1 col-xs-12 score-card">
                                <div className="score-key">7+</div>
                                <div className="score-value">PROJECTS</div>
                            </span>
                        </div>
                    </div>
                </section>
                <div className="custom-hr"></div>
                <section className="section-skills">
                    <h3>MY SKILLS</h3>
                    <div className="row mt-5">
                        <div className="col-md-4 col-xs-12 skill-item">
                            <img
                                src={Angular}
                                alt="_ic"
                                className="skill-icon"
                            />
                            <p>Angular</p>
                        </div>
                        <div className="col-md-4 col-xs-12 skill-item">
                            <img
                                src={Material}
                                alt="_ic"
                                className="skill-icon"
                            />
                            <p>Angular Material</p>
                        </div>
                        <div className="col-md-4 col-xs-12 skill-item">
                            <img src={NgRX} alt="_ic" className="skill-icon" />
                            <p>NgRX</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-xs-12 skill-item">
                            <img
                                src={ReactJS}
                                alt="_ic"
                                className="skill-icon"
                            />
                            <p>React JS</p>
                        </div>
                        <div className="col-md-4 col-xs-12 skill-item">
                            <img
                                src={StyledComp}
                                alt="_ic"
                                className="skill-icon"
                            />
                            <p>Styled Component</p>
                        </div>
                        <div className="col-md-4 col-xs-12 skill-item">
                            <img
                                src={Redux}
                                alt="_ic"
                                className="skill-icon"
                            />
                            <p>Redux</p>
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
                                    <i className="fa fa-briefcase"></i>
                                </span>
                                <span className="badge-year">2020 - Present</span>
                                <h5>SAGACITY SOFTWARES PVT. LTD.</h5>
                                <p>SOFTWARE ENGINEER</p>
                                <p>
                                    Designing the system as per the customer
                                    requirements and implementing the same
                                    effectively by working closely with the
                                    backend, UI/UX and Testing team members
                                    throughout the development cycle ensuring
                                    that the proposed design met customer
                                    requirements.
                                </p>
                            </div>
                            <div className="ed-ex-item">
                                <span className="ic-ed-ex">
                                    <i className="fa fa-briefcase"></i>
                                </span>
                                <span className="badge-year">2019 - 2020</span>
                                <h5>STACKMINT PVT. LTD.</h5>
                                <p>ANGULAR DEVELOPER</p>
                            </div>
                            <div className="ed-ex-item">
                                <span className="ic-ed-ex">
                                    <i className="fa fa-briefcase"></i>
                                </span>
                                <span className="badge-year">2018 - 2019</span>
                                <h5>BITCODE TECHNOLOGY PVT. LTD.</h5>
                                <p>SOFTWARE ASSOCIATE</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="ed-ex-item">
                                <span className="ic-ed-ex">
                                    <i className="fa fa-graduation-cap"></i>
                                </span>
                                <span className="badge-year">2017 - 2015</span>
                                <h5>MASTER OF ENGINEERING</h5>
                                <p>
                                    Completed master of engineering from pune
                                    university.
                                </p>
                            </div>
                            <div className="ed-ex-item">
                                <span className="ic-ed-ex">
                                    <i className="fa fa-graduation-cap"></i>
                                </span>
                                <span className="badge-year">2014 - 2011</span>
                                <h5>BACHELOR OF ENGINEERING</h5>
                                <p>
                                    Completed bachelor of engineering from pune
                                    university.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
