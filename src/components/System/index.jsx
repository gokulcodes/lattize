import { useState } from "react";

function MetricCards({ title, func, suffix, initialNumber }) {
  const [number, setNumber] = useState(initialNumber);
  func(setNumber);
  function handleClick() {
    chrome.devtools.inspectedWindow.eval(
      'inspect(document.querySelector(".devsite-wrapper"))',
      {
        useContentScriptContext: true,
      }
    );
  }
  return (
    <div
      onClick={handleClick}
      className="flex gap-4 min-w-48 rounded-2xl text-white bg-white/5 p-4 flex-col items-start justify-center"
    >
      <p className="text-xs opacity-60 break-words ">{title}</p>
      <p className="text-2xl">{number + " " + suffix}</p>
    </div>
  );
}

export default function System() {
  async function updateCores(setState) {
    const system = await chrome.system.cpu.getInfo();
    console.log(system);
    setState(system.numOfProcessors);
  }
  async function updateArch(setState) {
    const system = await chrome.system.cpu.getInfo();
    console.log(system.archName);
    setState(system.archName);
  }
  async function updateProcessorName(setState) {
    const system = await chrome.system.cpu.getInfo();
    console.log(system.modelName);
    setState(system.modelName);
  }
  async function updateTotalMemory(setState) {
    const memory = await chrome.system.memory.getInfo();
    const totalCap = memory.capacity;
    setState((totalCap / 1024 ** 3).toFixed(2));
  }
  async function updateMemoryInUse(setState) {
    const memory = await chrome.system.memory.getInfo();
    const totalCap = memory.capacity;
    const availableCapacity = memory.availableCapacity;
    let consumed = totalCap - availableCapacity;
    setState((consumed / 1024 ** 3).toFixed(2));
  }
  //   async function updateTotalStorage(setState) {
  //     setState(0);
  //     // const memory = await chrome.system.storage.getInfo();
  //     // console.log(memory);
  //     // const totalCap = memory.capacity;
  //     // setState((totalCap / 1024 ** 3).toFixed(2));
  //   }
  async function updateMemoryConsumed(setState) {
    const memory = performance.memory;
    const totalCap = memory.usedJSHeapSize;
    console.log((totalCap / (1024 * 1024)).toFixed(2));
    // setState((totalCap / (1024 * 1024)).toFixed(2));
  }
  const stats = [
    {
      id: 1,
      title: "Total Cores",
      number: 0,
      suffix: "Cores",
      func: updateCores,
    },
    // {
    //   id: 2,
    //   title: "Average FPS",
    //   number: 0,
    //   func: updateTotalNodes,
    // },
    {
      id: 3,
      title: "Total Memory",
      number: 0,
      suffix: "GB",
      func: updateTotalMemory,
    },
    {
      id: 4,
      title: "Processor",
      number: 0,
      suffix: "",
      func: updateProcessorName,
    },
    {
      id: 5,
      title: "Memory in Use",
      number: 0,
      suffix: "GB",
      func: updateMemoryInUse,
    },
    {
      id: 6,
      title: "CPU Architecture",
      number: 0,
      suffix: "",
      func: updateArch,
    },
    // {
    //   id: 7,
    //   title: "Total Processes",
    //   number: 0,
    //   suffix: "",
    //   func: () => {},
    // },
    // // {
    // //   id: 8,
    // //   title: "Total Storage",
    // //   number: 0,
    // //   suffix: "GB",
    // //   func: updateTotalStorage,
    // // },
    // {
    //   id: 9,
    //   title: "JS Heap usage",
    //   number: 0,
    //   suffix: "MB",
    //   func: updateMemoryConsumed,
    // },
    // {
    //   id: 9,
    //   title: "Total Event Listeners",
    //   number: 0,
    //   func: updateTotalEventListeners,
    // },
  ];

  return (
    <div className="m-4 font-sans flex flex-row gap-4 flex-wrap w-full h-full">
      {stats.map((stat) => (
        <MetricCards
          title={stat.title}
          func={stat.func}
          suffix={stat.suffix}
          initialNumber={stat.number}
        />
      ))}
    </div>
  );
}
