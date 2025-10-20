import React from 'react'


const PlanItems = [
  {
    title: ' Basic Plan',
    price: '#10,000/month',
    description: 'Perfect for individuals who want essential protection.',
    features:[
      'Life insurance up to ₦5 million ',
      'Health coverage (basic hospital access) ',
      'Accident benefits',
       '24/7 customer support',
    ],
    buttonText:'Get Started'
  },

  {
    title: 'Family Plan',
    price: '#18,000/month',
    description: 'Ideal for families that want peace of mind and shared protection. ',
    features:[
      'Life insurance for all family members ',
      'Comprehensive health insurance ',
      'Auto coverage for one vehicle',
       '24-hour emergency response',
    ],
    buttonText:'Choose Plan'
  },

  {
    title: ' Premium Plan',
    price: '#25,000/month',
    description: 'Our all-inclusive protection for individuals, families, or business owners.',
    features:[
      'Life, Health, Auto & Property insurance ',
      'Travel insurance add-on',
      'Priority claim processing',
      'Free annual risk review with an agent',
      'Dedicated relationship manager',
    ],
    buttonText:'Select Plan'
  }
]



const Plans = () => {
  return (
    <div className='container-fluid'>
     <main className="row">
      <h2>Our Plans</h2> 
      <p>We’ve designed flexible plans to fit every lifestyle and budget.</p> 
     </main>

     <main className="row">
      {PlanItems.map((plan, index) => (
        <section className="col-4">
          <h5>{plan.title}</h5>
          <h5>{plan.price}</h5>
          <p>{plan.description}</p>

          <ul class="list-group list-group-flush">
              {plan.features.map((feature, i) =>(
              <li class="list-group-item" key={i}>{feature}</li> 

            ))}
          </ul>
          <a href="#" className="card-link">{plan.buttonText}</a>
        </section>
      ))}

     </main>


    </div>
  )
}

export default Plans
