import React from "react";
import classes from "./Attribution.module.css";


function Attribution() {
  return (
    <div className={classes.all}>
      <div>
        <span>
          Challenge by
          <a
            className={classes.az}
            href="https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T"
            target="_blank"
            rel="noreferrer">
            &nbsp;Frontend Mentor
          </a>
          &nbsp;Coded by
          <a className={classes.az} href="https://www.frontendmentor.io/profile/Csabooo">
            &nbsp;Csaba Müller
          </a>
        </span>
      </div>
      <svg className="hidden xl:inline xl:absolute xl:top-[1900px] xl:left-[300px]" renxmlns="http://www.w3.org/2000/svg" width="94.664" height="122.518" viewBox="0 0 94.664 122.518"><path fill="none" stroke="#ACC1DE" d="M94.498 122.046C65.99 112.032 7.28 73.613.498.046" /></svg>

    </div>
  );
}

export default Attribution;
