"use client";
import { useContext, useEffect } from "react";
import { useParams } from "next/navigation";
import { AppContext } from "@/app/contexts/AppContext";
import { AuthContext } from "@/app/contexts/AuthContext";

const Move = () => {
    useEffect(() => !currentUser && router.push("/login"), []);
    const id = useParams().id;
    const { currentUser } = useContext(AuthContext);
    const { createObj } = useContext(AppContext);

    return (
        <div>
            Move {id}
            <p>Owner: {currentUser}</p>
        </div>
    );
};

export default Move;
