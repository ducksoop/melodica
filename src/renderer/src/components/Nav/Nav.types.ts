import {
  type NavigationPageId,
  type NavigateTo
} from '../../hooks/useNavigation/useNavigation.types'

export interface NavProps {
  navigateTo: NavigateTo
  currentPageId: NavigationPageId
}
