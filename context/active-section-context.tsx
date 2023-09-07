"use client";

import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextType = {
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);


type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState("Home");

    return (
        <ActiveSectionContext.Provider value={ { activeSection, setActiveSection} }>
            {children}
        </ActiveSectionContext.Provider>
    );
}

// Custom hook to consume the activeSection context with error handling if used outside of the context provider
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSection must be used within a ActiveSectionContextProvider"
        );
    }

    return context;
}
