import { useState } from 'react'

import type {
  NavigateTo,
  NavigationComponents,
  NavigationPageId,
  NavigationTemplate,
  UseNavigation
} from './useNavigation.types'

const useNavigation: UseNavigation = (navigationTemplate: NavigationTemplate) => {
  const [currentPageId, setCurrentPageId] = useState<NavigationPageId>()

  const [components, setComponents] = useState<NavigationComponents>({
    menu: <></>,
    content: <></>
  })

  const navigateTo: NavigateTo = (navigationPageId: NavigationPageId) => {
    if (navigationPageId === currentPageId) return
    if (!(navigationPageId in navigationTemplate)) return
    setCurrentPageId(navigationPageId)
    const { menu, content } = navigationTemplate[navigationPageId]
    setComponents({
      menu,
      content
    })
  }

  return {
    components,
    navigateTo
  }
}

export default useNavigation
