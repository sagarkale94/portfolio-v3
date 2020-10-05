import React from 'react';
import './portfolio.css';
import Title from '../title/title';
import DMS from '../../assets/images/ic_project/dms.png';
import Brigs from '../../assets/images/ic_project/brigs.png';
import Fitke from '../../assets/images/ic_project/fitke.png';
import Admission from '../../assets/images/ic_project/adm.png';
import Ikshu from '../../assets/images/ic_project/ikshu.png';
import Lagna from '../../assets/images/ic_project/lagna.png';

function Portfolio() {
    return (
        <div data-aos="fade-right" className="page-container">
            <Title bgTitle="works" splitedTitlePart1="my " splitedTitlePart2="portfolio" />
            <div className="sub-container">
                <div className="grid">
                    <div className="grid-row">
                        <div className="grid-item-outer">
                            <div className="grid-item" style={{ backgroundImage: `url(${DMS})` }}>
                                <div className="overlay" style={{ backgroundColor: '#0073b08e' }}>
                                    <div className="text">TetraPak's DMS</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item-outer">
                            <div className="grid-item" style={{ backgroundImage: `url(${Brigs})` }}>
                                <div className="overlay" style={{ backgroundColor: '#a801c18e' }}>
                                    <div className="text">Brigs Nucleus</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item-outer">
                            <div className="grid-item" style={{ backgroundImage: `url(${Fitke})` }}>
                                <div className="overlay" style={{ backgroundColor: '#055a9d8e' }}>
                                    <div className="text">Fitke</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-item-outer">
                            <div className="grid-item" style={{ backgroundImage: `url(${Admission})` }}>
                                <div className="overlay" style={{ backgroundColor: '#e8b5008e' }}>
                                    <div className="text">Admission Matters</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item-outer">
                            <div className="grid-item" style={{ backgroundImage: `url(${Ikshu})` }}>
                                <div className="overlay" style={{ backgroundColor: '#3fa0fc8e' }}>
                                    <div className="text">Ikshu Home</div>
                                </div>
                            </div>
                        </div>
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
    );
}

export default Portfolio;