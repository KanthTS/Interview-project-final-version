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
import DSA from './components/common/DSA.jsx'
import CoreCS from './components/common/CoreCS.jsx'
import Software from './components/common/Software.jsx'
import DataBases from './components/common/DataBases.jsx'
import Devops from './components/common/Devops.jsx'
import Frontend from './components/common/Frontend.jsx'
import Backend from './components/common/Backend.jsx'
import UserContext from './contexts/UserContext.jsx'

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
  {
    path:'dsa',
    element:<DSA/>
  },
  {
    path:'corecs',
    element:<CoreCS/>
  },
  {
    path:'software',
    element:<Software/>
  },
  {
    path:'database',
    element:<DataBases/>
  },
  {
    path:'devops',
    element:<Devops/>
  },
  {
    path:'frontend',
    element:<Frontend/>
  },
  {
    path:'backend',
    element:<Backend/>
  }
 
]
}, {
    path:'/contributionForm',
    element:<ContributeForm/>
  }])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UserContext>
  {/* <ContributeForm/> */}
<RouterProvider router={obj}/>

</UserContext>
  </StrictMode>,
)
