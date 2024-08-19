import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/home';
import About from '../components/header/about';
import Contact from '../components/contact/contact';

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
      },
      // Add more routes here if needed
      {
        path:'/contact',
        element : <Contact/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
