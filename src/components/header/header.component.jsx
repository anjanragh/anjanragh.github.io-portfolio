import React from "react";

import * as SocialLink from "../../components/social-links/social-links.component";

import coolReactGuy from "../../assets/person.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header u-container">
      <div className="header__content">
        <h1 className="main-heading">
          Hi!
          <span>I'm Anjan.</span>
        </h1>
        <p className="tagline">
          A Web Developer with a focus on building fast, robust and optimized
          UI with a beautifully orchestrated backend. I believe in developing Interfaces which brings a
          smile to your face (like this one. Hopefully!).
        </p>
      </div>

      <div className="header__image">
        <img src={coolReactGuy} alt="Illustration of guy wearing react swag" />
      </div>

      <div className="header__social-links">
        <SocialLink.Github />
        <SocialLink.LinkedIn />
        <SocialLink.Twitter />
      </div>
    </header>
  );
};

export default Header;
