"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../contexts/AuthContext";
import { AppContext } from "../contexts/AppContext";

const MyMoves = () => {
    const { currentUser } = useContext(AuthContext);
    const { getMyMoves, myMoves } = useContext(AppContext);
    const router = useRouter();
    useEffect(() => !currentUser && router.push("/login"), []);
    const mymoves = [
        {
            id: 1,
            places: [],
            purpose: "",
            places_count: 3,
            items: [],
            items_count: 3,
            desc: "desc",
            status: false,
            owner: "me",
            notes: "careful with glass",
            move_date: "timestamp",
            created: "timestamp",
        },
        {
            id: 2,
            places: [],
            purpose: "",
            places_count: 3,
            items: [],
            items_count: 3,
            desc: "desc",
            status: false,
            owner: "me",
            notes: "careful with eggs",
            move_date: "timestamp",
            created: "timestamp",
        },
    ];
    return (
        <div className="MyMoves flex flex-col items-center justify-center">
            <h1 className="text-3xl">My Moves</h1>
            {mymoves
                .filter(x => x.owner === "me")
                .map(x => (
                    <div className="move" onClick={() => router.push(`/mymoves/${x.id}`)}>
                        <h1>{x.desc}</h1>
                        <h1>{x.owner}</h1>
                    </div>
                ))}
        </div>
    );
};

export default MyMoves;
