"use client";

import { useEffect } from "react";

interface TikTokWindow extends Window {
    tiktokEmbed?: {
        process: () => void;
    };
}

export default function TikTokEmbed() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;

        script.onload = () => {
            const tiktokWindow = window as TikTokWindow;
            if (tiktokWindow.tiktokEmbed) {
                tiktokWindow.tiktokEmbed.process();
            }  
        };

        script.onerror = () => {
            const fallbackScript = document.createElement("script");
            fallbackScript.src = "https://iframely.net/files/tiktok-embed.js";
            fallbackScript.async = true;
            document.body.appendChild(fallbackScript);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <blockquote
        className="tiktok-embed p-0"
        cite="https://www.tiktok.com/@poke.d.bag"
        data-unique-id="poke.d.bag"
        data-embed-from="oembed"
        data-embed-type="creator"
        style={{ 
            maxWidth: "380px", 
            minWidth: "288px",
            padding: "0",
            margin: "0",
            border: "none",
            boxSizing: "border-box",
            borderRadius: "10px",
        }}
      >
        <section>
          <a
            target="_blank"
            href="https://www.tiktok.com/@poke.d.bag?refer=creator_embed"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
          </a>
        </section>
      </blockquote>
    );
}