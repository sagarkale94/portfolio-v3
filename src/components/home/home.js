import React from 'react';
import './home.css';
import WebImg from '../../assets/images/web.png';
import ProfilePic from '../../assets/images/pic.jpg';

function Home() {
    return (
        <div className="home-container">
            <div className="color-block"></div>
            <div data-aos="fade-right" className="home-main-container">
                <div className="home-img" style={{ backgroundImage: `url(${ProfilePic})` }}></div>
                <div className="home-message">
                    <h2 id="welcome-h2">Hi i am,</h2>
                    <h1 id="welcome-h1">Sagar Kale</h1>
                    <div className="row-align">
                        <h3 id="welcome-h3">I build things for web</h3>
                        <img src={WebImg} alt="_img_web" className="img-web" />
                    </div>
                    <div className="one-liner">
                        I'm a Pune based software developer & passionate for javascript and javascript based frameworks.
                    </div>
                    <span className="btn-more-about-me">MORE ABOUT ME<i className="fa fa-user ic-about-me" style={{ fontSize: '18px' }}></i></span>
                </div>
            </div>
        </div>
    );
}

export default Home;