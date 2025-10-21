import React from 'react'

export default function Contact() {
  return (
   
     <>
    <section id='conatct ' className='vh-100 '>
          <div className='container h-100'>
                 <div className='d-flex justify-content-center align-items-center h-25 mt-5'>
                   <div className='text-center' >
                       <h1 className='my-4 text-uppercase fw-bolder main-col'>conatct section</h1>
                                             
                      <h5 className='line1 m-auto  '><i className="fa-solid fa-star fs-6 main-col"></i></h5>
                                                
            
                    </div>
             <div>

</div>




                </div>

            <div className='d-flex justify-content-center align-items-center flex-column'>
                            <div className="form-floating mb-3 w-50">
    <input type="text" className="form-control border-0 border-bottom shadow-none" id="userName" placeholder="userName" />
    <label htmlFor="userName">userName</label>
  </div>
  <div className="form-floating mb-3 w-50">
    <input type="number" className="form-control border-0 border-bottom shadow-none" id="userAge" placeholder="userAge" />
    <label htmlFor="userAge">userAge</label>
  </div>
  <div className="form-floating mb-3 w-50">
    <input type="text" className="form-control border-0 border-bottom shadow-none " id="userEmail" placeholder="userEmail" />
    <label htmlFor="userEmail">userEmail</label>
  </div>
  <div className="form-floating mb-3 w-50 "> 
    <input type="text" className="form-control border-0 border-bottom shadow-none " id="userPassword" placeholder="userPassword" />
    <label htmlFor="userPassword">userPassword</label>
     <button className='btn btn-success mt-3'>Send Message</button>
  </div>
    

            </div>






          </div>

    </section>
        
        
        </>




  )
}
