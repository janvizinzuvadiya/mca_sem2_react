import React  from "react";
import profileSquare1 from '../../assets/img/person/pro1.jpg';

const Home = () => {
    return (
        <div className="home">
            
            <section id="hero" className="hero section">

            <div className="background-elements">
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
            </div>

            <div className="hero-content">

                <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                    <div className="hero-text">
                        <h1>Snap<span className="accent-text">Folio</span></h1>
                        <h2>Alexander Chen</h2>
                        <p className="lead">I'm a <span className="typed" data-typed-items="UI/UX Designer, Web Developer, Brand Strategist, Creative Director"></span></p>
                        <p className="description">Passionate about creating exceptional digital experiences that blend innovative design with functional development. Let's bring your vision to life.</p>

                        <div className="hero-actions">
                        <a href="#portfolio" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Get In Touch</a>
                        </div>

                        <div className="social-links">
                        <a href="#"><i className="bi bi-dribbble"></i></a>
                        <a href="#"><i className="bi bi-behance"></i></a>
                        <a href="#"><i className="bi bi-github"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                    <div className="hero-visual">
                        <div className="profile-container">
                        <div className="profile-background"></div>
                        <img src={profileSquare1} alt="Alexander Chen" className="profile-image" />
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </div>

            </section>
        </div>
}

export default Home;