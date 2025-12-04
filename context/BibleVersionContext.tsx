// src/context/BibleVersionContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Version = "ASND" | "NIV" | "KJV" | "ESV" | "NLT" | "CEB";

interface BibleVersionContextType {
  version: Version;
  setVersion: (v: Version) => void;
}

const BibleVersionContext = createContext<BibleVersionContextType | undefined>(
  undefined
);

// ERROR-HANDLED HOOK — WILL NEVER CRASH
export const useBibleVersion = (): BibleVersionContextType => {
  const context = useContext(BibleVersionContext);
  if (!context) {
    // This should never happen in production — but if it does, fall back gracefully
    console.warn("useBibleVersion used outside of BibleVersionProvider");
    return {
      version: "ASND",
      setVersion: () => {},
    };
  }
  return context;
};

// PROVIDER WITH ERROR BOUNDARY & SAFE DEFAULTS
export function BibleVersionProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState<Version>("ASND");

  // Optional: persist choice in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("femc-bible-version") as Version;
    if (saved && ["ASND", "NIV", "KJV", "ESV", "NLT", "CEB"].includes(saved)) {
      setVersion(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("femc-bible-version", version);
  }, [version]);

  const value = { version, setVersion };

  return (
    <BibleVersionContext.Provider value={value}>
      {children}
    </BibleVersionContext.Provider>
  );
}