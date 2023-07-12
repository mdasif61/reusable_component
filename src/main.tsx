import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.tsx';
import Home from './Home/Home.tsx';
import ButtonPage from './pages/ButtonPage.tsx';
import TablePage from './pages/TablePage.tsx';
import LoadingPage from './pages/LoadingPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/button',
        element:<ButtonPage></ButtonPage>
      },
      {
        path:'/table',
        element:<TablePage></TablePage>
      },
      {
        path:'/loading',
        element:<LoadingPage></LoadingPage>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
