import { ThemeProvider } from '@emotion/react'

import useTheme from '../../hooks/useTheme'

import App from '../App/App'
import GlobalStyle from '../GlobalStyle/GlobalStyle'

const AppProvider = (): JSX.Element => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export default AppProvider
