import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

import { useState } from "react";

import { Link } from "react-scroll";

function App() {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <Navbar nav={nav} setNav={setNav} />
      <Main nav={nav} />
      <About nav={nav} />
      <Skills nav={nav} />
      <Work nav={nav} />
      <Footer nav={nav} />
    </div>
  );
}

export default App;
