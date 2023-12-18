import StyledNav from './Nav.styles'
import NavButton from './NavButton/NavButton'

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <NavButton hex="&#xE1D3;" label="Library" />
      <NavButton hex="&#xE721;" label="Search" />
      <NavButton hex="&#xE006;" label="Favorites" />
      <div className="nav-spacer" />
      <NavButton hex="&#xE713;" label="Settings" />
    </StyledNav>
  )
}

export default Nav
