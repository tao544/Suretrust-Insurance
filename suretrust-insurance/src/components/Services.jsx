import React from 'react'

const Services = () => {
  return (
   <div className='container-fluid'>
       <main className="row">
         <h2>Our Services </h2>
         <p>
            We provide insurance solutions that meet your personal and business needs.
         </p>        
       </main>
        {/* ---------firstcolumn--------------- */}
       <main className="row">
         <div className="col-4">
            <h4>Life Insurance</h4> 
            <p>
             Your loved ones deserve financial stability, even when you’re not there. Our life insurance policies ensure 
             that your family’s future is secure — from education support to daily living needs.
           </p>
         </div>
            {/* -----------secondcolumn-------------------- */}
         <div className="col-4">
            <h4>Health Insurance</h4> 
            <p>
             Good health should never be a luxury. Get access to affordable healthcare plans that cover hospital 
             visits, emergencies, and specialized treatment — ensuring you and your family stay healthy all year. 
           </p>
         </div>
            {/* --------third-column----------- */}
         <div className="col-4">
            <h4>Auto Insurance</h4> 
            <p>
            From minor repairs to major accidents, our auto insurance gives you peace of mind every time you hit 
            the road. We offer flexible options for individuals, fleets, and ride-hailing drivers.
           </p>
         </div>
            {/* --------fourth-column----------- */}
         <div className="col-4">
            <h4>Property Insurance</h4> 
            <p>
            Your home and business assets are valuable — protect them against fire, theft, or natural disasters. With 
            SureTrust, you can rebuild with confidence after any setback.
           </p>
         </div>
            {/* --------fifth-column----------- */}
         <div className="col-4">
            <h4>Travel Insurance</h4> 
            <p>
             Whether you’re traveling within or outside the country, we’ve got you covered. Our travel plans protect 
             you from unexpected incidents like trip cancellations, lost luggage, or medical emergencies abroad. 
           </p>
         </div>
       </main>
   </div>
  )
}

export default Services
