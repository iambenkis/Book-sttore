export const categoryReducer = (state = [], action) => {
    if (action.type === 'BOOK_STATUS') {
        return 'UNDER CONSTRUCTION'
    }
    return state
}
