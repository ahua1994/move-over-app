"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AppContext } from "../contexts/AppContext";

const StartMove = () => {
    const { currentUser } = useContext(AuthContext);
    const { createObj } = useContext(AppContext);

    const [purpose, setPurpose] = useState("");
    const [desc, setDesc] = useState("");
    const [notes, setNotes] = useState("");

    const router = useRouter();

    useEffect(() => !currentUser && router.push("/login"), []);

    const handleSubmit = e => {
        e.preventDefault();
        //create move here
        // let obj = {purpose,desc,notes}
        // createObj("move",obj)
        return;
    };

    return (
        <div className="StartMove flex flex-col items-center">
            <h1 className="text-3xl">Start A Move</h1>
            <form action="" onSubmit={handleSubmit} className="flex flex-col min-w-[30%]">
                <label htmlFor="purpose" className="mt-6 font-medium">
                    Purpose
                </label>
                <input
                    id="purpose"
                    name="purpose"
                    value={purpose}
                    onChange={e => setPurpose(e.target.value)}
                    placeholder="Ex. Delivery, Moving, Trip..."
                    required
                    className="rounded-lg p-2.5 text-gray-900"
                />
                <label
                    htmlFor="desc"
                    className="block mb-2 font-medium text-gray-900 dark:text-white mt-6"
                    required
                >
                    Description
                </label>
                <textarea
                    id="desc"
                    rows="4"
                    onChange={e => setDesc(e.target.value)}
                    value={desc}
                    className="block p-2.5 w-full rounded-lg text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Information on the move"
                    maxLength={300}
                    required
                ></textarea>
                <label
                    htmlFor="notes"
                    className="block mb-2 font-medium text-gray-900 dark:text-white mt-6"
                >
                    Your notes
                </label>
                <textarea
                    id="notes"
                    rows="4"
                    onChange={e => setNotes(e.target.value)}
                    value={notes}
                    className="block p-2.5 w-full rounded-lg text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your notes here..."
                    maxLength={300}
                ></textarea>
                <button className="bg-blue-500 hover:bg-blue-700 self-center text-white font-bold py-2 px-4 rounded-full active:bg-blue-600 mt-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default StartMove;
