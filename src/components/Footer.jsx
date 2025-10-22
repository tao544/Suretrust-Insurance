import React from 'react'
import footerLogo from "../assets/Surelogo-light.png"

const Footer = () => {
  return (
    <footer className="container-fluid bg-black text-light pt-5">
      <div className="row w-75 mx-auto mb-5">
        {/* Brand Section */}
        <div className="col-md-4 mb-4">
          <img src={footerLogo} height="55" alt="SureTrust Logo" className="mb-3" />
          <p className="text-light">Your Future, Secured.</p>
          <p className="text-light small mb-0">
            SureTrust Insurance provides reliable coverage for your health, assets, and travels — ensuring peace of mind always.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3 text-uppercase">Quick Links</h5>
          <ul className="list-unstyled text-light">
            <li><a href="#home" className="text-light text-decoration-none hover-link">Home</a></li>
            <li><a href="#about" className="text-light text-decoration-none hover-link">About</a></li>
            <li><a href="#services" className="text-light text-decoration-none hover-link">Services</a></li>
            <li><a href="#plans" className="text-light text-decoration-none hover-link">Plans</a></li>
            <li><a href="#contact" className="text-light text-decoration-none hover-link">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3 text-uppercase">Newsletter Signup</h5>
          <p className="text-light">Subscribe to receive insurance tips and plan updates.</p>
          <div className="d-flex">
            <input
              type="email"
              className="form-control me-2 bg-dark text-light border-secondary"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary fw-semibold">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3 bg-primary text-white">
        © {new Date().getFullYear()} SureTrust Insurance. All Rights Reserved. <br />
        Designed by <span className="fw-bold">Adepoju Taoheed</span>.
      </div>
    </footer>
  )
}

export default Footer