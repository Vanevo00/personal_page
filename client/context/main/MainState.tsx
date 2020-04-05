import React, { useReducer } from "react"
import mainReducer from './mainReducer'
import {
  SET_VISITOR,
  SHOW_LOGO,
  HIDE_LOGO
} from '../types'
import MainContext from './mainContext'
import axios from 'axios'

const MainState = (props: any) => {
  const initialState = {
    visitor: null,
    isLogoShowing: false
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


  return (
    <MainContext.Provider
      value={{
        visitor: state.visitor,
        isLogoShowing: state.isLogoShowing,
        setVisitor,
        showLogo,
        hideLogo
      }}
>
  { props.children }
  </MainContext.Provider>
)
}

export default MainState
