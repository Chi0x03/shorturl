// urlform.tsx
"use client";

import React, { useState } from "react";
import { createShortUrl } from "@/lib/db";
import { createRandomString } from "@/lib/create-random-string";
import ShortUrlDisplay from "@/components/short-url-display";
import GithubLink from "@/components/github-link";

export default function UrlForm() {
  const [shortUrl, setShortUrl] = useState("");
  const [spinner, setSpinner] = useState(false);

  async function createUrl(event: React.FormEvent<HTMLFormElement>) {
    setSpinner(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const longUrl = formData.get("url") as string;

    if (!longUrl) {
      alert("Por favor, insira uma URL.");
      return;
    }

    const short = createRandomString(4);
    const success = await createShortUrl(short, longUrl);

    if (success) {
      const domain = window.origin;
      setShortUrl(`${domain}/${short}`);
      setSpinner(false);
    } else {
      alert("Falha ao criar URL curta.");
      setSpinner(false);
    }
  }

  return (
    <div>
      <form
        className="flex items-center justify-center pt-5 pb-3"
        method="post"
        onSubmit={createUrl}
      >
        <input
          className="border-2 w-64 bg-ghost-white border-cornflower-blue rounded-l-full py-2 px-4 focus:outline-none focus:ring-inset focus:border-cornflower-blue-500 h-11"
          type="url"
          name="url"
          placeholder="Ex: https://youtube.com"
          required
        />
        <button
          type="submit"
          className="bg-cornflower-blue hover:bg-cornflower-blue-500 text-white font-bold py-2 px-4 pr-5 rounded-r-full h-11 flex items-center"
        >
          {spinner ? (
            <svg
              className="fill-persian-indigo animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 512.056 512.056"
              width="26"
              height="26"
            >
              <g>
                <path d="M268.437,512.055c96.436,0.246,184.764-53.923,228.267-139.989c5.035-10.652,0.482-23.369-10.17-28.404   c-10.204-4.824-22.4-0.864-27.825,9.034c-53.371,105.039-181.788,146.925-286.827,93.553   C66.842,392.878,24.957,264.461,78.328,159.421S260.116,12.497,365.155,65.868c40.469,20.563,73.324,53.498,93.788,94.017   c4.979,10.678,17.671,15.299,28.35,10.32s15.299-17.671,10.32-28.35c-0.185-0.396-0.381-0.786-0.59-1.17   C433.306,14.471,279.337-36.191,153.124,27.526s-176.876,217.687-113.159,343.9C83.494,457.65,171.848,512.034,268.437,512.055z" />
              </g>
            </svg>
          ) : (
            <svg
              className="fill-persian-indigo h-[26px] w-[25.62px] rotate-[-160deg]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          )}
        </button>
      </form>
      {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
      <GithubLink />
    </div>
  );
}
