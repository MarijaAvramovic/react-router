import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router";
import Profile from './Profile.jsx';
import App from './App.jsx'
import Spinach from './Spinach.jsx';
import Popeye from './Popeye.jsx';

const router = createBrowserRouter([
  {path: "/",
    element: <App />
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      {path: "spinach", element: <Spinach />},
      {path: "popeye", element: <Popeye />}
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>
  </StrictMode>,
)
