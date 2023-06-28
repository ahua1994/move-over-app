"use client";
import React from "react";
import { useParams } from "next/navigation";

const Move = () => {
    const id = useParams().id;
    return <div>Move {id}</div>;
};

export default Move;
