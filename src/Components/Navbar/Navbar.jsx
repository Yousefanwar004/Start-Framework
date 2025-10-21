import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
$(window).on('scroll', function () {
  let x = $(window).scrollTop();

  if (x > 300 && !$('.navbar').data('expanded')) {
    $('.navbar')
      .data('expanded', true)
      .stop()
      .animate({ height: '150px' }, 500);
  } 
  else if (x <= 300 && $('.navbar').data('expanded')) {
    $('.navbar')
      .data('expanded', false)
      .stop()
      .animate({ height: '100px' }, 500);
  }
});





  return (
    <>
<nav className="navbar navbar-expand-lg   p-4 fixed-top">
  <div className="container">
    <NavLink className="navbar-brand fs-2 fw-bolder text-light text-uppercase " to={''}>Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase text-light fw-bold">
        <li className="nav-item px-2  ">
          <NavLink className="nav-link rounded text-light  " aria-current="page" to={"about"}>about</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link rounded text-light" to={"portfolio"}>portfolio</NavLink>
        </li>
         <li className="nav-item px-2">
          <NavLink className="nav-link rounded text-light" to={"contact"}>contact</NavLink>
        </li>
   
   
      </ul>
   
    </div>
  </div>
</nav>




    </>
  )
}
