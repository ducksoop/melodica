import Icon from '../../Icon/Icon'
import StyledNavButton from './NavButton.styles'
import { NavButtonProps } from './NavButton.types'

const NavButton = ({ label, /* onClick,*/ ...rest }: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton>
      <Icon {...rest} />
      <span>{label}</span>
    </StyledNavButton>
  )
}

export default NavButton
