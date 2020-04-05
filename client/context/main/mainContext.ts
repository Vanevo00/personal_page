import { createContext, Context } from 'react'

interface ContextInterface {
  visitor: string
  isLogoShowing: boolean
  isLogoRotated: boolean
  isMainContentShowing: boolean
  isMainContentTextShowing: boolean
  setVisitor: Function
  showLogo: Function
  hideLogo: Function
  rotateLogo: Function
  showMainContent: Function
  showMainContentText: Function
}

const MainContext: Context<ContextInterface> = createContext(null)

export default MainContext
