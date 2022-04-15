import Deliveroo from "../assets/deliveroo-screen.PNG";
import Marvel from "../assets/marvel-screen.PNG";
import Airbnb from "../assets/airbnb-screen.PNG";
import Vinted from "../assets/vinted-screen.PNG";

import "./Work.css";

const Work = ({ nav }) => {
  return (
    <div className="app__work-container">
      {!nav && (
        <>
          <div className="app__work-title_container">
            <h2>Work</h2>
            <p>// Check out my recent work</p>
          </div>
          <div className="app__work-projects_container">
            <div
              className="app__work-project_item"
              style={{ backgroundImage: `url(${Marvel})` }}
            >
              {/**Hover Effect */}

              <div className="app__work-project_item-buttons">
                <span>Fullstack React JS Project</span>
                <div>
                  <a
                    href="https://marvel-encyclopedia-dm.netlify.app/"
                    target="_blank"
                  >
                    <button>Demo</button>
                  </a>
                  <a
                    href="https://github.com/DorianMas/marvel-frontend"
                    target="_blank"
                  >
                    <button>Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="app__work-project_item"
              style={{ backgroundImage: `url(${Vinted})` }}
            >
              {/**Hover Effect */}

              <div className="app__work-project_item-buttons">
                <span>Fullstack React JS Project (non responsive for now)</span>
                <div>
                  <a href="https://vinted-frontend-dm.netlify.app/">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/DorianMas/vinted-frontend">
                    <button>Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="app__work-project_item"
              style={{ backgroundImage: `url(${Airbnb})` }}
            >
              {/**Hover Effect */}

              <div className="app__work-project_item-buttons">
                <span>Front React Native JS app Project</span>
                <a href="https://github.com/DorianMas/airbnb-app">
                  <button>Code</button>
                </a>
              </div>
            </div>
            <div
              className="app__work-project_item"
              style={{ backgroundImage: `url(${Deliveroo})` }}
            >
              {/**Hover Effect */}

              <div className="app__work-project_item-buttons">
                <span>Front React JS Exercise</span>
                <div>
                  <a
                    href="https://deliveroo-cart-dm.netlify.app/"
                    target="_blank"
                  >
                    <button>Demo</button>
                  </a>
                  <a
                    href="https://github.com/DorianMas/deliveroo-frontend"
                    target="_blank"
                  >
                    <button>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Work;
