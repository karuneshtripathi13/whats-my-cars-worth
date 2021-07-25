import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'
import {
  Linkedin,
  GitHub,
  Twitter,
  Instagram,
  Youtube,
  Mail,
} from "react-feather";
const Footer = () => {
    return (
        <div>
      <div className="socialmedia">
        <div className="followme">Follow the Developer</div>
        <Linkedin
          className="linkedin"
          size="5vw"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/karunesh-tripathi-128b431b9/",
              "_blank"
            );
          }}
        />
        <GitHub
          size="5vw"
          className="github"
          onClick={() => {
            window.open("https://github.com/karuneshtripathi13", "_blank");
          }}
        />
        <Twitter
          size="5vw"
          className="twitter"
          onClick={() => {
            window.open("https://twitter.com/Karunes60783674", "_blank");
          }}
        />
        <Instagram
          size="5vw"
          className="insta"
          onClick={() => {
            window.open(
              "https://www.instagram.com/karuneshtripathi__/",
              "_blank"
            );
          }}
        />
        <Youtube
          size="5vw"
          className="youtube"
          onClick={() => {
            window.open(
              "https://www.youtube.com/channel/UCip-SKvL1CkSAR9_FpC4rqw",
              "_blank"
            );
          }}
        />
        <Mail
          size="5vw"
          className="gmail"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/karunesh-tripathi-128b431b9/detail/contact-info/",
              "_blank"
            );
          }}
        />
        <div className="copyrights">
          All Rights Reserved Copyright&copy;2021 KT
        </div>
      </div>
        </div>
    )
}

export default Footer
