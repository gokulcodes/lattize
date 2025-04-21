import React from "react";

function Whatsapp({ preview }) {
  if (!preview || !Object.keys(preview)?.length) {
    return;
  }
  console.log(preview);
  return (
    <a
      href={preview.ogUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-3xl transition-all overflow-hidden"
    >
      <div className="flex flex-col bg-[#265B4C]">
        {preview.ogImage && (
          <img
            src={preview.ogImage}
            alt="Preview"
            className=" rounded-3xl m-1 bg-[#1D453A] h-48 object-cover "
          />
        )}
        <div className="p-4">
          <h2 className="text-base font-semibold text-white">
            {preview.ogTitle || preview.title}
          </h2>
          {preview.description && (
            <p className="text-xs mt-2 text-white/80 mt-1 line-clamp-2">
              {preview.description}
            </p>
          )}
          <span className="text-xs text-blue-500 mt-2 block">
            {preview?.ogUrl}
          </span>
        </div>
      </div>
    </a>
  );
}

export default Whatsapp;
