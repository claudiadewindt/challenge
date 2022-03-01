import React from "react";
import "../styles/Style.css";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import LetterL from "../assets/images/l.png";
//import LetterA from "../assets/images/a.png";
import LetterV from "../assets/images/v.png";
import LetterE from "../assets/images/e.png";
//import Dot from "../assets/images/dot.png";

const BigText = () => {
  return (
    <div className="big-text">
      <div className="big-text-wrapper">
        <div className="big-text-top">
          <img src={LetterL} className="letter-l" alt="letter l" />
          <img src={LetterV} className="letter-v" alt="letter v" />
          <img src={LetterE} className="letter-e" alt="letter e" />

          <Heart className="heart" />
          <img src={LetterV} className="letter-v" alt="letter v" />
          <img src={LetterE} className="letter-e" alt="letter e" />
        </div>
      </div>
    </div>
  );
};

export default BigText;
