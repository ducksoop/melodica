import { ThemeProvider } from '@emotion/react'

import useTheme from '../../hooks/useTheme'

import GlobalStyle from '../GlobalStyle/GlobalStyle'
import { RouterProvider } from 'react-router-dom'
import { router } from '../../routes/routes'

const AppProvider = (): JSX.Element => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default AppProvider
