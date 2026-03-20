import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import Profile from "./Profile";
import App from './App'


const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Jebo te router</h2>
  },
  {
    path:"profile",
    element: <Profile />
  }
])
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />

  </StrictMode>,
)
