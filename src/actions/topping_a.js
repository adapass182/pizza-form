import { ADD_TOPPING, REMOVE_TOPPING } from './types'

export const addTopping = (topping) => {
  return {
    type: ADD_TOPPING,
    payload: topping
  }
}

export const removeTopping = () => {
  return {
    type: REMOVE_TOPPING
  }
}