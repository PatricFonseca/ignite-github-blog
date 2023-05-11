// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PublicationsProvider } from './contexts/publicationsContext'

import { defaultTheme } from './styles/themes/default'

import './global.css'
import { Router } from './router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PublicationsProvider>
        <div className="App">
          {/* <Home /> */}
          <Router />
          {/* <RouterProvider router={router} /> */}
          {/* <Publication /> */}
        </div>
      </PublicationsProvider>
    </ThemeProvider>
  )
}

export default App
