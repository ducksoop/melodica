import StyledNav from './Nav.styles'
import NavButton from './NavButton/NavButton'
import NavSearch from './NavSearch/NavSearch'

import { type NavigationPageId } from '../../hooks/useNavigation/useNavigation.types'
import { type NavProps } from './Nav.types'

const Nav = ({ navigateTo, currentPageId }: NavProps): JSX.Element => {
  const handleClick = (label: NavigationPageId): void => {
    navigateTo(label)
  }

  return (
    <StyledNav>
      <NavButton
        hex="&#xE1D3;"
        label="Library"
        onClick={(): void => handleClick('library')}
        selected={currentPageId === 'library'}
      />
      <NavSearch />
      {/* <NavButton hex="&#xE721;" label="Search" /> */}
      <NavButton hex="&#xE006;" label="Favorites" />
      <div className="nav-spacer" />
      <NavButton hex="&#xF133;" label="Updates" />
      <NavButton
        hex="&#xE713;"
        label="Settings"
        onClick={(): void => handleClick('settings')}
        selected={currentPageId === 'settings'}
      />
    </StyledNav>
  )
}

export default Nav
