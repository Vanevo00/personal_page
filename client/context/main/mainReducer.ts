import {
  HIDE_LOGO, MAIN_PAGE_VISITED, ROTATE_LOGO,
  SET_VISITOR, SHOW_LOGO, SHOW_MAIN_CONTENT, SHOW_MAIN_CONTENT_TEXT
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
    case ROTATE_LOGO:
      return {
        ...state,
        isLogoRotated: true
      }
    case SHOW_MAIN_CONTENT:
      return {
        ...state,
        isMainContentShowing: true
      }
    case SHOW_MAIN_CONTENT_TEXT:
      return {
        ...state,
        isMainContentTextShowing: true
      }
    case MAIN_PAGE_VISITED:
      return {
        ...state,
        wasMainPageVisited: true
      }
    default:
      return state
  }
}
