import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import RootLayout from './RootLayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/common/Home.jsx'
import Signin from './components/common/Signin.jsx'
import Signup from './components/common/Signup.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Javascript from './components/common/Javascript.jsx'
import Java from './components/common/Java.jsx'
import Python from './components/common/Python.jsx'
import C from './components/common/C.jsx'
import Cplus from './components/common/Cplus.jsx'
import Nodejs from './components/common/Nodejs.jsx'
import Sql from './components/common/Sql.jsx'
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
    path:'javascript',
    element:<Javascript/>
  },
  {
    path:'java',
    element:<Java/>
  },
  {
    path:'python',
    element:<Python/>
  },
  {
    path:'c',
    element:<C/>
  },
  {
    path:'c++',
    element:<Cplus/>
  },
  {
    path:'nodejs',
    element:<Nodejs/>
  },
  {
    path:'sql',
    element:<Sql/>
  }
  
]
}])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  

<RouterProvider router={obj}/>


  </StrictMode>,
)
