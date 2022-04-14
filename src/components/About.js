import "./About.css";

const About = ({ nav }) => {
  return (
    <div className="app__about-container">
      {!nav && (
        <div className="app__about-subcontainer">
          <div className="app__about-subcontainer_grid">
            <div className="app__about-subcontainer_grid-title1">
              <p>About</p>
            </div>
            <div className="app__about-subcontainer_grid-description1">
              <p>
                Hi. I'm Dorian, nice to meet you. Please take a look around.
              </p>
            </div>
          </div>
          <div className="app__about-subcontainer_grid">
            <div className="app__about-subcontainer_grid-title2">
              <p></p>
            </div>
            <div className="app__about-subcontainer_grid-description2">
              <p>
                After five years spent in communication agencies as Project
                Manager, 2022 marks a turning point in my career with a
                retraining in web development. I have just completed the
                Reacteur bootcamp during which I have worked on several frontend
                and fullstack projects. You can find most of work on my website
                and on my Github profile.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
