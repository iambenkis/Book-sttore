// import { configureStore } from "@reduxjs/toolkit";

const bookReducer = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_BOOK':
            return state.filter(book => book.index !== action.index)
        case 'ADD_BOOK':
            return [
                ...state,
               {
                author : action.author,
                title : action.title
            } ]
        default :
            return state
    }
}

export default bookReducer;
