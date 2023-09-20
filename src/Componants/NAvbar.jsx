import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function NAvbar() {
  return (
  
    <nav className="navbar-expand-lg">
      <div className=" w-100">
        <div className=' navbar-nav w-100 py-4 d-flex align-items-center justify-content-between test '>
        <Link className="ms-5 NavCss" to="START_FRAMEWORK"> <h3 className='ms-5 NavCss'>START FRAMEWORK</h3></Link>
        <div className="d-flex">
          <NavLink className={(x)=>x.isActive===true?'NavCss2':'nav-link mx-4'} to={'home'}>
            <h3>ABOUT</h3>
          </NavLink>
          <NavLink className={(x)=>x.isActive===true?'NavCss2 mx-4':'nav-link mx-4'} to={'about'}>
          <h3>Portfolio</h3>
          </NavLink>
          <NavLink className={(x)=>x.isActive===true?'NavCss2 me-5':'nav-link me-5'} to={'Contact'}>
            <h3>Contact</h3>
          </NavLink>
        
      </div>
    </div>
  </div>
</nav>
  

  )
}
