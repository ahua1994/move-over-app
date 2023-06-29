"use client";
import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useState } from "react";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [myMoves, setMyMoves] = useState([]);

    const baseUrl = "https://ahua1994.pythonanywhere.com/";

    const toastStyle = {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: true,
    };

    const createObj = async (type, obj) => {
        let res = await axios
            .post(`${baseUrl}${type}/`, obj, {
                headers: {
                    Authorization: `Token ${
                        JSON.parse(localStorage.getItem("MOVE_OVER_CURRENT_USER")).key
                    }`,
                },
            })
            .catch(err => toast.error(err.message, toastStyle));
    };

    const deleteObj = async (type, id) => {
        let res = await axios
            .delete(`${baseUrl}${type}/${id}`, {
                headers: {
                    Authorization: `Token ${
                        JSON.parse(localStorage.getItem("MOVE_OVER_CURRENT_USER")).key
                    }`,
                },
            })
            .catch(err => toast.error(err.message, toastStyle));
    };

    return (
        <AppContext.Provider
            value={{
                myMoves,
                setMyMoves,
                createObj,
                deleteObj,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
