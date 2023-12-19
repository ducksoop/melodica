import AppProvider from '../AppProvider/AppProvider'
import AppContent from '../AppContent/AppContent'

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
