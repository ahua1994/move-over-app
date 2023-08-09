"use client";
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "./contexts/AuthContext";
import { AppContext } from "./contexts/AppContext";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const router = useRouter();
    return (
        <nav className="fixed w-full top-0 text-white flex justify-between h-20 ">
            <Image
                priority
                src="/moveoverlogo.png"
                alt="Move Over Logo"
                width="200"
                height="150"
            ></Image>
            <h1>user: {currentUser?.username || "none"}</h1>
            <div className="links flex mr-2">
                <button
                    onClick={() => router.push("/startmove")}
                    className="start align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                >
                    Start A Move
                </button>
                <button
                    onClick={() => router.push("/mymoves")}
                    className="mymoves align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                >
                    My Moves
                </button>
                <button
                    onClick={() => router.push("/about")}
                    className="about align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                >
                    About
                </button>
                {!currentUser ? (
                    <>
                        <button
                            onClick={() => router.push("/register")}
                            className="register align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                        >
                            Register
                        </button>
                        <button
                            onClick={() => router.push("/login")}
                            className="login align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                        >
                            Login
                        </button>
                    </>
                ) : (
                    <button
                        onClick={logout}
                        className="logout align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
