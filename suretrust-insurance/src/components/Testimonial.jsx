import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const testiContent = [
    {
      name: "Amina Bello",
      location: "Ibadan",
      content:
        "When I lost my husband last year, SureTrust Insurance stood by me. They processed our life insurance claim quickly and treated me with compassion. I’m grateful for their support during such a difficult time.",
    },
    {
      name: "Michael Adeoye",
      location: "Abuja",
      content:
        "SureTrust has been a lifesaver for my family. My daughter needed emergency surgery, and the health insurance covered almost everything. The claim was processed without stress.",
    },
    {
      name: "Grace Johnson",
      location: "Lagos",
      content:
        "I had an accident on Third Mainland Bridge, and I was terrified about the cost of repairs. SureTrust handled everything — within days, my car was back on the road. They really live up to their name",
    },
    {
      name: "Bola Nnaji",
      location: "Port-Harcourt",
      content:
        "As a small business owner, I appreciate their honesty. I insured my shop and goods, and when a fire incident happened, they paid promptly. Their transparency is top-notch.",
    },
    {
      name: "Tunde Alabi",
      location: "Lagos",
      content:
        "The Family Plan gives me peace of mind knowing my wife and kids are covered no matter what happens. SureTrust truly cares about families — I recommend them to everyone.",
    },

    {
      name: "Azeez Abdullahi",
      location: "Kaduna",
      content:
        "The Family Plan gives me peace of mind knowing my wife and kids are covered no matter what happens. SureTrust truly cares about families — I recommend them to everyone.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(testiContent.length / 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [testiContent.length]);

  const start = current * 2;
  const visibleContent = testiContent.slice(start, start + 2);

  return (
    <section className="container-fluid bg-dark py-5 " id="testimonials">
      <div className=" text-center text-white mb-5">
       
          <h2 className="fw-bold"> What our Clients say </h2>
       <p>Real Stories from satisfied SureTrust Customers</p>
      </div>

      <div className="row justify-content-center gap-4 transition-all">
        {visibleContent.map((item, index) => (
          <div key={index} className="bg-white col-md-5 rounded-3 shadow-sm  p-4 text-start">
            <p className="text-muted fst-italic">{item.content}</p>
            <p className="fw-semibold text-primary mt-3 mb-1">{item.name}</p>
            <p className="text-secondary small">{item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;