import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Mongo from "../assets/mongo.png";
import Heroku from "../assets/heroku.png";
import Github from "../assets/github.png";

import "./Skills.css";

const Skills = ({ nav }) => {
  return (
    <>
      {!nav && (
        <div className="app__skills-container">
          <div className="app__skills-title_container">
            <h2 className="app__skills-title">Experience</h2>
            <p>// These are the technologies I learn and work with</p>
          </div>
          <div className="app__skills-technos">
            <div className="app__skills-technos_logo">
              <img src={HTML} alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="app__skills-technos_logo">
              <img src={CSS} alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="app__skills-technos_logo">
              <img src={Javascript} alt="Javascript" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="app__skills-technos_logo">
              <img src={ReactImg} alt="React" />
              <p>REACT</p>
            </div>
            <div className="app__skills-technos_logo">
              <img src={Mongo} alt="MongoDb" />
              <p>MONGODB</p>
            </div>
            <div className="app__skills-technos_logo">
              <img src={Github} alt="Github" />
              <p>GITHUB</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
