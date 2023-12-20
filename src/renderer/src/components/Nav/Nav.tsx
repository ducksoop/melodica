import StyledNav from './Nav.styles'
import NavButton from './NavButton/NavButton'
import NavSearch from './NavSearch/NavSearch'

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <NavButton hex="&#xE1D3;" label="Library" />
      {/* <NavButton hex="&#xE721;" label="Search" /> */}
      <NavSearch />
      <NavButton hex="&#xE006;" label="Favorites" />
      <div className="nav-spacer" />
      <NavButton hex="&#xF133;" label="Updates" />
      <NavButton hex="&#xE713;" label="Settings" />
    </StyledNav>
  )
}

export default Nav
