import { useEffect, useState } from "react";
import Whatsapp from "./Whatsapp";
import LinkedInPreview from "./LinkedIn";
import Twitter from "./Twitter";

/**
 *
 * @returns
 * SEO Tags - Title, Description, OG:site_name, OG:type, OG:title, OG:url, OG:locale, og:image
 */
export default function SEO() {
  const [tags, setTags] = useState({});
  function getSEOTags(html) {
    let head = html.head;
    setTags({
      title: html.title,
      description: head.querySelector('[name="Description"]')?.content,
      ogSiteName: head.querySelector('[property="og:site_name"]')?.content,
      ogType: head.querySelector('[property="og:type"]')?.content,
      ogTitle: head.querySelector('[property="og:title"]')?.content,
      ogUrl: head.querySelector('[property="og:url"]')?.content,
      ogLocale: head.querySelector('[property="og:locale"]')?.content,
      ogImage: head.querySelector('[property="og:image"]')?.content,
      keywords: head.querySelector('[name="Keywords"]')?.content?.split(", "),
    });
    // console.log(html, html.head);
  }
  useEffect(() => {
    chrome.devtools.inspectedWindow.eval(
      "document.documentElement.outerHTML",
      (result) => {
        const toNodes = (html) =>
          new DOMParser().parseFromString(html, "text/html");
        getSEOTags(toNodes(result));
      }
    );
  }, []);
  console.log(tags);
  return (
    <div className="w-full">
      <div className="flex gap-4 flex-col items-center justify-center m-4">
        <div className="flex flex-col w-full gap-2 ">
          <h2 className="text-white text-xs font-normal">Whatsapp</h2>
          <div className="w-full p-4 rounded-2xl bg-white/5">
            <Whatsapp preview={tags} />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2 ">
          <h2 className="text-white text-xs font-normal">LinkedIn</h2>
          <div className="w-full p-4 rounded-2xl bg-white/5">
            <LinkedInPreview preview={tags} />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2 ">
          <h2 className="text-white text-xs font-normal">Twitter</h2>
          <div className="w-full p-4 rounded-2xl bg-white/5">
            <Twitter preview={tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
