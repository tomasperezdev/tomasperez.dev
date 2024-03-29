import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGit,
  FaInstagram,
  FaDiscord
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaTwitter />, link: "https://twitter.com/tppshaka77" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/tppshaka77" },
  { Social: <FaGit />, link: "https://www.github.com/tomasperezdev" },
  { Social: <FaYoutube />, link: "https://www.youtube.com/channel/UCSFefKn0zOBvUagnDaetYJw" },
  { Social: <FaInstagram />, link: "https://instagram.com/tppshaka77" },
  { Social: <FaDiscord />, link: "https://discordapp.com/users/258065994633707520" },

];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            Tomás Pérez{" "}
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
