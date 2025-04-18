import { useState } from "react";
import lattizeLogo from "/logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={lattizeLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Lattize</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
