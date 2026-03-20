import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { myrouter } from './Routes';
import { createBrowserRouter, RouterProvider } from 'react-router';
 
 

const router = createBrowserRouter(myrouter);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />

  </StrictMode>,
)
