"use client"; // Required for stateful logic in Next.js

import { createContext, useContext, useState, useEffect } from "react";

// Create a context
const FontSizeContext = createContext();

// Create a provider component
export function FontSizeProvider({ children }) {
    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);

    return (
        <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
}

// Create a custom hook for easier usage
export function useFontSize() {
    return useContext(FontSizeContext);
}
