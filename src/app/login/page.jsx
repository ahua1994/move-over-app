"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    return (
        <div className="Login flex justify-center items-center mt-24">
            <div className="reg-form w-[16%] text-center rounded-lg min-w-[300px]">
                <h1 className="text-3xl">Login</h1>
                {/* make better tailwind input/label */}
                <form action="" className="flex flex-col items-start py-4">
                    <div className="relative w-full">
                        <input
                            id="username"
                            placeholder=" "
                            required
                            className="text-black my-4 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                        />
                        <label
                            htmlFor="username"
                            className="absolute text-gray-600 duration-200 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-85 peer-focus:-translate-y-4 left-1"
                        >
                            Username
                        </label>
                    </div>
                    {/* <div className="relative w-full">
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder=" "
                            className="text-black my-4 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-gray-600 duration-200 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-85 peer-focus:-translate-y-4 left-1"
                        >
                            Email
                        </label>
                    </div> */}
                    <div className="relative w-full">
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder=" "
                            className="text-black my-4 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-gray-600 duration-200 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-85 peer-focus:-translate-y-4 left-1"
                        >
                            Password
                        </label>
                    </div>
                    <p className="my-2">
                        Don't Have an Account?{" "}
                        <span
                            className="text-[purple] cursor-pointer"
                            onClick={() => router.push("/register")}
                        >
                            Register Here!
                        </span>
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 self-center text-white font-bold py-2 px-4 rounded-full active:bg-blue-600 mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
