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
import ModalPage from './pages/ModalPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import InputPage from './pages/InputPage.tsx';
import ToastPage from './pages/ToastPage.tsx';

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
      },
      {
        path:'/modal',
        element:<ModalPage></ModalPage>
      },
      {
        path:'/login',
        element:<LoginPage></LoginPage>
      },
      {
        path:'/input',
        element:<InputPage></InputPage>
      },
      {
        path:'/toast',
        element:<ToastPage></ToastPage>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
