import { configureStore } from "@reduxjs/toolkit";

const reducer = (state = [], action) => {
    if (action.type === 'REMOVE') {
        return state.filter(book => book.index !== action.index)
    }
    return state
}

const removeBook = (index) => {
    return {
        type : 'REMOVE',
        index
    }
}

const store = configureStore (reducer)