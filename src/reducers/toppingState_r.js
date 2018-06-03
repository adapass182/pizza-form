export default (state = [0], { type, payload } = {}) => {
    
    switch (type) {
        case 'ADD_TOPPING':
            state = state.concat(parseFloat(payload))
            return state
        case 'REMOVE_TOPPING':
            state = state.splice(-1, 1)
            return state
    default:
        return state
    }
}