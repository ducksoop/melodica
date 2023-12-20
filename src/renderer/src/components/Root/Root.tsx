import { Suspense, useEffect } from 'react'
import Nav from '../Nav/Nav'
import Controls from '../Controls/Controls'
import AnimatedOutlet from '../AnimatedOutlet/components/AnimatedOutlet'

const Root = (): JSX.Element => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent): void => {
      if (e.key === 'F12') {
        e.preventDefault()

        window.api.showDevTools()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return (): void => window.removeEventListener('keypress', handleKeyPress)
  }, [])

  return (
    <>
      <main>
        <Nav />
        <Suspense fallback={<></>}>
          <AnimatedOutlet />
        </Suspense>
      </main>
      <Controls />
      {/* <main>
        <Nav {...rest} />

        <AnimatePresence mode="wait">
          <Page />
        </AnimatePresence>
      </main>
      <Controls /> */}
    </>
  )
}

export default Root
