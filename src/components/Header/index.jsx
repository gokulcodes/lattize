import { useContext } from "react";
import lattizeContext from "../../controller/lattizeContext";

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
  {
    id: 5,
    title: "Security",
  },
];

export default function Header() {
  const { activeTab, dispatch } = useContext(lattizeContext);

  function handleTabChange(index) {
    dispatch({ type: "changeActiveTab", payload: index });
  }

  return (
    <header className="flex font-sans flex-row text-white items-center gap-2 m-4 w-full">
      <a href="https://github.com/gokulcodes/lattize">
        <img
          className="w-10 h-10 hover:scale-105 cursor-pointer"
          src="/logo.png"
          alt="lattize"
        />
      </a>
      <div className="flex gap-2">
        {tabs.map((tab, index) => {
          return (
            <button
              onClick={() => handleTabChange(index)}
              className={`flex border border-white/5 text-center cursor-pointer gap-2 px-6 py-2 rounded-md hover:brightness-150 ${
                activeTab === index ? "brightness-120" : "brightness-90"
              } bg-[#2b2b2b]`}
            >
              <span className="text-center text-xs">{tab.title}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
