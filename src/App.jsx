import { useState } from 'react'
import Grid from './components/Grid'
import ShowCase from './components/ShowCase'
import Testimonials from './components/Testimonials'
import TestiImg1 from './assets/testimonials-1.jpg'
import TestiImg2 from './assets/testimonials-2.jpg'
import TestiImg3 from './assets/testimonials-3.jpg'
function App() {
    let data = [
        {
            title:"Fully Responsive",
            description:"This theme will look great on any device, no matter the size!",
            icon:"fa-regular fa-window-maximize"
        },
        {
            title:"Bootstrap 5 Ready",
            description:"Featuring the latest build of the new Bootstrap 5 framework!",
            icon:"fa-solid fa-layer-group"
        },
        {
            title:"Easy to Use",
            description:"Ready to use with your own content, or customize the source files!",
            icon:"fa-solid fa-terminal"
        }
    ]
    let showcasedata = [
        {
            title:"Fully Responsive Design",
            isOdd:true,
            description:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
            imgUrl:"https://4.img-dpreview.com/files/p/E~C0x0S1959x1102T1200x675~articles/2759540226/Apple_announce-iphone12pro_10132020.jpeg"
        },
        {
            title:"Updated For Bootstrap 5",
            isOdd:false,
            description:"Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
            imgUrl:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title:"Easy to Use & Customize",
            isOdd:true,
            description:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
            imgUrl:"https://img.freepik.com/premium-photo/female-hands-laptop-white-background_488220-15935.jpg"
        }
    ]
    let testiData = [
        {
            name:"Margaret E.",
            feedback:"This is fantastic! Thanks so much guys!",
            img: TestiImg1
        },
        {
            name:"Fred S.",
            feedback:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
            img: TestiImg2
        },
        {
            name:"Sarah W.",
            feedback:"Thanks so much for making these free resources available to us!",
            img: TestiImg3
        }
    ]
    
  return <>
     <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>
        <header className="masthead" style={{backgroundImage:"url('https://assets.weforum.org/article/image/RZ1E1wABkNXxD1b1rOO49bmLKLAsN7k85jQwVYsBOkw.jpg')"}}>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                            <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                    </div>
                                    <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    {
                     data.map((e,i)=>{
                      return <Grid data={e} key={i}/>
                     })
                    }
                </div>
            </div>
        </section> 
        <section className="showcase">
            <div className="container-fluid p-0">
                {    
                    showcasedata.map((e,i)=>{
                      return <ShowCase showcasedata={e} key={i}/>
                    })
                }
            </div>
            </section>
            <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {
                       testiData.map((e,i)=>{
                        return <Testimonials testiData={e} key={i}/>
                       })
                    }
                </div> 
                </div>
            </section>
            <section className="call-to-action text-white text-center" id="signup" style={{backgroundImage:"url('https://assets.weforum.org/article/image/RZ1E1wABkNXxD1b1rOO49bmLKLAsN7k85jQwVYsBOkw.jpg')"}}>
                <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                        <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                            <div className="row">
                                <div className="col">
                                    <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />                                
                                </div>
                                <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                            </div>
                        </form>
                    </div>
                   </div>
                </div>
            </section>
            <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!">About</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contact</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-facebook fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-twitter fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i className="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  </>
}

export default App
