'use client';

import Nav from "./components/Nav/nav";
import Main from "./components/Main/main";
import {useState} from "react";

export default function HomeClient() {
    const [heights, setHeights] = useState([]);

    return(
        <>
            <Nav heights={heights}/>
            <Main setHeights={setHeights} />
        </>
    );
}