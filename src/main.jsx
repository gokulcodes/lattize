import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// chrome.devtools.inspectedWindow.eval(
//   "document.documentElement.outerHTML",
//   (result) => {
//     const toNodes = (html) =>
//       new DOMParser().parseFromString(html, "text/html");
//     console.log(toNodes(result));
//     // let parsedHtml = toNodes(result);
//     // handleNodeCalculations(parsedHtml);
//   }
// );

// document.addEventListener("DOMContentLoaded", (Event) => {
//   console.log(Event, "asdfasdfasdf");
// });

// console.log("noscript", chrome.system.cpu.getInfo());
// console.log("noscript", chrome.system.memory.getInfo());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
