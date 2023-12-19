import { ThemeProvider } from '@emotion/react'

import useTheme from '../../hooks/useTheme'

import GlobalStyle from '../GlobalStyle/GlobalStyle'
import { PropsWithChildren } from 'react'

const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default AppProvider
