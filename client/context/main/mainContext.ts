import { createContext, Context } from 'react'

interface ContextInterface {
  visitor: string
  isLogoShowing: boolean
  setVisitor: Function
  showLogo: Function
  hideLogo: Function
}

const MainContext: Context<ContextInterface> = createContext(null)

export default MainContext
