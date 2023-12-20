import { useNavigation } from '../../hooks'
import { navItems } from '../../hooks/useNavigation/useNavigation'
import Nav from '../Nav/Nav'

const AppContent = (): JSX.Element => {
  const { content: Content, menu } = useNavigation(navItems)

  return (
    <>
      <Nav />
      <Content />
    </>
  )
}

export default AppContent
