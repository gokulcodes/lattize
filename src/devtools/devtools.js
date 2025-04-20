chrome.devtools.panels.create(
  "Lattize",
  "logo.png",
  "index.html",
  function (panel) {
    console.log("✅ Lattize panel created", panel);
  }
);

chrome.devtools.inspectedWindow.eval(
  "getEventListeners(document.body)",
  (result) => {
    console.log(result);
    // setState(Object.keys(result).length);
  }
);

// chrome.devtools.network.onRequestFinished.addListener((request) => {
//   // let jsFiles = chrome.storage.local.get(["jsFiles"]);
//   // let cssFiles = chrome.storage.local.get(["cssFiles"]);
//   // console.log(jsFiles, cssFiles);
//   // if (request.request.url.indexOf(".js") !== -1) {
//   //   chrome.storage.local.set({ jsFiles: jsFiles + 1 });
//   // }
//   // if (request.request.url.indexOf(".css") !== -1) {
//   //   chrome.storage.local.set({ cssFiles: cssFiles + 1 });
//   // }
//   console.log("URL:", request.request.url);
// });

chrome.contextMenus.create({
  id: "lattize",
  title: "Lattize",
  contexts: ["all"], // or ['selection', 'page', 'image', etc.]
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "lattize") {
    chrome.tabs.create({ url: "https://github.com/gokulcodes/lattize" }); // or your own debug UI
  }
});

// chrome.devtools.panels.create(
//   "Lattize",
//   "logo.png",
//   "index.html",
//   function (panel) {
//     console.log("✅ Lattize panel created", panel);
//   }
// );

// chrome.scripting.executeScript({
//   target: {
//     tabId: chrome.devtools.inspectedWindow.tabId,
//   },
//   files: ["scripts/content.js"],
// });
