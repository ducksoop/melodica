import { AnimatePresence } from 'framer-motion'

import { useNavigation } from '../../hooks'
import { navigationTemplate } from '../../pages/Pages'

import Nav from '../Nav/Nav'

const AppContent = (): JSX.Element => {
  useNavigation(navigationTemplate)

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait"></AnimatePresence>
    </>
  )
}

export default AppContent
