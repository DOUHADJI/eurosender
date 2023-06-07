import React from 'react';
import ReactDOM from 'react-dom/client';
import DashboardLayout from './dashboardComponents/dashbboardLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './userInterface';
import Login from './userInterface/login';


const router = createBrowserRouter([
    {
        path : "/",
        element : <Index/>
    },

    {
        path : "/account/sign-in",
        element : <Login/>
    }
])


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));
    Index.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}
