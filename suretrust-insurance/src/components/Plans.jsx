import React from 'react'

const PlanItems = [
  {
    title: 'Basic Plan',
    price: '₦10,000/month',
    description: 'Perfect for individuals who want essential protection.',
    features: [
      'Life insurance up to ₦5 million',
      'Health coverage (basic hospital access)',
      'Accident benefits',
      '24/7 customer support',
    ],
    buttonText: 'Get Started',
  },
  {
    title: 'Family Plan',
    price: '₦18,000/month',
    description: 'Ideal for families that want peace of mind and shared protection.',
    features: [
      'Life insurance for all family members',
      'Comprehensive health insurance',
      'Auto coverage for one vehicle',
      '24-hour emergency response',
    ],
    buttonText: 'Choose Plan',
  },
  {
    title: 'Premium Plan',
    price: '₦25,000/month',
    description: 'Our all-inclusive protection for individuals, families, or business owners.',
    features: [
      'Life, Health, Auto & Property insurance',
      'Travel insurance add-on',
      'Priority claim processing',
      'Free annual risk review with an agent',
      'Dedicated relationship manager',
    ],
    buttonText: 'Select Plan',
  },
]

const Plans = () => {
  return (
    <section className="container-fluid py-5 bg-light" id="plans">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Plans</h2>
        <p className="text-secondary">
          We’ve designed flexible plans to fit every lifestyle and budget.
        </p>
      </div>

      <div className="row justify-content-center">
        {PlanItems.map((plan, index) => (
          <div
            className="col-md-4 mb-4 d-flex align-items-stretch"
            key={index}
          >
            <div className="card shadow-sm border-0 rounded-4 w-100">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{plan.title}</h5>
                <h6 className="text-primary mb-3">{plan.price}</h6>
                <p className="card-text text-muted">{plan.description}</p>

                <ul className="list-group list-group-flush text-start mb-3">
                  {plan.features.map((feature, i) => (
                    <li
                      className="list-group-item border-0 py-1"
                      key={i}
                    >
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#" className="btn btn-primary rounded-pill px-4">
                  {plan.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans