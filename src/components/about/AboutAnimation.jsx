import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.png" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Senior Software Engineer</p>
                  <h3>Tomás Pérez</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>
                    I'm a Senior Software Engineer Freelancer with over 8 years of
                    experience. I'm from Colombia, living currently in Canada. I code and create web and mobile
                    implementations for a living. I like work
                    with new people. New people new Experiences.
                  </p>
                  <p>
                    At the moment I'm focused on developing my leardship and technical skills. 
                    I'm always looking for new challenges and opportunities to grow as a professional.
                    Feel free to contact me if you have any questions or if you want to work with me.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Tomás Pérez</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>27th August 1991</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>31 years</span>
                        </li>
                        <li>
                          <label>City: </label>
                          <span>Vancouver, Canada</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Email: </label>
                          <span>tppshaka77@gmail.com</span>
                        </li>
                        <li>
                          <label>Contact: </label>
                          <span>@tppshaka77</span>
                        </li>
                        <li>
                          <label>Employed: </label>
                          <span>Full Time</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span className="highlighted">Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>My Stack.</h3>
          </div>

          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

         {/*  <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
