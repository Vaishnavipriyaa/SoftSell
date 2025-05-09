import { useState } from 'react'; 
export default function HowItWorks() {
    const [file, setFile] = useState(null);
    const [valuation, setValuation] = useState(null);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleValuationRequest = () => {
      if (file) {
        setValuation(`Estimated Value: $500`);
      } else {
        alert("Please upload a license file first.");
      }
    };
  
    const handlePaymentAcceptance = () => {
      alert("Payment processing...");
    };
  
    return (
      <section id="how-it-works" className="bg-transparent py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              <span role="img" aria-label="upload">📤</span> 1. Upload License
            </h3>
            <p className="text-white mb-4">Upload your unused software licenses to our platform.</p>
            <input
              type="file"
              className="border border-gray-300 p-2 rounded-md text-black mb-4"
              accept=".pdf,.docx,.txt"
              onChange={handleFileChange}
            />
            {file && <p className="text-white text-sm">File Uploaded: {file.name}</p>}
          </div>
  
          <div className="text-center flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              <span role="img" aria-label="valuation">📊</span> 2. Get Valuation
            </h3>
            <p className="text-white mb-4">We provide a fair and transparent valuation for your licenses.</p>
            <button
              onClick={handleValuationRequest}
              className="bg-black-200 text-white p-2 rounded-md"
            >
              Req. Valuation
            </button>
            {valuation && <p className="text-white mt-4">{valuation}</p>}
          </div>
  
          <div className="text-center flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              <span role="img" aria-label="payment">💰</span> 3. Get Paid
            </h3>
            <p className="text-white mb-4">Once you accept the offer, we process payment quickly.</p>
            <button
              onClick={handlePaymentAcceptance}
              className="bg-black-200 text-white p-2 rounded-md"
            >
              Accept Offer
            </button>
          </div>
        </div>
      </section>
    );
  }
  