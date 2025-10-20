import React from 'react'
import about from '../assets/About.jpg'
const About = () => {
  return (
    <div className='container-fluid'>
      <main className='row colColor'>
      <div className="col bg-primary"></div>
      <div className="col bg-black"></div>



      </main>
    <main className="row">
    <div className="col">
      <img src={about}width='100%' alt="" />
    </div>
    <div className="col">
       <h6>About Us </h6>
       <h2>Who We Are</h2> 
        <p>
          SureTrust Insurance is a registered insurance provider offering a wide range of coverage for individuals families, and businesses. Founded on the values of trust, transparency, and service, we’ve grown into one of Nigeria’s most dependable insurance brands.
        </p>  
         <p>
            We believe that insurance should not be complicated or inaccessible. Our approach is simple — provide 
            clear options, affordable plans, and fast claims so our customers can live confidently every day. 
         </p>
    <h4>Our Mission:</h4> 
<p>
  To build lasting relationships with our clients by delivering transparent, affordable, and reliable insurance 
  coverage that secures their future. 
</p>
<h4>Our Vision:</h4> 
To be the most trusted and customer-focused insurance provider in Africa. 
Our Core Values: 
<li>Integrity: We keep our promises and uphold honesty in every deal.</li>
<li>Excellence: We provide top-notch service from inquiry to claim.</li> 
<li>Empathy: We care about people, not just policies.</li> 
<li>Innovation: We use technology to make insurance easier and faster.</li> 
    </div>



    </main>





    </div>
  )
}

export default About
