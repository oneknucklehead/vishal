import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV_SECTIONS } from "../../data/navSections";

// Maps nav section page keys to actual routes
const PAGE_TO_PATH = {
    home: "/",
    about: "/about",
    careers: "/careers",
    contact: "/contact",
};

export function useNavLogic(onClose) {
    const navigate = useNavigate();
    const location = useLocation();

    // Derive the current page key from the URL path
    const currentPage = Object.entries(PAGE_TO_PATH).find(
        ([, path]) => path === location.pathname,
    )?.[0] ?? "home";

    const getDefault = (pg) => {
        const m = NAV_SECTIONS.find((s) => s.page === pg && s.sub.length > 0);
        return m ? m.id : null;
    };

    const [openId, setOpenId] = useState(() => getDefault(currentPage));

    useEffect(() => {
        setOpenId(getDefault(currentPage));
    }, [currentPage]);

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    const goTo = (pageKey) => {
        navigate(PAGE_TO_PATH[pageKey] ?? "/");
        window.scrollTo(0, 0);
    };

    const scrollTo = (targetPageKey, sectionId) => {
        onClose?.();
        const targetPath = PAGE_TO_PATH[targetPageKey] ?? "/";
        if (location.pathname !== targetPath) {
            navigate(targetPath);
            setTimeout(() => {
                document
                    .getElementById(sectionId)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 380);
        } else {
            document
                .getElementById(sectionId)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return { currentPage, openId, toggle, goTo, scrollTo };
}
