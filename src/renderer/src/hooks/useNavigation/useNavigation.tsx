import { useCallback, useEffect, useReducer, useState } from 'react'

import type {
  NavigateToProps,
  UseNavigationActions,
  UseNavigationState
} from './useNavigation.types'

const useNavigation = (): void => {
  const navigateTo = (): void => {}

  const reducer = (state: UseNavigationState, action: UseNavigationActions): UseNavigationState => {
    return state
  }

  const [state, dispatch] = useReducer(reducer, { currentPageId: 'library' })

  dispatch({ type: 'navigateTo', pageId: 'playlist', playlistId: '123' })
}

export default useNavigation
