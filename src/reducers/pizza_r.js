export default (state = [0, 0], { type, payload } = {}) => {
    
    switch (type) {
        case 'ADD_BASE':
            state.push(payload)
            return state
        case 'REMOVE_BASE':
            return state
    default:
      return state
    }
  }
  