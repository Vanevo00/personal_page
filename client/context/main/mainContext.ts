import { createContext, Context } from 'react'

interface ContextInterface {
  visitor: string
  isLogoShowing: boolean
  isLogoRotated: boolean
  isMainContentShowing: boolean
  setVisitor: Function
  showLogo: Function
  hideLogo: Function
  rotateLogo: Function
  showMainContent: Function
}

const MainContext: Context<ContextInterface> = createContext(null)

export default MainContext
