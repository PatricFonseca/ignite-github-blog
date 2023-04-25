import { ThemeProvider } from 'styled-components'
import { PublicationsProvider } from './contexts/publicationsContext'
// import { Home } from './pages/Home'
import { Publication } from './pages/Publication'

import { defaultTheme } from './styles/themes/default'

import './global.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PublicationsProvider>
        <div className="App">
          {/* <Home /> */}
          <Publication />
        </div>
      </PublicationsProvider>
    </ThemeProvider>
  )
}

export default App
