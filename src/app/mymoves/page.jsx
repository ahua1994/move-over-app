import React from "react";

const MyMoves = () => {
    const mymoves = [
        {
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
            {mymoves.map(x => (
                <div className="move">
                    <h1>{x.desc}</h1>
                    <h1>{x.owner}</h1>
                </div>
            ))}
        </div>
    );
};

export default MyMoves;
