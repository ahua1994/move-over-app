"use client";
import React from "react";
import { useRouter } from "next/navigation";

const MyMoves = () => {
    const router = useRouter();
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
            notes: "",
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
