export default (state = 0, { type, payload } = {}) => {

    switch (type) {
        case 'ADD_DRONE':
            return state + 1
        case 'REM_DRONE':
            return state - 1
    default:
        return state
    }
}