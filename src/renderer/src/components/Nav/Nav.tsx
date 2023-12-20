import NavButton from './NavButton/NavButton'
import NavPlaylists from './NavPlaylists/NavPlalists'
import NavSearch from './NavSearch/NavSearch'

import StyledNav from './Nav.styles'

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <NavButton hex="&#xE1D3;" label="Library" />
      <NavSearch />
      <NavButton hex="&#xE006;" label="Favorites" />
      <span className="nav-label">Playlists</span>
      <NavButton hex="&#xE109;" label="Add playlist" />
      <NavPlaylists />
      <NavButton hex="&#xE713;" label="Settings" />
    </StyledNav>
  )
}

export default Nav
