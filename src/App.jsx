import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Component/ErrorPage'
import Home from './Pages/Home'
import AboutPage from './Pages/About'
import ProductsPage from './Pages/ProductPage'
import Technology from './Pages/Technology'
import Solutions from './Pages/Solutions'
import TeamPage from './Pages/Team'
import Careers from './Pages/Careers'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/Privacy'
import TermsAndConditions from './Pages/Terms'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/products",
          element:<ProductsPage/>
        },
        {
          path:"/technology",
          element:<Technology/>
        },
        {
          path:"/solutions",
          element:<Solutions/>
        },
        {
          path:"/team",
          element:<TeamPage/>
        },
        {
          path:"/careers",
          element:<Careers/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/privacy-policy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms-and-conditions",
          element:<TermsAndConditions/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App