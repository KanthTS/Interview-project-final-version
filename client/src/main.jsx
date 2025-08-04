import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import RootLayout from './RootLayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/common/Home.jsx'
import ContributeForm from './components/common/ContributeForm.jsx'
import Signin from './components/common/Signin.jsx'
import Signup from './components/common/Signup.jsx'

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
  },
 
]
}, {
    path:'/contributionForm',
    element:<ContributeForm/>
  }])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  {/* <ContributeForm/> */}
<RouterProvider router={obj}/>


  </StrictMode>,
)
