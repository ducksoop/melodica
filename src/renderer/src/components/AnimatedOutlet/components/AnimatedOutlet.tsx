import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import StaticOutlet from './StaticOutlet/StaticOutlet'

const AnimatedOutlet = (): JSX.Element => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <StaticOutlet key={location.pathname} />
    </AnimatePresence>
  )
}

export default AnimatedOutlet
