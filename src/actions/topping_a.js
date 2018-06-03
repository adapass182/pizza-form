import { ADD_TOPPING, REM_TOPPING } from './types'

export const addTopping = (topping) => {
  return {
    type: ADD_TOPPING,
    payload: topping
  }
}

export const remTopping = () => {
  return {
    type: REM_TOPPING
  }
}