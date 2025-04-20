// function handleNodeCalculations(parsedHtml) {
//   let ui = document.getElementById("node_cnt");
//   let len = parsedHtml.body.childNodes.length;
//   ui.innerText = "Total number of sibilings: " + len;
// }

// chrome.devtools.inspectedWindow.eval(
//   "document.documentElement.outerHTML",
//   (result) => {
//     const toNodes = (html) =>
//       new DOMParser().parseFromString(html, "text/html");
//     let parsedHtml = toNodes(result);
//     handleNodeCalculations(parsedHtml);
//   }
// );

console.log("DOM fully loaded and parsed!");
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed!");
  // your logic here
});

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
console.log(chrome.system.cpu.getInfo());
console.log(chrome.system.memory.getInfo());
