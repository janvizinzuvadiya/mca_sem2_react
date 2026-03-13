import React  from "react";
import personf7 from '../../assets/img/person/person-f-7.webp';
import personm7 from '../../assets/img/person/person-m-7.webp';
import personf8 from '../../assets/img/person/person-f-8.webp';
import personm8 from '../../assets/img/person/person-m-8.webp';
import personf9 from '../../assets/img/person/person-f-9.webp';
import personm13 from '../../assets/img/person/person-m-13.webp';   

const Testimonials = () => {
    return (
        <div className="testimonials">
             {/* <!-- Testimonials Section --> */}
    <section id="testimonials" className="testimonials section light-background">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">

        <div className="testimonial-masonry">

          <div className="testimonial-item" data-aos="fade-up">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning.</p>
              <div className="client-info">
                <div className="client-image">
                  <img src={personf7} alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Rachel Bennett</h3>
                  <span className="position">Strategy Director</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-item highlight" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Exceptional service delivery and innovative solutions have transformed our business operations, leading to remarkable growth and enhanced customer satisfaction across all touchpoints.</p>
              <div className="client-info">
                <div className="client-image">
                  <img src={personm7} alt="Client"/>
                </div>
                <div className="client-details">
                  <h3>Daniel Morgan</h3>
                  <span className="position">Chief Innovation Officer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Strategic partnership has enabled seamless digital transformation and operational excellence.</p>
              <div className="client-info">
                <div className="client-image">
                  <img src={personf8} alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Emma Thompson</h3>
                  <span className="position">Digital Lead</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Professional expertise and dedication have significantly improved our project delivery timelines and quality metrics.</p>
              <div className="client-info">
                <div className="client-image">
                  <img src={personm8} alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Christopher Lee</h3>
                  <span className="position">Technical Director</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-item highlight" data-aos="fade-up" data-aos-delay="400">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Collaborative approach and industry expertise have revolutionized our product development cycle, resulting in faster time-to-market and increased customer engagement levels.</p>
              <div className="client-info">
                <div className="client-image">
                  <img src={personf9} alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Olivia Carter</h3>
                  <span className="position">Product Manager</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-item" data-aos="fade-up" data-aos-delay="500">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Innovative approach to user experience design has significantly enhanced our platform's engagement metrics and customer retention rates.</p>
              <div className="client-info">
                <div className="client-image">
                  <img src={personm13} alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Nathan Brooks</h3>
                  <span className="position">UX Director</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    {/* <!-- /Testimonials Section --> */}
    </div>

    )
}

export default Testimonials;