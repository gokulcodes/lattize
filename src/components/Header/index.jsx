import lattizeLogo from "/logo.png";
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
  return (
    <header className="flex gap-2 m-4 w-full">
      <img className="w-10 h-10" src={lattizeLogo} alt="lattize" />
      <div className="flex gap-4">
        {tabs.map((tab) => {
          return (
            <div className="flex text-center cursor-pointer gap-2 px-10 py-0 rounded-lg hover:brightness-150 bg-[#2b2b2b]">
              <span className="text-center text-sm">{tab.title}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
}
