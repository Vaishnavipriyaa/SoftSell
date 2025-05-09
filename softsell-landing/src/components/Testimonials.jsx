import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "SoftSell made selling my unused software licenses so easy and fast. I got a great price and quick payment!",
      stars: 5,
      name: "Vaishnavi",
      job: "Software Engineer at Credex",
    },
    {
      quote:
        "I was able to sell several unused software licenses at a great price. Smooth process and reliable.",
      stars: 4,
      name: "Jyothi",
      job: "Business Manager at Credex",
    },
    {
      quote:
        "Excellent service, I got the best price for my software licenses and the process was quick and easy.",
      stars: 5,
      name: "Yashaswini",
      job: "Product Manager at Tech",
    },
    {
      quote:
        "I was pleasantly surprised by the ease of the whole process. Selling my software licenses was a breeze!",
      stars: 4,
      name: "Druvitha",
      job: "Senior Analyst at Google",
    },
    {
      quote:
        "The best experience! Smooth transaction and I got more than expected for my unused licenses.",
      stars: 5,
      name: "Dheekshitha",
      job: "IT Specialist at Amazon",
    },
    {
      quote:
        "Great service with no hidden charges. I sold my software licenses in a snap.",
      stars: 4,
      name: "Chethana",
      job: "Marketing Director at Google",
    },
    {
      quote:
        "I highly recommend SoftSell. Fast and trustworthy service for selling software licenses!",
      stars: 5,
      name: "Madhuri",
      job: "Software Engineer at Flipkart",
    },
  ];

  const handleNext = () => {
    if (startIndex + 3 < testimonials.length) {
      setStartIndex(startIndex + 3); 
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3); 
    }
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 4);

  return (
    <section className="bg-transparent py-16 text-center px-6">
      <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-lg">
        Customer Testimonials
      </h2>
      <div className="relative">
        {/* Testimonials Container */}
        <div className="testimonials-container flex justify-center gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="text-lg text-white text-opacity-90 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(testimonial.stars)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-2xl" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, index) => (
                  <FaStar key={index + 5} className="text-gray-400 text-2xl" />
                ))}
              </div>
              <p className="font-semibold text-white text-xl">{testimonial.name}</p>
              <p className="text-white text-opacity-70">{testimonial.job}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            className="text-white text-4xl bg-transparent border-none p-4"
            disabled={startIndex === 0}
          >
            &#60;
          </button>
          <button
            onClick={handleNext}
            className="text-white text-4xl bg-transparent border-none p-4"
            disabled={startIndex + 4 >= testimonials.length}
          >
            &#62;
          </button>
        </div>
      </div>
    </section>
  );
}
