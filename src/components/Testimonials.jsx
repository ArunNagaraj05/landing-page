import React from 'react'

function Testimonials({testiData}) {
  return <>
        <div className="col-lg-4">
             <div className="testimonial-item mx-auto mb-5 mb-lg-0">
             <img className="img-fluid rounded-circle mb-3" src={testiData.img} alt="..." />
             <h5>{testiData.name}</h5>
             <p className="font-weight-light mb-0">"{testiData.feedback}"</p>
             </div>
         </div>
  </>
}

export default Testimonials
