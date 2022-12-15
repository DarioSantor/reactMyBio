import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import MyBio from './components/MyBio';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


import PageError from './components/PageError'
import Details from './components/Details';
import Contacts from './components/Contacts';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MyBio/>,
    errorElement: <PageError/>,
    children: [
      {
        index: true, 
        element: <Home/>},
      {
        path: "details",
        element: <Details/>
      },
      {
        path: "contacts",
        element: <Contacts/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

reportWebVitals();
