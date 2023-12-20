import Icon from '../../Icon/Icon'

import StyledNavLink from './NewLink.styles'

import type { NavLinkProps } from './NavLink.types'

const NavLink = ({ to, label, ...rest }: NavLinkProps): JSX.Element => {
  return (
    <StyledNavLink to={to}>
      <Icon {...rest} />
      <span className="button-label">{label}</span>
    </StyledNavLink>
  )
}

export default NavLink
