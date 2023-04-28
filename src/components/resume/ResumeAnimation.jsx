import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Sr. Software Engineer`,
    jobType: `Luxoft Canada | Remote`,
    jobDuration: `Jun 2022 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Luxoft Canada",
    jobDescription: `Senior Software Engineer working with React Native to support and develop a mobile application
     based on six different GitHub repositories and using an internal package library system to incorporate both independent
      packages and other-libraries-wrap packages to have a final end-user product live in the app stores.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Sr. Software Engineer`,
    jobType: `Luxoft México | Remote`,
    jobDuration: `Dic 2021 - Jun 22`,
    timeDuraton: `Full Time`,
    compnayName: "Luxoft México",
    jobDescription: `Senior Software Engineer working with React Native to support and develop a mobile application 
    based on six different GitHub repositories and using an internal package library system to incorporate both independent
     packages and other-libraries-wrap packages to have a final end-user product live in the app stores..`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Co-Founder & CTO`,
    jobType: `GYO Solutions`,
    jobDuration: `Jun 2014 - Dec 2021`,
    timeDuraton: `Full Time`,
    compnayName: "GYO Solutions",
    jobDescription: `I co-founded GYO Solutions in 2014 and worked in the Development department of a Software Factory company
     handling projects using technologies from Phonegap, Swift, Ionic, and AngularJS to newer frameworks such as Angular 8 and React.
      Also, we used multiple database and web services infrastructures as it was project dependant, like PHP and MYSQL or Firebase for a serverless approach.`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "2021",
    degreeTitle: "Professional Scrum Master™ I (PSM I)",
    instituteName: "Scrum.org",
  },
  {
    passingYear: "2017-2019",
    degreeTitle: "MBA in Business Management",
    instituteName: "ITESM",
  },
  {
    passingYear: "2010-2014",
    degreeTitle: "Bsc. in Computer Engineering",
    instituteName: "ITESM",
  }
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
