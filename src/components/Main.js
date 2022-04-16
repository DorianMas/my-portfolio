import { HiArrowNarrowRight } from "react-icons/hi";

import "./Main.css";

const Main = ({ nav }) => {
  return (
    <div className="app__main-container">
      {!nav && (
        <div className="app__main_title-container">
          <p className="app__main_title-intro">Hi, my name is</p>
          <h1>Dorian Masquelier</h1>
          <h2>I'm a Junior Frontend Developer.</h2>
          <p className="app__main-title-description">
            I'm currently looking for a 6-month internship. I work on Javascript
            with the MERN stack. You can find most of my work on my website and
            on my Github profile.
          </p>
          <div className="app__main-button">
            <button>
              View Work
              <span className="app__main-button-arrow">
                <HiArrowNarrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
