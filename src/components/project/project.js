import React from 'react';
import './project.css';

const Project = (props) => {
    return (
        <div className="project-container">
            {props.isEven ?
                <section className="project-description-row even">
                    <div className="project-tech-container">
                        <div>
                            <h1>{props.projectTitle}</h1>
                        </div>
                        <div className="project-technology-row">
                            <div className="project-technology-col">
                                <h3>Frontend</h3>
                                <span>{props.frontendTech}</span>
                            </div>
                            {props.backendTech.length > 0 ?
                                <div className="project-technology-col">
                                    <h3>Backend</h3>
                                    <span>{props.backendTech}</span>
                                </div>
                                : null
                            }
                        </div>
                        <div className="project-functionality">
                            <h3>Functionality</h3>
                            <span>{props.description}</span>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <img data-aos="fade-left" data-aos-duration="1000" src={props.img} alt="_dms" width="500" height="250px" />
                    </div>
                </section>
                :
                <section className="project-description-row odd">
                    <div className="project-image-container">
                        <img data-aos="fade-right" data-aos-duration="1000" src={props.img} alt="_dms" width="500" height="250px" />
                    </div>
                    <div className="project-tech-container">
                        <div>
                            <h1>{props.projectTitle}</h1>
                        </div>
                        <div className="project-technology-row">
                            <div className="project-technology-col">
                                <h3>Frontend</h3>
                                <span>{props.frontendTech}</span>
                            </div>
                            {props.backendTech.length > 0 ?
                                <div className="project-technology-col">
                                    <h3>Backend</h3>
                                    <span>{props.backendTech}</span>
                                </div>
                                : null
                            }
                        </div>
                        <div className="project-functionality">
                            <h3>Functionality</h3>
                            <span>{props.description}</span>
                        </div>
                    </div>
                </section>
            }
        </div >
    );
}

export default Project;