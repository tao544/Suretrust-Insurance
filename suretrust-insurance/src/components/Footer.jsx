import React from 'react'
import footerLogo from "../assets/Surelogo-light.png"
const Footer = () => {
  return (
    <footer class ="container-fluid bg-black text-light">
        <div className="row mx-auto w-75 mb-5">
            <div className="col">
                <img src={footerLogo}  height="55px" alt="" />
                <p>Your Future, Secured.</p>
            </div>
            <div className="col">
                <h4>Quick Links:</h4> 
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Plans</li>
                    <li>Contact</li>
            </div>
            <div className="col">
                <h4>Newsletter Signup: </h4>
                <p>Subscribe to receive insurance tips and plan updates.</p> 
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
        <div className="row">
            <div className="col bg-primary py-3">
                © 2025 SureTrust Insurance. All Rights Reserved. 
                Designed with by Adepoju Taoheed.
            </div>
        </div>





    </footer>
  )
}

export default Footer
