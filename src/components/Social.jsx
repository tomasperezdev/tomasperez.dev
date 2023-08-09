import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGit,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaTwitter />, link: "https://twitter.com/tppshaka77" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/tppshaka77" },
  { Social: <FaGit />, link: "https://www.github.com/tomasperezdev" },
  { Social: <FaYoutube />, link: "https://www.youtube.com/channel/UCSFefKn0zOBvUagnDaetYJw" },
  { Social: <FaInstagram />, link: "https://instagram.com/tppshaka77" },
  
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
