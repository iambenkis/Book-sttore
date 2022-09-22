export const removeBook = (index) => {
    return {
        type : 'REMOVE',
        index
    }
}

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        book
    }
}


export default function bookReducer  (state =[], action) {
    switch (action.type) {
        case 'REMOVE_BOOK':
            return   [...state.books.filter(book => book.id !== action.id)]
        case 'ADD_BOOK':
            return [...state.books, action.book]
        default :
            return state
    }
}
