import React from 'react'

const Services = () => {
  return (
    <section className="container-fluid py-5 bg-dark text-light" id="services">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-light">Our Services</h2>
        <p className="text-light">
          We provide insurance solutions that meet your personal and business needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-lg bg-secondary text-light rounded-4">
            <div className="card-body">
              <h4 className="card-title fw-semibold text-warning">
                <i className="bi bi-heart-pulse-fill me-2"></i>Life Insurance
              </h4>
              <p className="card-text text-light">
                Your loved ones deserve financial stability, even when you’re not there.
                Our life insurance policies ensure that your family’s future is secure — 
                from education support to daily living needs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-lg bg-secondary text-light rounded-4">
            <div className="card-body">
              <h4 className="card-title fw-semibold text-warning">
                <i className="bi bi-hospital-fill me-2"></i>Health Insurance
              </h4>
              <p className="card-text text-light">
                Good health should never be a luxury. Get access to affordable healthcare plans 
                that cover hospital visits, emergencies, and specialized treatment — ensuring you 
                and your family stay healthy all year.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-lg bg-secondary text-light rounded-4">
            <div className="card-body">
              <h4 className="card-title fw-semibold text-warning">
                <i className="bi bi-car-front-fill me-2"></i>Auto Insurance
              </h4>
              <p className="card-text text-light">
                From minor repairs to major accidents, our auto insurance gives you peace of mind 
                every time you hit the road. We offer flexible options for individuals, fleets, 
                and ride-hailing drivers.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-lg bg-secondary text-light rounded-4">
            <div className="card-body">
              <h4 className="card-title fw-semibold text-warning">
                <i className="bi bi-house-door-fill me-2"></i>Property Insurance
              </h4>
              <p className="card-text text-light">
                Your home and business assets are valuable — protect them against fire, theft, or 
                natural disasters. With SureTrust, you can rebuild with confidence after any setback.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-lg bg-secondary text-light rounded-4">
            <div className="card-body">
              <h4 className="card-title fw-semibold text-warning">
                <i className="bi bi-airplane-fill me-2"></i>Travel Insurance
              </h4>
              <p className="card-text text-light">
                Whether you’re traveling within or outside the country, we’ve got you covered. 
                Our travel plans protect you from unexpected incidents like trip cancellations, 
                lost luggage, or medical emergencies abroad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services