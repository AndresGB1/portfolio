import * as React from "react";
import "./Main.css";

export default function BannerSkills() {
  return (
    <div className="banner-skills">
      <div className="container pad">
        <h1 className="primary-text title">Skills</h1>
        <div className="row pad">
          <div className="col-sm align">
            <img
              className="img-responsive"
              src="../../assets/skills/computador.png"
              alt="triangle with all three sides equal"
              height="323"
              width="406"
            />
          </div>
          <div className="col-sm align">
            <p className="secondary-text p2 text-skills">
            I like to develop back-end projects. I can help you develop API's, logic programming.
            <br/>
            <br/>
The icons shown are technologies in which i work continuously, some technologies escape me, however I am always learning something new!
            </p>
          </div>
        </div>

        <div className="row pad">
          <div className="col-sm align">
            <p className="secondary-text p2 text-skills">
              For the front-end, I know different technologies and I have
              developed different projects, however it is not what I am most
              passionate about, despite this web page I built it from scratch{" "}
            </p>
          </div>
          <div className="col-sm align">
            <img
              className="img-responsive"
              src="../../assets/skills/front.png"
              alt="triangle with all three sides equal"
              height="323"
              width="406"
            />
          </div>
        </div>
        <div className="row pad">
          <div className="col-sm align">
            <img
              src="../../assets/skills/other.svg"
              alt="triangle with all three sides equal"
              height="323"
              width="406"
            />
          </div>
          <div className="col-sm align">
            <p className="secondary-text p2 text-skills">
              I am constantly learning about the crypto world I have created
              some bots and I know part of the linux ecosystem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
