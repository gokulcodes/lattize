chrome.devtools.panels.create(
  "Lattize",
  "logo.png",
  "index.html",
  function (panel) {
    console.log("✅ Lattize panel created", panel);
  }
);

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
