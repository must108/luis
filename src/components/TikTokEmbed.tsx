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
        script.src = process.env.NEXT_PUBLIC_TIKTOK_EMBED!;
        script.async = true;

        script.onload = () => {
            const tiktokWindow = window as TikTokWindow;
            if (tiktokWindow.tiktokEmbed) {
                tiktokWindow.tiktokEmbed.process();
            }  
        };

        script.onerror = () => {
            const fallbackScript = document.createElement("script");
            fallbackScript.src = process.env.NEXT_PUBLIC_TIKTOK_FALLBACK!;
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
        className="tiktok-embed p-0 overflow-hidden"
        cite={process.env.NEXT_PUBLIC_TIKTOK_CITE}
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
            borderRadius: "1rem",
        }}
      >
        <section>
          <a
            target="_blank"
            href={process.env.NEXT_PUBLIC_TIKTOK_HREF}
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline overflow-hidden"
          >
          </a>
        </section>
      </blockquote>
    );
}