import { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle?: { push: (args?: unknown) => void };
    }
}

export default function AdComponent() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.adsbygoogle) {
            window.adsbygoogle.push({});
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
            data-ad-slot=""
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};