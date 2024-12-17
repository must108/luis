"use client";

import { useEffect } from 'react';

declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            }
        }
    }
}

export default function InstagramEmbed() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        
        script.onload = () => {
            if (window.instgrm?.Embeds) {
                window.instgrm.Embeds.process();
            }
        };

        script.onerror = () => {
            console.error("Error on load.");
        }

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <blockquote
        className="instagram-media custom-instagram"
        data-instgrm-permalink="https://www.instagram.com/poke.d.bag/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#6E5191",
          border: "0",
          borderRadius: "10px",
          margin: "1px",
          maxWidth: "270px",
          minWidth: "263px",
          padding: "0",
          width: "99.375%",
        }}
        >
            <a
              href="https://www.instagram.com/poke.d.bag/?utm_source=ig_embed&amp;utm_campaign=loading"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
        </blockquote>
    );
}