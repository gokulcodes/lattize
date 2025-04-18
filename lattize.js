function handleNodeCalculations(parsedHtml) {
  let ui = document.getElementById("node_cnt");
  let len = parsedHtml.body.childNodes.length;
  ui.innerText = "Total number of sibilings: " + len;
}

chrome.devtools.inspectedWindow.eval(
  "document.documentElement.outerHTML",
  (result) => {
    const toNodes = (html) =>
      new DOMParser().parseFromString(html, "text/html");
    let parsedHtml = toNodes(result);
    handleNodeCalculations(parsedHtml);
  }
);

// chrome.devtools.network.onRequestFinished.addListener((request) => {
//   console.log("URL:", request.request.url);
// });
