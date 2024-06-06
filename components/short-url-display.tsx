// short-url-display.tsx
"use client";

import React from "react";

interface ShortUrlDisplayProps {
  shortUrl: string;
}

const ShortUrlDisplay: React.FC<ShortUrlDisplayProps> = ({ shortUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl).then(
      () => {
        alert("URL copiada para a área de transferência!");
      },
      () => {
        alert("Falha ao copiar URL.");
      }
    );
  };

  return (
    <div className="flex items-center justify-center p-2">
      <p className="border-2 border-cornflower-blue rounded-l-full py-2 px-4">
        <a href={shortUrl} target="_blank" rel="noopener noreferrer">
          {shortUrl}
        </a>
      </p>
      <button className="bg-cornflower-blue hover:bg-cornflower-blue-500 h-11 rounded-r-full py-2 px-3 flex items-center" onClick={copyToClipboard}>
        <svg
          id="Layer_1"
          height="24"
          className="fill-persian-indigo"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m16.86 5h-4.86v-4.984zm-6.86 2v-7h-5a3 3 0 0 0 -3 3v16h15v-12zm9 .01v14.028h-12v2.962h15v-14z" />
        </svg>
      </button>
    </div>
  );
};

export default ShortUrlDisplay;
