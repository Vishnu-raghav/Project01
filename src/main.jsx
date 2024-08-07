import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import SellPhone from './Components/Sell Phone/SellPhone.jsx'
import BuyPhone from './Components/Buy Phone/BuyPhone.jsx'
import BuyLaptop from './Components/Buy laptop/BuyLaptop.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path : '/Sell Phone',
        element : <SellPhone/>
      },
      {
        path : '/Buy Phone',
        element : <BuyPhone/>
      },
      {
        path : '/Buy Laptop',
        element : <BuyLaptop/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
