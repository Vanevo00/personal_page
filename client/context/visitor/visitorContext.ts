import { createContext, Context } from 'react'

interface ContextInterface {
  visitor: string
  setVisitor?: Function
}

const VisitorContext: Context<ContextInterface> = createContext(null)

export default VisitorContext
