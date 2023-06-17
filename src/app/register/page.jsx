import React from "react";

const Register = () => {
    return (
        <div className="Register flex justify-center items-center pt-24">
            <div className="reg-form text-black bg-slate-500 w-[30%] text-center rounded-lg">
                <h1>Register</h1>
                {/* make better tailwind input/label */}
                <form action="" className="flex flex-col">
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" name="username" />
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" name="email" />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" />
                </form>
            </div>
        </div>
    );
};

export default Register;
