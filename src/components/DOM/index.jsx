import { useState } from "react";
function MetricCards({ title, func, initialNumber }) {
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
      <p className="text-2xl">{Math.max(number, initialNumber)}</p>
    </div>
  );
}

export default function DOM() {
  const [jsChunks, setJSChunks] = useState(new Set([]));
  const [cssChunks, setCSSChunks] = useState(new Set([]));
  const [htmlParsingTime, setHtmlParsingTime] = useState(0);
  const [cssParsingTime, setCssParsingTime] = useState(0);
  // const [tree, setTree] = useState([]);
  const stats = [
    {
      id: 1,
      title: "Total no of DOM nodes",
      number: 0,
      func: updateTotalNodes,
    },
    // {
    //   id: 2,
    //   title: "Average FPS",
    //   number: 0,
    //   func: updateTotalNodes,
    // },
    {
      id: 3,
      title: "Maximum depth of DOM tree",
      number: 0,
      func: updateMaxDepth,
    },
    // {
    //   id: 4,
    //   title: "Tree Visualizer",
    //   number: 0,
    //   func: updateTotalNodes,
    // },
    {
      id: 5,
      title: "HTML Parsing",
      number: htmlParsingTime,
      func: updateHTMLParsing,
    },
    {
      id: 6,
      title: "CSS Parsing",
      number: cssParsingTime,
      func: updateCssParsing,
    },
    {
      id: 7,
      title: "JS Chunks Downloaded",
      number: jsChunks.size,
      func: () => {},
    },
    {
      id: 8,
      title: "CSS Chunks Downloaded",
      number: cssChunks.size,
      func: () => {},
    },
    // {
    //   id: 9,
    //   title: "Total Event Listeners",
    //   number: 0,
    //   func: updateTotalEventListeners,
    // },
  ];

  function updateTotalNodes(setState) {
    function handleTree(parsedHtml) {
      if (parsedHtml?.childNodes.length == 0) {
        return [];
      }

      let nodes = [];
      for (let child of parsedHtml.childNodes) {
        nodes.push([{ node: child, children: handleTree(child) }]);
      }

      return nodes;
    }

    function handleNodeCalculations(parsedHtml) {
      if (parsedHtml?.childNodes.length == 0) {
        return 0;
      }

      let nodes = 0;
      for (let child of parsedHtml.childNodes) {
        nodes += 1 + handleNodeCalculations(child);
      }

      return nodes;
    }

    chrome.devtools.inspectedWindow.eval(
      "document.documentElement.outerHTML",
      (result) => {
        const toNodes = (html) =>
          new DOMParser().parseFromString(html, "text/html");
        let nodes = handleNodeCalculations(toNodes(result).body);
        let treeList = handleTree(toNodes(result));
        console.log(treeList);
        setState(nodes);
        // setTree(treeList);
      }
    );
  }

  function updateMaxDepth(setState) {
    function handleNodeCalculations(parsedHtml) {
      if (parsedHtml?.childNodes.length == 0) {
        return 0;
      }

      let nodes = 0;
      for (let child of parsedHtml.childNodes) {
        nodes = Math.max(nodes, 1 + handleNodeCalculations(child));
      }

      return nodes;
    }

    chrome.devtools.inspectedWindow.eval(
      "document.documentElement.outerHTML",
      (result) => {
        const toNodes = (html) =>
          new DOMParser().parseFromString(html, "text/html");
        let nodes = handleNodeCalculations(toNodes(result).body);
        setState(nodes);
      }
    );
  }

  // function updateTotalEventListeners() {
  //   // setState(0);
  //   // chrome.devtools.inspectedWindow.eval(
  //   //   "getEventListeners(document.body)",
  //   //   (result) => {
  //   //     console.log(result);
  //   //     setState(Object.keys(result).length);
  //   //   }
  //   // );
  // }

  chrome.devtools.network.onRequestFinished.addListener((request) => {
    // let jsFiles = chrome.storage.local.get(["jsFiles"]);
    // let cssFiles = chrome.storage.local.get(["cssFiles"]);
    // console.log("jsFiles", jsFiles, cssFiles);
    if (request.request.url.indexOf(".js") !== -1) {
      updateJSFileDownload(request.request.url);
      // urls.add(request.request.url);
      // setState((prev) => prev + 1);
      // chrome.storage.local.set({ jsFiles: jsFiles + 1 });
      // console.log("URL:", request.request.url);
    }
    // setState(urls);
    if (request.request.url.indexOf(".css") !== -1) {
      updateCSSFileDownload(request.request.url);
      // chrome.storage.local.set({ cssFiles: cssFiles + 1 });
      // console.log("URL:", request.request.url);
    }
  });
  function updateJSFileDownload(url) {
    // console.log(url);
    setJSChunks((prev) => new Set([...prev, url]));
  }

  function updateCSSFileDownload(url) {
    // console.log(url);
    setCSSChunks((prev) => new Set([...prev, url]));
  }

  function updateHTMLParsing() {
    const timings = performance.getEntriesByType("navigation");
    if (!timings.length) {
      return;
    }
    let time = timings[0];
    const htmlParsing = time.domInteractive - time.startTime;
    setHtmlParsingTime(htmlParsing.toFixed(2));
    // setState(time.domInteractive - time.startTime);
    // console.log(performance.getEntriesByType("navigation"));
  }
  function updateCssParsing() {
    const timings = performance.getEntriesByType("navigation");
    if (!timings.length) {
      return;
    }
    let time = timings[0];
    const cssParsing = time.domContentLoadedEventEnd - time.domInteractive;
    setCssParsingTime(cssParsing.toFixed(2));
    // setState(time.domInteractive - time.startTime);
    // console.log(performance.getEntriesByType("navigation"));
  }

  return (
    <div className="m-4 font-sans flex flex-row gap-4 flex-wrap w-full h-full">
      {stats.map((stat) => (
        <MetricCards
          title={stat.title}
          func={stat.func}
          initialNumber={stat.number}
        />
      ))}
      <div className="flex gap-4 w-11/12 h-full rounded-2xl text-white bg-white/5 p-4 flex-col items-start justify-center">
        <p>Tree Visualizer</p>
      </div>
    </div>
  );
}
