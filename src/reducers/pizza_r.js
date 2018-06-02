export default (state = [10, 8, 4, 7, 68, 75], { type, payload } = {}) => {
    
    switch (type) {
        case 'ADD_BASE':
            return state.push(payload)
        case 'REMOVE_BASE':
            return state
    default:
      return state
    }
  }
  