import { Fragment, useEffect, useState } from "react";

/**
 *
 * @returns
 * columns - url, method, httpVersion, cache, priority, time, size
 *
 */

export default function Network() {
  const [allRequest, setAllRequest] = useState([]);
  const cols = [
    "URL",
    "Method",
    "HTTP Version",
    "Cache",
    "Priority",
    "Time",
    "Size",
  ];
  useEffect(() => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (arrayOfTabs) {
        chrome.tabs.reload(arrayOfTabs[0].id);
      }
    );
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      setAllRequest((prev) =>
        Array.from(
          new Set([
            ...prev,
            {
              url: request.request.url,
              method: request.request.method,
              httpVersion: request.request.httpVersion,
              cache: request._fromCache,
              priority: request._priority,
              time: request.time.toFixed(2),
              size: request.request.bodySize,
            },
          ])
        )
      );
    });
  }, []);
  return (
    <div className="flex items-center justify-center ml-5">
      <div className="flex flex-col items-start w-full h-full text-white">
        <table>
          <tr>
            {cols.map((col) => (
              <th className="p-4 border border-white/10">{col}</th>
            ))}
          </tr>
          {allRequest.map((req) => (
            <tr>
              <td className="p-4 border border-white/10 truncate text-ellipsis ">
                <p className="w-96 truncate text-ellipsis">{req.url}</p>
              </td>
              <td className="p-4 border border-white/10 truncate text-ellipsis ">
                {req.method}
              </td>
              <td className="p-4 border border-white/10 truncate text-ellipsis ">
                {req.httpVersion}
              </td>
              <td className="p-4 border border-white/10 truncate text-ellipsis ">
                {req.cache}
              </td>
              <td className="p-4 border border-white/10 truncate text-ellipsis ">
                {req.priority}
              </td>
              <td className="p-4 border border-white/10 truncate text-ellipsis ">
                {req.time}
              </td>
              <td className="p-4 border border-white/10 truncate text-ellipsis ">
                {req.size}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
