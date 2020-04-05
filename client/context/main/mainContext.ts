import { createContext, Context } from 'react'

interface ContextInterface {
  visitor: string
  isLogoShowing: boolean
  isLogoRotated: boolean
  setVisitor: Function
  showLogo: Function
  hideLogo: Function
  rotateLogo: Function
}

const MainContext: Context<ContextInterface> = createContext(null)

export default MainContext
