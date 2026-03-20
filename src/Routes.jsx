import { createBrowserRouter, RouterProvider } from "react-router";
import { App } from "./App";
import Profile from "./Profile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import { Lola } from "./Lola";
import DefaultProfile from "./DefaultProfile";
import { Info } from "./Info";
import ErrorPage from "./ErrorPage";

export const myrouter = 
    [
        {path: "/", element: <App />,
            errorElement: <ErrorPage />
        },
         {path: "profile",  element: <Profile /> },
        {path: "profile/:name",  element: <Info /> },
   
        {
            path: "lola", 
            element: <Lola />,
        }
    ]
