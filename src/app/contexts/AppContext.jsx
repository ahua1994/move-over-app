"use client";
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [myMoves, setMyMoves] = useState([]);
    const addItem = () => {};
    const deleteItem = () => {};
    const addPlace = () => {};
    const deletePlace = () => {};
    const addMove = () => {};
    const deleteMove = () => {};
    return (
        <AppContext.Provider
            value={{
                myMoves,
                setMyMoves,
                addItem,
                addMove,
                addPlace,
                deleteItem,
                deleteMove,
                deletePlace,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
