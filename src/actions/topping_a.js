import { ADD_TOPPING } from './types'

export const addTopping = (topping) => {
  return {
    type: ADD_TOPPING,
    payload: topping
  }
}