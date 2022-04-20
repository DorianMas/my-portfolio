import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <Navbar nav={nav} setNav={setNav} />
      <Main nav={nav} setNav={setNav} />
      <About nav={nav} />
      <Skills nav={nav} />
      <Work nav={nav} />
      <Footer nav={nav} />
    </div>
  );
}

export default App;
