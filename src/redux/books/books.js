export const removeBook = (index) => {
    return {
        type : 'REMOVE',
        index
    }
}

export const addBook = () => {
    return {
        type: 'ADD_BOOK',
        author,
        title
    }
}


export default bookReducer = (state = {

}, action) => {
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
