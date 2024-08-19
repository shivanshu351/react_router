import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import Home from '../components/Home/home';
import About from '../components/header/about';
import Contact from '../components/contact/contact';
import User from '../components/user/User';
import Github from '../components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '', // Index route
//         element: <Home />,
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       // Add more routes here if needed
//       {
//         path:'/contact',
//         element : <Contact/> 
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
