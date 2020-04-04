import React, { useReducer } from "react"
import visitorReducer from './visitorReducer'
import {
  SET_VISITOR
} from '../types'
import VisitorContext from './visitorContext'
import axios from 'axios'

const VisitorState = (props: any) => {
  const initialState = {
    visitor: null
  }

  const [state, dispatch] = useReducer(visitorReducer, initialState)

  const setVisitor = async (name) => {
    await axios.post(`${window.location.protocol}//${window.location.hostname}:5050/api/visitors`, {name: name})

    dispatch({type: SET_VISITOR, payload: name})
  }


  return (
    <VisitorContext.Provider
      value={{
        visitor: state.visitor,
        setVisitor
      }}
>
  { props.children }
  </VisitorContext.Provider>
)
}

export default VisitorState
