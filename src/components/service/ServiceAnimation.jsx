import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Mobile Applications",
    descriptions: `I use a large varity of Javascript based Frameworks to create stunning and functional mobile applications both for business and end users.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Websites / E-Commerce",
    descriptions: `I create web implementations with code and no code approaches depending on the clients needs. Take a look at my portfolio to see some of my work.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-strategy",
    title: "Coaching / Consulting",
    descriptions: `I'm a Personal Finances enthusiast. I have plenty of educational content on all my social media, online courses and I do personalized coaching as well.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
