![Lattize](https://github.com/gokulcodes/lattize/blob/main/public/poster.png?raw=true 'Lattize')

# lattize
A Chrome DevTools extension that shows overall performance metrics of any website. 

## Requirements
- Total number of nodes rendered
- Total memory consumed for rendering [RAM]
- System Specs [cores, CPU, model]
- Visualizer for DOM Tree and it’s dependent CSS and API calls attached to it.
- Maximum depth of DOM tree
- Total time for HTML[DOM] and CSS[CSSOM] parsing
- Time taken to render each children in DOM Tree
- Average FPS on Repaint [Calculate Realtime]
- First Content Full Paint, Largest ContentFull paint, Blocking Time
- Simultaneous Visualization for APIs - Listen to all network made by the app during rendering.
- Detailed description of each API, time taken, is it blocking call etc?
- Tag cached response for each request for html download, images, JSON etc
- Total data consumed for downloading resources and also specify size for each downloads
- Security violations
- Accessibility recommendations
- Show how this like is view across different apps like whatsapp, facebook, linkedIn, twitter while sharing. As these SEO tags like OG:title,OG:description, OG:image etc. are used for getting the information about the HTML page. Refer [https://ogp.me/]
- Total call stack operations performed so far.
- Feed all these mistakes to q/a model and show’s results. Don’t upload any sensitive information about the website

## Chrome APIs
* These are the API used to develop Lattize extension
    - chrome.processes
    - chrome.system
    - chrome.webRequests
    - chrome.dom
    - chrome.events
    - chrome.performance
    - chrome.recorder
    - chrome.power
    - chrome.idle
    - chrome.search
    - chrome.storage
    - chrome.topSites
    - chrome.tts
    - chrome.omnibox
    - chrome.pageCapture
    - chrome.tabCapture
    - chrome.history
    - chrome.cookies
    - chrome.contextMenus
    - chrome.runtime

## Get Started
- After cloning the repo, Run the following command:
    ```
    npm install
    npm run build
    ```

- dist/ folder will be generated in the root path
    * Go to chrome, enable developer mode
    * Click on Load Unpacked
    * Point the dist/ folder in the folder picker
    * Lattize will be accessible from devtools