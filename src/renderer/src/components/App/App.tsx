import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Nav from '../Nav/Nav'

const App = (): JSX.Element => {
  return (
    <>
      <Nav />
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default App
