import React from 'react'

export default function Footer() {
  return (<>
      <footer id='Footer' className='p-4'>
          <div className='container'>
              <div className='row g-2'>
                   <div className='col-md-4 p-5'>
                         <div className='text-center text-light'>
                           <h3 className='text-uppercase'>LOCATION</h3>
                           <p>2215 John Daniel Drive</p>
                           <p>Clark, MO 65243</p>

                         </div>

                   </div>
                  <div className='col-md-4 p-5'>
                         <div className='text-center text-light'>
                           <h3 className='text-uppercase'>AROUND THE WEB</h3>
                           <div className="icons mt-3 d-flex gap-2 justify-content-center  ">
                            <p className='icon'><i className="fa-brands fa-facebook mx-1  "></i></p>
                             <p className='icon'><i className="fa-brands fa-twitter mx-1 "></i></p>
                             <p className='icon'><i className="fa-brands fa-linkedin-in mx-1 "></i></p>
                             <p className='icon'><i className="fa-solid fa-globe mx-1 "></i></p>
                            </div>
                          
                         </div>

                   </div>
                    <div className='col-md-4 p-5'>
                         <div className='text-center text-light'>
                           <h3 className='text-uppercase'>ABOUT FREELANCER</h3>
                           <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                         </div>

                   </div>
              </div>

          </div>
          


    </footer>
<div className='end-footer text-center p-3'>
            <h6 className='text-light fw-normal'>Copyright © Your Website 2021</h6>

          </div>
  
  </>


  )
}
