import React from "react";

function LinkedInPreview({ preview }) {
  //   const preview = {
  //     title: "Introducing the Chrome Extension APIs",
  //     description:
  //       "Explore how to use Chrome’s extension APIs to build powerful browser tools.",
  //     url: "https://developer.chrome.com/docs/extensions/",
  //     image: "https://developer.chrome.com/images/social/chrome-extensions.png",
  //   };

  return (
    <a
      href={preview.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-xl p-2 border border-gray-300/20 rounded-lg overflow-hidden bg-transparent text-white shadow hover:shadow-md transition"
    >
      <div className="flex flex-col md:flex-row">
        {preview.ogImage && (
          <img
            src={preview.ogImage}
            alt="Link preview"
            className="w-full md:w-40 h-28 object-cover bg-gray-100 rounded-lg overflow-hidden"
          />
        )}
        <div className="p-4 flex-1">
          <p className="text-xs  mb-1">{preview.url}</p>
          <h2 className="text-base font-semibold  line-clamp-2">
            {preview.title}
          </h2>
          <p className="text-sm  mt-1 text-white/60 line-clamp-2">
            {preview.description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default LinkedInPreview;
