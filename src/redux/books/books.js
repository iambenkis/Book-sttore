export const removeBook = (book) => {
    return {
        type : 'REMOVE',
        book
    }
}

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        book
    }
}


export default function bookReducer  (state = {
    books: []
}, action) {
    switch (action.type) {
        case 'REMOVE_BOOK':
            return {
                ...state,
                books : state.books.filter(book => book !== action.book)
            }
        case 'ADD_BOOK':
            return {
                ...state,
                books : [...state.books, action.book]
            }
        default :
            return state
    }
}
