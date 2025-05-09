export default function Hero() {
    return (
      <section className="bg-transparent text-white py-20 relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold">Welcome to SoftSell</h1>
          <p className="text-lg mt-4">Sell your unused software licenses for cash!</p>
          
          <p className="text-md mt-6 text-white text-opacity-80">
            Simply click the button below to start selling your unused licenses. The process is quick and easy!
          </p>
          
          <button 
            className="mt-8 px-6 py-3 bg-black-200 text-white font-semibold text-xl rounded-lg shadow-lg hover:bg-black-230 transition duration-300"
            onClick={() => window.scrollTo({ top: document.getElementById('how-it-works').offsetTop, behavior: 'smooth' })}
          >
            Start Selling
          </button>
        </div>
      </section>
    );
  }
  