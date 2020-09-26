import React from "react";

import {
  linkedInURL,
  githubURL,
  twitterURL,
} from "../../components/social-links/social-link.constants";

import "./about-me-card.styles.scss";

const AboutMeCard = () => {
  return (
    <div className="aboutme">
      <img
        src="https://user-images.githubusercontent.com/49617450/90225466-0fe95300-de2f-11ea-911a-1eb11f612b53.png"
        alt="Pin"
        className="pin"
      />
      <div className="aboutme__image">
        <img
          src="https://lh3.google.com/pw/ACtC-3eZO86WFeSQsy_faodSByV1oYWUbu7l2Fy2d1tpvkTQv1YGVaZ_pSFh_LQZhaBpz98TVOfidlat63gUprZChmB42VyqA88=w555-h739-no?authuser=0"
          alt="Anjan Ragh K S"
        />
      </div>
      <div className="aboutme__details">
        <p className="connect-me"> Let's Connect </p>

        <ul className="reach-out">
          <li>
            <a href="mailto: aks740@nyu.edu">Gmail</a>
          </li>
          <li>
            <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href={twitterURL} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeCard;
