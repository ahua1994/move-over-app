"use client";
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
