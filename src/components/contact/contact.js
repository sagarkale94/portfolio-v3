import React from 'react';
import './contact.css';
import Title from '../title/title';

function Contact() {
    return (
        <div data-aos="fade-right" className="page-container">
            <Title bgTitle="contact" splitedTitlePart1="get in " splitedTitlePart2="touch" />
            <div className="container sub-container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <h3>HAPPY TO HELP ..!!</h3>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <div className="contact-item">
                            <i className="fa fa-envelope-open ic-contacts-dark"></i>
                            <span className="contact-item-row">
                                <span className="contact-item-row-key">Email Me</span>
                                <span className="contact-item-row-val">sagarkale94@gmail.com</span>
                            </span>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-phone-square ic-contacts-dark1"></i>
                            <span className="contact-item-row">
                                <span className="contact-item-row-key">Call Me</span>
                                <span className="contact-item-row-val">+91-8551913973</span>
                            </span>
                        </div>
                        <div className="contact-social">
                            <span className="contact-social-item">
                                <i className="fa fa-facebook"></i>
                            </span>
                            <span className="contact-social-item">
                                <i className="fa fa-twitter"></i>
                            </span>
                            <span className="contact-social-item">
                                <i className="fa fa-github"></i>
                            </span>
                            <span className="contact-social-item">
                                <i className="fa fa-youtube"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="contact-input">
                            <label htmlFor="name">Name</label><br />
                            <input type="text" id="name" placeholder="Enter your name.." />
                        </div>
                        <div className="contact-input">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" id="email" placeholder="Enter your email.." />
                        </div>
                        <div className="contact-input">
                            <label htmlFor="message">Message</label><br />
                            <textarea type="text" id="message" placeholder="Enter your message.." />
                        </div>
                        <div className="btn-send-msg">
                            SEND MESSAGE
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contact;