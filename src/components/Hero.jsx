import React from 'react'
import surelogo from '../assets/Surelogo-light.png'
import Slider1 from '../assets/Slide-1.jpg'
import Slider2 from '../assets/Slider-2.jpg'
import Slider3 from '../assets/Slider-3.jpg'
const Hero = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark text-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={surelogo} height="45px" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-us">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#plans">Plans</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonials">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval ="2000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Slider1} className="d-block w-100" alt="..." />
      <div className='overlay'></div> 
      <div className="carousel-caption d-none d-md-block">
        <h5 className='fs-1'>Protect What Matters Most</h5>
        <p>At SureTrust Insurance, your safety and financial peace come first. From life to property, we provide 
           trusted coverage for individuals, families, and businesses across Nigeria.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Slider2} className="d-block w-100" alt="..." />
      <div className='overlay'></div>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='fs-1'>Insurance You Can Count On</h5>
        <p>Life happens — but you can be ready. Our flexible insurance plans give you confidence to face the future, 
          knowing you’re fully covered.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Slider3} className="d-block w-100" alt="..." />
      <div className='overlay'></div>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='fs-1'>Your Future, Secured.</h5>
        <p>Join thousands of Nigerians who trust SureTrust for affordable, transparent, and fast insurance solutions. 
          Your tomorrow begins with the right protection today.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Hero
