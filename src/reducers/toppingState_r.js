export default (state = [], { type, payload } = {}) => {
    
    switch (type) {
        case 'ADD_TOPPING':
            state = state.concat(parseFloat(payload))
            return state
        case 'REMOVE_TOPPING':
            state = state.slice(0, (state.length - 1))
            return state
    default:
        return state
    }
}