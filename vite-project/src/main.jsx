import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/home';
import About from '../components/header/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '', // Index route
        element: <Home />,
      },
      {
        path:'/about',
        element:<About/>
      }
      // Add more routes here if needed
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
