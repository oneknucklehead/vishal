import { useState, useEffect } from "react";

export function useHashRouter() {
    const get = () => window.location.hash.replace("#", "") || "home";
    const [page, setPage] = useState(get);

    useEffect(() => {
        const h = () => setPage(get());
        window.addEventListener("hashchange", h);
        return () => window.removeEventListener("hashchange", h);
    }, []);

    const navigate = (p) => {
        window.location.hash = p;
        window.scrollTo(0, 0);
    };

    return { page, navigate };
}
