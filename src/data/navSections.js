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
            { label: "Tax & Regulatory Services", sectionId: "whatwedo-tax" },
            { label: "Corporate Finance Advisory Services", sectionId: "whatwedo-corporate" },
            { label: "Risk & Advisory Services", sectionId: "whatwedo-risk" },
            { label: "Assurance Services", sectionId: "whatwedo-assurance" },
            { label: "Global Knowledge Services", sectionId: "whatwedo-gks" },
            { label: "ESG Advisory Services", sectionId: "whatwedo-esg" },
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
