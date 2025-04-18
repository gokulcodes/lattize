/**
 *
 * Runs scripts in the context of the selected window. It won't run on extension open.
 * Whenever a matching website is opened, the script will be injected automatically
 *
 */

console.log(document.getElementsByTagName("article"));

window.postMessage(
  {
    greeting: "hello there!",
    source: "my-devtools-extension",
  },
  "*"
);
