import React, { useState, useEffect } from "react";

const testimonialsData = [
  [
    {
      name: "Nandini Jampana",
      text: "DIET is the right place to make your dreams come true. I'm thankful to the management and faculty of DIET for providing us value based education that enabled to build our carrers effectively!!",
      image: "/assests/homePage/nandini.jpeg",
    },
    {
      name: "K. Saran Kumar",
      text: "DIET gave me confidence & changed my attitude towards studies. I cherish the memories, the favorite past times I had in my life! I look forward to keep in touch always while I am away.",
      image: "/assests/homePage/sarankumar.jpg",
    },
  ],
  [
    {
      name: "Prudvi",
      text: "I am highly indebted to the entire DIET family, in particular, Dept. of Computer Science for helping me to achieve great heights. DIET has helped me to realize my dreams and achieve my goals. I am proud to be a student of DIET.",
      image: "/assests/homePage/prudhvi.jpg",
    },
    {
      name: "Moulya Ananthapalli",
      text: "DIET is a place where students can find a friendly atmosphere for leraning and building carrers, I feel proud to identify myself as a member of DIET family.",
      image: "/assests/homePage/moulya.jpg",
    },
  ],
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <h2>WHAT OUR STUDENTS SAY</h2>
      <div className="testimonials-container">
        {testimonialsData[index].map((testimonial, i) => (
          <div key={i} className="testimonial">
            <img src={testimonial.image} alt={`Student ${i + 1}`} />
            <strong>{testimonial.name}</strong>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TestimonialSection;
