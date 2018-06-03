import { ADD_DRONE, REM_DRONE } from './types'

export const addDrone = () => {
  return {
    type: ADD_DRONE,
  }
}

export const remDrone = () => {
  return {
    type: REM_DRONE
  }
}