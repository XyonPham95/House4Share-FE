import React, { Component } from "react";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

class Footer extends Component {
  render() {
    let socials = [
      {
        name: "facebook",
        url: "http://facebook.com/",
        className: "fab fa-facebook",
      },
      {
        name: "twitter",
        url: "http://twitter.com",
        className: "fab fa-twitter",
      },
      {
        name: "instagram",
        url: "http://instagram.com/",
        className: "fab fa-instagram",
      },
      {
        name: "github",
        url: "http://github.com/",
        className: "fab fa-github",
      },
      {
        name: "skype",
        url: "http://skype.com",
        className: "fab fa-skype",
      },
    ];
    let networks = socials.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>
          </div>
          <div id="go-top">
            <a
              className="smoothscroll"
              title="Back to Top"
              href="/"
              onClick={ScrollUpButton}
            >
              <i class="fas fa-arrow-up"></i>
            </a>
            <ScrollUpButton />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
