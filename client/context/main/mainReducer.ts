import {
  HIDE_LOGO,
  SET_VISITOR, SHOW_LOGO
} from '../types'

export default (state: any, action: any) => {
  switch(action.type) {
    case SET_VISITOR:
      return {
        ...state,
        visitor: action.payload,

      }
    case SHOW_LOGO:
      return {
        ...state,
        isLogoShowing: true
      }
    case HIDE_LOGO:
      return {
        ...state,
        isLogoShowing: false
      }
    default:
      return state
  }
}
