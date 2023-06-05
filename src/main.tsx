import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { routes } from "./routes";
import App from "./App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <span>404: route not found</span>,
        children: routes.map(({ route, component }) => ({
            path: route,
            element: component
        })),
    },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
