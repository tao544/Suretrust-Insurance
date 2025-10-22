import React from 'react'
import about from '../assets/About.jpg'

const About = () => {
  return (
    <section id="about-us" className="container-fluid py-5 bg-light">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={about}
            alt="About SureTrust Insurance"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>

        {/* Right Text Section */}
        <div className="col-md-6">
          <h6 className="text-primary fw-bold">About Us</h6>
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p className="text-muted">
            SureTrust Insurance is a registered insurance provider offering a wide range of
            coverage for individuals, families, and businesses. Founded on the values of trust,
            transparency, and service, we’ve grown into one of Nigeria’s most dependable
            insurance brands.
          </p>
          <p className="text-muted">
            We believe that insurance should not be complicated or inaccessible. Our approach is
            simple — provide clear options, affordable plans, and fast claims so our customers can
            live confidently every day.
          </p>

          <h4 className="fw-semibold mt-4 text-primary">Our Mission</h4>
          <p className="text-muted">
            To build lasting relationships with our clients by delivering transparent, affordable,
            and reliable insurance coverage that secures their future.
          </p>

          <h4 className="fw-semibold mt-3 text-primary">Our Vision</h4>
          <p className="text-muted">
            To be the most trusted and customer-focused insurance provider in Africa.
          </p>

          <h4 className="fw-semibold mt-3 text-primary">Our Core Values</h4>
          <ul className="list-unstyled text-muted">
            <li>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Integrity:</strong> We keep our promises and uphold honesty in every deal.
            </li>
            <li>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Excellence:</strong> We provide top-notch service from inquiry to claim.
            </li>
            <li>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Empathy:</strong> We care about people, not just policies.
            </li>
            <li>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Innovation:</strong> We use technology to make insurance easier and faster.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About