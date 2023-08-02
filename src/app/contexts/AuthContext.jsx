"use client";
import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("MOVE_OVER_CURRENT_USER"))
    );
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const baseUrl = "http://127.0.0.1:8000/";
    const router = useRouter();
    const toastStyle = {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: true,
    };

    const logout = () => {
        axios.post(
            `${baseUrl}user/logout/`,
            {},
            {
                headers: {
                    Authorization: `Token ${
                        JSON.parse(localStorage.getItem("MOVE_OVER_CURRENT_USER")).key
                    }`,
                },
            }
        );
        toast.info("You Have Been Signed Out", toastStyle);
        localStorage.removeItem("MOVE_OVER_CURRENT_USER");
        setCurrentUser(null);
        router.push("/");
    };

    const handleRegister = async e => {
        e.preventDefault();
        const res = await axios
            .post(`${baseUrl}user/register/`, {
                email: registerEmail,
                password: registerPassword,
                username: registerUsername,
            })
            .catch(err => toast.error(err.message, toastStyle));
        if (res.data) {
            setRegisterEmail("");
            setRegisterPassword("");
            setRegisterUsername("");
            localStorage.setItem(
                "MOVE_OVER_CURRENT_USER",
                JSON.stringify({ key: res.data.key, ...res.data.user })
            );
            setCurrentUser({ key: res.data.key, ...res.data.user });
            toast.success("Registered Successfully!", toastStyle);
            router.push("/");
        }
    };

    const handleLogin = async e => {
        e.preventDefault();
        const res = await axios
            .post(`${baseUrl}user/login/`, {
                username: loginEmail,
                password: loginPassword,
            })
            .catch(err => toast.error("An Error Occured :(", toastStyle));
        if (res.data) {
            setCurrentUser({ ...res.data });
            localStorage.setItem("MOVE_OVER_CURRENT_USER", JSON.stringify({ ...res.data }));
            setLoginEmail("");
            setLoginPassword("");
            toast.success("Login Successful !", toastStyle);
            router.push("/");
        }
        // else {
        //     console.log("fail");
        //     return toast.error("Something Went Wrong :(", toastStyle);
        // }
    };
    return (
        <AuthContext.Provider
            value={{
                loginEmail,
                loginPassword,
                setLoginEmail,
                setLoginPassword,
                currentUser,
                registerUsername,
                registerEmail,
                registerPassword,
                setRegisterUsername,
                setRegisterEmail,
                setRegisterPassword,
                handleRegister,
                handleLogin,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
