import React from 'react'
import Header from './components/common/Header'

import { ClerkProvider } from '@clerk/clerk-react'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'
function RootLayout() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


  return (
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div style={{backgroundColor:" #1a1a1a"}}>
       
      <Header/>
      <div style={{minHeight:"80vh"}}>
        <Outlet/>
      </div>
      <Footer/>
     
    </div>
     </ClerkProvider>
  )
}

export default RootLayout
