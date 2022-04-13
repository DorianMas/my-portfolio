import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div
      style={{
        boxSizing: "border-box",
      }}
    >
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
