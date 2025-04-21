import React from "react";

function Twitter({ preview }) {
  return (
    <a
      href={preview.ogUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-md rounded-xl border border-gray-300/20 hover:shadow-md transition-all overflow-hidden text-white"
    >
      <div className="flex flex-col">
        {preview.ogImage && (
          <img
            src={preview.ogImage}
            alt="Preview"
            className="w-full h-48 object-cover "
          />
        )}
        <div className="p-4 flex flex-col bg-white/10 justify-between">
          <div>
            <h2 className="text-base font-medium text-white">
              {preview.ogTitle}
            </h2>
            <p className="text-sm text-white/60 mt-1 line-clamp-2">
              {preview.description}
            </p>
          </div>
          <span className="text-xs text-white/40 mt-3 block">
            {preview.ogUrl}
          </span>
        </div>
      </div>
    </a>
  );
}

export default Twitter;
