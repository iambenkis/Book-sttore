import React from "react";
import { useSelector } from "react-redux";

export default () => {
    const book = useSelector(state => state.id)
    console.log('book',book)
    return <div>
        <h2>Book Author : {book}</h2>
    </div>
}