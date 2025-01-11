import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Logout from './pages/app_pages/Logout';
import Dashboard from './components/Dashboard';
import Settings from './pages/app_pages/Settings'
import Employees from './pages/employee_pages/Employees';
import Inventory from './pages/inventory_pages/Inventory';
import DashboardPage from './pages/app_pages/DashboardPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '/employees',
        element: <Employees />,
      },
      {
        path: '/inventory',
        element: <Inventory />,
        children: [
          
        ]
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

