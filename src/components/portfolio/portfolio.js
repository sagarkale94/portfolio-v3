import React from 'react';
import './portfolio.css';
import Title from '../title/title';
import DMS from '../../assets/images/ic_project/dms.png';
import Brigs from '../../assets/images/ic_project/brigs.png';
import Fitke from '../../assets/images/ic_project/fitke.png';
import Admission from '../../assets/images/ic_project/adm.png';
import Ikshu from '../../assets/images/ic_project/ikshu.png';
import Lagna from '../../assets/images/ic_project/lagna.png';
import Project from '../project/project';

function Portfolio() {

    const projectData = [
        {
            projectTitle: 'DMS : Data visualization and dashboard management web-based tool',
            frontendTech: 'Angular 9 and Angular Material',
            backendTech: '',
            img: DMS,
            description: 'DMS allow admins to create the dashboard and configure the dashboard using available custom 30 different charts with dedicated api and position charts as it best suits. Admin then can allow the dashboard to menus assigned to user roles he has created. Whith the help of configuration done by admins, users can login and observe the assigned dashboard to its roles. Best supported features are drill-down charts and hence dashbord also slide-show of dashboard charts, slide-show dashboard chart, export dashboards as pdf, autorefresh supported dashboards, dark theme support for complete tool, multilingual support, intranet as well as cloud deployment support andmany more'
        },
        {
            projectTitle: 'Brigs-Nucleus : Organization asset management web-based tool',
            frontendTech: 'Angular 8 and Angular Material',
            backendTech: 'Node JS and MySQL',
            img: Brigs,
            description: 'Brigs-Nucleus allows admins to make the assets entry and maintain the asset by allowing to create checklist for asset, create asset checklist questions and collect the answers regularly after specified time. With the help of Brigs-Nucleus, to maintain the asset related document will become easy.'
        },
        {
            projectTitle: 'Fitke - Table tennis tournament superadmin portal',
            frontendTech: 'Angular 7 and Angular Material',
            backendTech: 'Node JS and MySQL',
            img: Fitke,
            description: 'The system is developed to provide platform for table tennis players where they can participate in the table tennis tournament as per their preferences based on venue, participation fee and tournament type. After online payment and participation player can see his tournament matches, participant and can rate after completion of tournament. Super admin, admin and scorekeeper manage the tournaments through their respective login.'
        },
        {
            projectTitle: 'Admission Matters - School enquiry and admission parent portal',
            frontendTech: 'Angular 7 and Angular Material',
            backendTech: 'Node JS and MySQL',
            img: Admission,
            description: "The system is developed to provide a direct communication platform between school staff and parents, regarding the admission process of the child. Involved features like designing the enquiry form by the school staff dynamically as per their requirement, filling up the enquiry form as well as admission form by the parents, adding/updating the child remarks by the school staff depending on the criteria set by the school after the child's as well as parent's interview, etc."
        },
        {
            projectTitle: 'Ikshu Homes - Society management admin portal',
            frontendTech: 'Angular 6 and Angular Material',
            backendTech: 'Node JS and MySQL',
            img: Ikshu,
            description: "The system is developed to provide social platform for apartment complex residents, a communication platform for owner and residents of apartment complexes to converse with neighbours. Involved features like notices, events, conversations, complaints, visitors, real-time notifications etc."
        },
        {
            projectTitle: 'Lagnamantra - Matrimony user portal',
            frontendTech: 'Angular 6 and Angular Material',
            backendTech: 'Node JS and MySQL',
            img: Lagna,
            description: "The system is developed where user can do registration for free and create/update profile, search profiles with filter, send/accept interest, firebase real time chat with accepted interest profile and choose the payment plans"
        }
    ]

    const projectsToRender = (
        projectData.map((project, index) => {
            return <Project
                key={index}
                projectTitle={project.projectTitle}
                frontendTech={project.frontendTech}
                backendTech={project.backendTech}
                img={project.img}
                description={project.description}
                isEven={(index % 2) === 0}
            />
        })
    )

    return (
        <div data-aos="fade-right" className="page-container">
            <Title bgTitle="works" splitedTitlePart1="my " splitedTitlePart2="portfolio" />
            <div className="sub-container">
                <div className="container">
                    <div className="row top-20">
                        <div className="col-md-4 col-xs-12">
                            <div className="grid-item-outer">
                                <div className="grid-item" style={{ backgroundImage: `url(${DMS})` }}>
                                    <div className="overlay" style={{ backgroundColor: '#0073b08e' }}>
                                        <div className="text">TetraPak's DMS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="grid-item-outer">
                                <div className="grid-item" style={{ backgroundImage: `url(${Brigs})` }}>
                                    <div className="overlay" style={{ backgroundColor: '#a801c18e' }}>
                                        <div className="text">Brigs Nucleus</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="grid-item-outer">
                                <div className="grid-item" style={{ backgroundImage: `url(${Fitke})` }}>
                                    <div className="overlay" style={{ backgroundColor: '#055a9d8e' }}>
                                        <div className="text">Fitke</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row top-20">
                        <div className="col-md-4 col-xs-12">
                            <div className="grid-item-outer">
                                <div className="grid-item" style={{ backgroundImage: `url(${Admission})` }}>
                                    <div className="overlay" style={{ backgroundColor: '#e8b5008e' }}>
                                        <div className="text">Admission Matters</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="grid-item-outer">
                                <div className="grid-item" style={{ backgroundImage: `url(${Ikshu})` }}>
                                    <div className="overlay" style={{ backgroundColor: '#3fa0fc8e' }}>
                                        <div className="text">Ikshu Home</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="grid-item-outer">
                                <div className="grid-item" style={{ backgroundImage: `url(${Lagna})` }}>
                                    <div className="overlay" style={{ backgroundColor: '#bf1a1a8e' }}>
                                        <div className="text">Lagnamantra</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {projectsToRender}
        </div>
    );
}

export default Portfolio;