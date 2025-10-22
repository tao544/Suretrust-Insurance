import React from 'react'

const Contact = () => {
  return (
    <section className="container-fluid py-5 bg-light" id="contact">
      <div className="row align-items-center justify-content-center">
        
        {/* Left Side - Contact Info */}
        <div className="col-md-5 mb-4 mb-md-0">
          <h2 className="fw-bold mb-3">Get in Touch</h2>
          <p>
            Have questions about our insurance plans or need help choosing the right coverage? 
            We're always happy to assist you.
          </p>
          <ul className="list-unstyled mt-4">
            <li className="mb-3">
              <i className="bi bi-geo-alt-fill text-primary me-2"></i>
              <span>20, Church Street, Ikeja, Lagos</span>
            </li>

            <li className="mb-3">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              <span>+234 78 4050 54</span>
            </li>

            <li className="mb-3">
              <i className="bi bi-envelope-fill text-primary me-2"></i>
              <span>support@sureinsurance.com</span>
            </li>
          </ul>

          <div className="mt-4">
            <a href="#" className="text-primary me-3 fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-primary me-3 fs-5"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-primary fs-5"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 bg-white shadow-sm p-4 rounded">
          <h4 className="fw-semibold mb-4">Send us a Message</h4>
          <form>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Subject" required />
            </div>

            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary px-4">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  )



  
}

export default Contact