import lattizeLogo from "/logo.png";
import "./App.css";

const tabs = [
  {
    id: 1,
    title: "DOM",
  },
  {
    id: 2,
    title: "Network",
  },
  {
    id: 3,
    title: "System",
  },
  {
    id: 4,
    title: "SEO",
  },
];

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={lattizeLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Lattize</h1>
      <div style={{ display: "flex", gap: 10 }}>
        {tabs.map((tab) => {
          return <div>{tab.title}</div>;
        })}
      </div>
    </>
  );
}

export default App;
