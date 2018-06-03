import { ADD_SAUCE } from './types'

export const addSauce = (sauce) => {
  return {
    type: ADD_SAUCE,
    payload: sauce
  }
}