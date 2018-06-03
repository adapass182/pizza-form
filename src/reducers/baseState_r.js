export default (state = [0], { type, payload } = {}) => {
    
    switch (type) {
        case 'ADD_BASE':
            state = []
            return state.concat(parseFloat(payload))
    default:
      return state
    }
  }
  