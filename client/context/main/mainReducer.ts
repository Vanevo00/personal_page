import {
  SET_VISITOR
} from '../types'

export default (state: any, action: any) => {
  switch(action.type) {
    case SET_VISITOR:
      return {
        ...state,
        visitor: action.payload,

      }
    default:
      return state
  }
}
