import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { routes } from "./Routing/routes";
import App from "./App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <span style={{ color: "#fff" }}>404: route not found</span>,
        children: routes.map(({ route, component }) => ({
            path: route,
            element: component
        })),
    },
]);
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
