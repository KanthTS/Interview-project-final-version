import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function Signin() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <SignIn/>
    </div>
  )
}

export default Signin