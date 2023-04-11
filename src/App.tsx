import { Home } from './pages/Home'
import './global.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
