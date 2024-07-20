import React from 'react'
function ShowCase({showcasedata}) {
  return <>
     
                <div className="row g-0">
                    {
                     showcasedata.isOdd?(
                        <>
                     <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url(${showcasedata.imgUrl})`}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{showcasedata.title}</h2>
                        <p className="lead mb-0">{showcasedata.description}</p>
                    </div>
                    </>
                     ):(
                    <>
                    <div className="col-lg-6 text-white showcase-img" style={{backgroundImage:`url(${showcasedata.imgUrl})`}}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>{showcasedata.title}</h2>
                        <p className="lead mb-0">{showcasedata.description}</p>
                    </div>
                    </>
                     )
                    }
                </div>
            
  </>
}

export default ShowCase
