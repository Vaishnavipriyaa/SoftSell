import { FaShieldAlt, FaBolt, FaThumbsUp, FaHandshake, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-transparent py-16 text-center px-6 relative">
      <div className="max-w-6xl mx-auto p-12 bg-opacity-30 backdrop-blur-md rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-lg">
          Why Choose Us
        </h2>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-blue-400 text-6xl mb-4 animate-pulse" />
            <h3 className="text-2xl font-semibold text-white mb-2">Secure Transfers</h3>
            <p className="text-white text-opacity-80 text-center">
              We ensure all transactions are safe and reliable.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaBolt className="text-yellow-400 text-6xl mb-4 animate-pulse" />
            <h3 className="text-2xl font-semibold text-white mb-2">Fast Process</h3>
            <p className="text-white text-opacity-80 text-center">
              Get quotes and payments quickly, no delays.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaThumbsUp className="text-green-400 text-6xl mb-4 animate-pulse" />
            <h3 className="text-2xl font-semibold text-white mb-2">Trusted by Sellers</h3>
            <p className="text-white text-opacity-80 text-center">
              Thousands trust SoftSell for license resale.
            </p>
          </div>
        </div>

        <div className="my-12"></div>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <FaHandshake className="text-purple-400 text-6xl mb-4 animate-pulse" />
            <h3 className="text-2xl font-semibold text-white mb-2">Fair Pricing</h3>
            <p className="text-white text-opacity-80 text-center">
              We give you the best market value, guaranteed.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeadset className="text-teal-400 text-6xl mb-4 animate-pulse" />
            <h3 className="text-2xl font-semibold text-white mb-2">Customer Support</h3>
            <p className="text-white text-opacity-80 text-center">
              Our dedicated team is available 24/7 for assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
