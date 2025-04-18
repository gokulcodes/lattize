chrome.devtools.panels.create(
  "Lattize",
  "devtools/logo.png",
  "lattize.html",
  function (panel) {
    console.log("✅ Lattize panel created", panel);
  }
);

chrome.scripting.executeScript({
  target: {
    tabId: chrome.devtools.inspectedWindow.tabId,
  },
  files: ["scripts/content.js"],
});
