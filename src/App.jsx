// import lattizeLogo from "/logo.png";
// import "./App.css";
import { useReducer } from "react";
import Header from "./components/Header";
import LattizeContext, {
  initialState,
  reducer,
} from "./controller/lattizeContext";
import RenderView from "./components/RenderView";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LattizeContext.Provider value={{ ...state, dispatch }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <Header />
      <RenderView />
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={lattizeLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Lattize</h1> */}
    </LattizeContext.Provider>
  );
}

export default App;
