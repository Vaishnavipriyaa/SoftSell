import { useState } from "react";

export default function ContactForm() {
  return (
    <section className="bg-transparent py-16 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">
        Contact Us
      </h2>
      <form className="max-w-lg mx-auto space-y-6 backdrop-blur-md bg-opacity-20 bg-white rounded-0.2xl p-10 shadow-xl">
        <div>
          <label htmlFor="name" className="text-white block mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-white block mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-white block mb-2">Your Message</label>
          <textarea
            id="message"
            className="w-full p-3 rounded-md"
            rows="4"
            placeholder="Enter your message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black-300 text-white py-3 rounded-md hover:bg-black-500 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
