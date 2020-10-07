import React, { useEffect } from 'react';
import './home.css';
import WebImg from '../../assets/images/web.png';
import ProfilePic from '../../assets/images/pic.jpg';
import Title from '../title/title';
import { useHistory } from "react-router-dom";

function Home() {

    const history = useHistory();

    const handleMoreAboutClick = () => {
        history.push('/about');
    }

    useEffect(() => {
        document.title = 'Home | Sagar - Portfolio';
    }, []);

    return (
        <div className="home-container">
            <Title bgTitle="" splitedTitlePart1="" splitedTitlePart2="" />
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
                    <span className="btn-more-about-me" onClick={handleMoreAboutClick}>MORE ABOUT ME</span>
                </div>
            </div>
        </div>
    );
}

export default Home;