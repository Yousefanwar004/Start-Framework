import React, { useState } from 'react'
import poert1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portfolio() {

  const images = [poert1, port2, port3, poert1, port2, port3];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = (e) => {
    if (e.target.id === 'lightBoxContainer') {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <section id='portfolio' className='p-5'>
        <div className='container p-3'>
          <div className='d-flex justify-content-center align-items-center h-25 mt-5 p-2 py-3'>
            <div className='text-center'>
              <h1 className='my-3 text-uppercase fw-bolder main-col'>portfolio component</h1>
              <h5 className='line1 m-auto'>
                <i className="fa-solid fa-star fs-6 main-col"></i>
              </h5>
            </div>
          </div>

          <div className='row gy-4'>
            {images.map((img, index) => (
              <div key={index} className='col-lg-4'>
                <div
                  className='position-relative inner'
                  onClick={() => openModal(img)}
                >
                  <img src={img} className='w-100' alt={`Portfolio ${index + 1}`} />
                  <div className='layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center'>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div id='lightBoxContainer'onClick={closeModal} className='d-flex justify-content-center align-items-center bg-primary bg-opacity-25 position-fixed top-0 start-0 end-0 bottom-0'>
          <div className='lightbox-item  text-center w-50'>
            <img src={selectedImage} alt="Selected"  className='rounded shadow-lg w-100 ' />
          </div>
        </div>
      )}
    </>
  );
}
