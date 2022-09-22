import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { removeBook } from "../redux/books/books";

export default () => {
    const state = useSelector((state) => state.bookReducer)
    const dispatch = useDispatch()
    console.log('book',dispatch(removeBook(1)))
    return <div>
        <h2>Book Author : {state[0].author}</h2>
        <button onClick={() => console.log('deleted')}>Delete</button>
    </div>
}