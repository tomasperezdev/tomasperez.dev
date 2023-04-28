import React from "react";

const AwardContnet = [
  {
    img: "s1",
    awardName: "React Native",
    awardFor: "Mobile Applications",
    delayAnimation: "0",
  },
  {
    img: "s2",
    awardName: "React JS",
    awardFor: "Web Implementations",
    delayAnimation: "200",
  },
  {
    img: "s3",
    awardName: "Angular",
    awardFor: "Mobile and Web Applications",
    delayAnimation: "400",
  },
  {
    img: "s7",
    awardName: "NodeJS",
    awardFor: "Backend Implementations",
    delayAnimation: "400",
  },
  {
    img: "s8",
    awardName: "Jest",
    awardFor: "Unit Testing",
    delayAnimation: "400",
  },
  {
    img: "s6",
    awardName: "Firebase",
    awardFor: "No Relational Databases",
    delayAnimation: "400",
  },
  {
    img: "s4",
    awardName: "PHP",
    awardFor: "Middleware webservices",
    delayAnimation: "400",
  },
  {
    img: "s5",
    awardName: "MYSQL",
    awardFor: "Relational Databases",
    delayAnimation: "400",
  },
  {
    img: "s9",
    awardName: "AngularJS",
    awardFor: "Legacy Projects",
    delayAnimation: "400",
  },

];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
