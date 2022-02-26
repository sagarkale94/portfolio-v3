import React from "react";
import "./home.css";
import WebImg from "../../assets/images/web.png";
import BgImg from "../../assets/images/bg.png";
import ProfilePic from "../../assets/images/pic.jpg";
import Title from "../title/title";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
    const history = useHistory();

    const handleMoreAboutClick = () => {
        history.push("/about");
    };

    return (
        <div data-aos="fade-right" className="home-container" style={{backgroundImage: `url(${BgImg})`}}>
            <Helmet>
                <title>Home | Sagar - Portfolio</title>
                <meta name="description" content="Sagar Kale portfolio home page" />
            </Helmet>
            <Title bgTitle="" splitedTitlePart1="" splitedTitlePart2="" />
            <div data-aos="fade-right" className="home-main-container">
                <div
                    className="home-img"
                    style={{ backgroundImage: `url(${ProfilePic})` }}
                ></div>
                <div className="home-message">
                    <h2 id="welcome-h2">Hi i am,</h2>
                    <h1 id="welcome-h1">Sagar Kale</h1>
                    <div className="row-align">
                        <h3 id="welcome-h3">I build things for web</h3>
                        <img src={WebImg} alt="_img_web" className="img-web" />
                    </div>
                    <div className="one-liner">
                        I'm a Pune based software developer & passionate for
                        javascript and javascript based frameworks.
                    </div>
                    <span
                        className="btn-more-about-me"
                        onClick={handleMoreAboutClick}
                    >
                        MORE ABOUT ME
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
