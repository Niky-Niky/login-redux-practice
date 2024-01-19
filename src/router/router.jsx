import { createBrowserRouter } from "react-router-dom";
import { App } from "components/App";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/login',
                element: <LoginPage/>,
            },
            {
                path: '/dashboard',
                element: <DashboardPage/>,
            }
        ]
    }
])