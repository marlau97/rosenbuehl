import React, { createContext, useState, ReactNode } from "react";

export type Page = 'landing' | 'apartment' | 'location' | 'house' | 'tips' | 'legal' | 'privacy';

type AppContextType = {
    pageToShow: Page;
    setPageToShow: (page: Page) => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [pageToShow, setPageToShow] = useState<Page>('landing');

    return (
        <AppContext.Provider value={{ pageToShow, setPageToShow }}>
            {children}
        </AppContext.Provider>
    );
};