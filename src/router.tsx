import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { Publication } from './pages/Publication'
// import { loaderPublication } from './routes/publication'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [],
  },
  {
    path: '/publications/:publicationNumber',
    element: <Publication />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
