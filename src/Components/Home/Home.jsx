import React from 'react'
import photo from '../../assets/avataaars.svg'
export default function Home() {
  return (



       
   <>
    <section id='home' className='vh-100 '>
          <div className='container h-100'>
                 <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-center' >
                           <img src={photo} className='w-75' alt="" />
                           <h1 className='my-4 text-uppercase fw-bolder text-light'>start Framework</h1>
                            
                               <h5 className='line m-auto '><i className="fa-solid fa-star text-light fs-6"></i></h5>
                               <h6 className='text-light fw-normal my-3 '>Graphic Artist - Web Designer - Illustrator</h6>
                          

                        </div>

                 </div>
          </div>

    </section>
   
   
   </>

  )
}
