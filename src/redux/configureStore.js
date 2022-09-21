// import { configureStore } from "@reduxjs/toolkit";

const rootReducer = (state = [], action) => {
    if (action.type === 'REMOVE_BOOK') {
        return state.filter(book => book.index !== action.index)
    }
    else if (action.type === 'ADD_BOOK') {
        return [
            ...state,
           {
            author : action.author,
            title : action.title
        }
        ]
    }
    return state
}

export default rootReducer;
