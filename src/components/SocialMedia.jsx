import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/martinezoms1" target="_blank" rel="noreferrer">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://linkedin.com/in/martins-enyinnaya-b4063b18b" target="_blank" rel="noreferrer">
        <div>
          <BsLinkedin />
        </div>
      </a>

      <a href="https://github.com/martinezoms" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
