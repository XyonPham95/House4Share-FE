import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <div className="row xs-2 border">
      <div className="col-2 col-sm-4 ">
        <div className="col ">
          <h5>Contact</h5>
          <p>house4share@gmail.com - 18009876</p>
        </div>
        <div className="row  border ">
          <h5>Follow us on</h5>
          <div className="row ">
            <p>
              <span>
                <FaFacebook />
              </span>
            </p>
            <p>
              <span>
                <FaGithub />
              </span>
            </p>
            <p>
              <span>
                <FaTwitter />
              </span>
            </p>
            <p>
              <span>
                <FaInstagram />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
