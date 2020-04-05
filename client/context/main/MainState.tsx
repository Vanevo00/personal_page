import React, { useReducer } from "react"
import mainReducer from './mainReducer'
import {
  SET_VISITOR,
  SHOW_LOGO,
  HIDE_LOGO, ROTATE_LOGO, SHOW_MAIN_CONTENT, SHOW_MAIN_CONTENT_TEXT
} from '../types'
import MainContext from './mainContext'
import axios from 'axios'

const MainState = (props: any) => {
  const initialState = {
    visitor: null,
    isLogoShowing: false,
    isLogoRotated: false,
    isMainContentShowing: false,
    isMainContentTextShowing: false
  }

  const [state, dispatch] = useReducer(mainReducer, initialState)

  const setVisitor = async (name) => {
    await axios.post(`${window.location.protocol}//${window.location.hostname}:5050/api/visitors`, {name: name})

    dispatch({type: SET_VISITOR, payload: name})
  }

  const showLogo = () => {
    dispatch({type: SHOW_LOGO})
  }

  const hideLogo = () => {
    dispatch({type: HIDE_LOGO})
  }

  const rotateLogo = () => {
    dispatch({type: ROTATE_LOGO})
  }

  const showMainContent = () => {
    dispatch({type: SHOW_MAIN_CONTENT})
  }

  const showMainContentText = () => {
    dispatch({type: SHOW_MAIN_CONTENT_TEXT})
  }

  return (
    <MainContext.Provider
      value={{
        visitor: state.visitor,
        isLogoShowing: state.isLogoShowing,
        isLogoRotated: state.isLogoRotated,
        isMainContentShowing: state.isMainContentShowing,
        isMainContentTextShowing: state.isMainContentTextShowing,
        setVisitor,
        showLogo,
        hideLogo,
        rotateLogo,
        showMainContent,
        showMainContentText
      }}
>
  { props.children }
  </MainContext.Provider>
)
}

export default MainState
