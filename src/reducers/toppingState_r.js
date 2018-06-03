export default (state = [0], { type, payload } = {}) => {
    
    switch (type) {
        case 'ADD_TOPPING':
            state = []
            return state.concat(parseFloat(payload))
    default:
      return state
    }
  }
  