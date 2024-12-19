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
        script.src = process.env.NEXT_PUBLIC_IG_EMBED!;
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
        className="instagram-media custom-instagram p-1 sm:p-0"
        data-instgrm-permalink={process.env.NEXT_PUBLIC_IG_PERMALINK}
        data-instgrm-version="14"
        style={{
          background: "#6E5191",
          border: "0",
          borderRadius: "1rem",
          margin: "1px",
          maxWidth: "270px",
          minWidth: "250px",
          padding: "0",
          width: "99.375%",
        }}
        >
            <a
              href={process.env.NEXT_PUBLIC_IG_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
        </blockquote>
    );
}