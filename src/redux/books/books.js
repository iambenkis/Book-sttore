export const removeBook = (index) => {
    return {
        type : 'REMOVE',
        payload : index
    }
}

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload : book
    }
}


const bookReducer = (state =[], action) =>  {
    switch (action.type) {
        case 'REMOVE_BOOK':
            return   [...state.books.filter(book => book.id !== action.payload)]
        case 'ADD_BOOK':
            return [...state.books, action.payload]
        default :
            return state
    }
}

export default bookReducer;