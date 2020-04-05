import React, { useReducer } from "react"
import mainReducer from './mainReducer'
import {
  SET_VISITOR
} from '../types'
import MainContext from './mainContext'
import axios from 'axios'

const MainState = (props: any) => {
  const initialState = {
    visitor: null
  }

  const [state, dispatch] = useReducer(mainReducer, initialState)

  const setVisitor = async (name) => {
    await axios.post(`${window.location.protocol}//${window.location.hostname}:5050/api/visitors`, {name: name})

    dispatch({type: SET_VISITOR, payload: name})
  }


  return (
    <MainContext.Provider
      value={{
        visitor: state.visitor,
        setVisitor
      }}
>
  { props.children }
  </MainContext.Provider>
)
}

export default MainState
