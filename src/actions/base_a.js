import { ADD_BASE } from './types'

export const addBase = (base) => {
  return {
    type: ADD_BASE,
    payload: base
  }
}