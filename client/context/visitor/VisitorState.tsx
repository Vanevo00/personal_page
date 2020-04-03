import React, { useReducer } from "react"
import visitorReducer from './visitorReducer'
import {
  SET_VISITOR
} from '../types'
import VisitorContext from './visitorContext'

const VisitorState = (props: any) => {
  const initialState = {
    visitor: null
  }

  const [state, dispatch] = useReducer(visitorReducer, initialState)

  const setVisitor = (name) => {
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
