import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router";
import Profile from './Profile.jsx';
import App from './App.jsx'
import Spinach from './Spinach.jsx';
import Popeye from './Popeye.jsx';
import DefaultProfile from './DefaultProfile.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
  {path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />, 
   
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>
  </StrictMode>,
)
