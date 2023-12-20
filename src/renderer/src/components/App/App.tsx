import { ThemeProvider } from '@emotion/react'
import { RouterProvider } from 'react-router-dom'

import { router } from '../../routes/routes'
import { useTheme } from '../../hooks'

import GlobalStyle from '../GlobalStyle/GlobalStyle'

const App = (): JSX.Element => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
