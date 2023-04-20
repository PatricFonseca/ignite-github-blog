import { Home } from './pages/Home'
import './global.css'
import { ThemeProvider } from 'styled-components'
import { PublicationsProvider } from './contexts/publicationsContext'

import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PublicationsProvider>
        <div className="App">
          <Home />
        </div>
      </PublicationsProvider>
    </ThemeProvider>
  )
}

export default App
