import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import RootLayout from './RootLayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/common/Home.jsx'
import ContributeForm from './components/contribute/ContributeForm.jsx'
import Signin from './components/common/Signin.jsx'
import Signup from './components/common/Signup.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
const obj=createBrowserRouter([
  {
  path:'/',
  element:<RootLayout/>,
  children:[{

    path:'',
    element:<Home/>
  },
  {
    path:'signin',
    element:<Signin/>
  },
  {
    path:'signup',
    element:<Signup/>
  }
]
}])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  

<RouterProvider router={obj}/>


  </StrictMode>,
)
