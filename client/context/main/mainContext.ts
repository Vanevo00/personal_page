import { createContext, Context } from 'react'

interface ContextInterface {
  visitor: string
  setVisitor?: Function
}

const MainContext: Context<ContextInterface> = createContext(null)

export default MainContext
