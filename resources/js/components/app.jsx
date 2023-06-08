import React from "react";
import ReactDOM from "react-dom/client";
import DashboardLayout from "./dashboardComponents/dashbboardLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./userInterface";
import Login from "./userInterface/login";
import { UserContextProvider } from "./contexts/userContext";
import UserDashboard from "./userInterface/userDashboard/userDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },

    {
        path: "/account/sign-in",
        element: <Login />,
    },

    {
        path: "/account/dashboard",
        element: <UserDashboard />
    },
]);

if (document.getElementById("root")) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));
    Index.render(
        <UserContextProvider>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </UserContextProvider>
    );
}
