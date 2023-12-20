import NavButton from '../NavButton/NavButton'
import StyledNavPlaylists from './NavPlaylists.styles'
import type { NavPlaylistsProps } from './NavPlaylists.types'

const NavPlaylists = ({ ...rest }: NavPlaylistsProps): JSX.Element => {
  return (
    <StyledNavPlaylists {...rest}>
      {/* <NavButton hex="&#xE170;" label="Playlist 1" />
      <NavButton hex="&#xE11D;" label="Playlist 2" />
      <NavButton hex="&#xE93C;" label="Playlist 3" />
      <NavButton hex="&#xE958;" label="Playlist 4" /> */}
    </StyledNavPlaylists>
  )
}

export default NavPlaylists
