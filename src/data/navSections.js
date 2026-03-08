export const NAV_SECTIONS = [
    { id: "home", label: "Home", page: "home", sub: [] },
    {
        id: "about",
        label: "Who We Are",
        page: "about",
        sub: [
            { label: "Our Leadership", sectionId: "about-leadership" },

            { label: "Our Culture", sectionId: "about-culture" },
            { label: "Core Principles", sectionId: "about-principles" },
            { label: "Milestones", sectionId: "about-milestones" },
        ],
    },
    {
        id: "whatwedo",
        label: "What We Do",
        page: "whatwedo",
        sub: [
            { label: "Investment Management", sectionId: "whatwedo-investment" },
            { label: "Technology", sectionId: "whatwedo-technology" },
            { label: "Financial Research", sectionId: "whatwedo-research" },
            { label: "Financial Operations", sectionId: "whatwedo-operations" },
        ],
    },
    {
        id: "careers",
        label: "How To Join",
        page: "careers",
        sub: [
            { label: "Career Development", sectionId: "careers-header" },
            { label: "Work with Us", sectionId: "careers-positions" },

            { label: "Application FAQ", sectionId: "careers-open" },
        ],
    },
    { id: "contact", label: "Contact", page: "contact", sub: [] },
];
