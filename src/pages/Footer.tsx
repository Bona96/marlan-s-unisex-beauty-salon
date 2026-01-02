import MarlanLogo from '../assets/images/marlan-unisex-beauty-salon-logo-white-bg.jpeg';

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-br from-black via-yellow-800 to-black text-gray-300 py-10 px-4 mt-16 shadow-2xl border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {/* Brand & Contact */}
        <div className="flex items-center gap-5">
            <div className="bg-linear-to-br from-black to-yellow-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                <img src={MarlanLogo} alt="Marlan's Unisex Beauty Salon Logo" className="w-20 h-20 ml-2 inline-block" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white">Marlan's Unisex Beauty Salon</h2>
                    <p className="text-lg text-gray-400 mt-1">Your beauty, our passion.</p>
                <div className="mt-3">
                    <span className="block text-lg font-semibold text-gray-400">Email</span>
                    <a href="mailto:marlansunisexbeautysalon@gmail.com" className="text-yellow-400 text-md hover:underline">
                      marlansunisexbeautysalon@gmail.com
                    </a>
                    <span className="block text-lg font-semibold mt-2 text-gray-400">Phone</span>
                    <span className="text-md text-yellow-400">+256 757767715 </span>
                    <span className="text-md text-yellow-400">+256 779290288 </span>
                </div>
            </div>
        </div>
        {/* Delivery Info */}
        <div className="text-center md:text-left">
          <span className="block text-lg font-semibold text-gray-100 mb-2">From 09:00am - 08:00pm</span>
          <span className="block text-xl font-bold text-white mb-2">You can book your session now!</span>
          <button className="bg-linear-to-r from-black via-yellow-500 to-cyan-900 hover:bg-cyan-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition flex items-center justify-center gap-2 text-lg">
            Book now <span className="ml-2">→</span>
          </button>
        </div>
        {/* Subscribe */}
        <div className="text-center md:text-left">
          <span className="block text-xl font-semibold text-gray-100 mb-2">Subscribe</span>
          <span className="block text-md mb-2 text-gray-400">Get specials and updates straight to your inbox.</span>
          <form className="flex gap-2 mt-2">
            <input type="email" placeholder="Email address" className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-48" />
            <button type="submit" className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center">
        <span className="text-md text-yellow-400">© {new Date().getFullYear()} Marlan's Unisex Beauty Salon</span>
        <span className="text-md mt-2 md:mt-0 flex items-center gap-2">
          Powered by
          <a
            href="https://knihtdigitalsolutions.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-700 hover:bg-cyan-800 text-white px-3 py-1 rounded-lg font-semibold transition shadow-md"
          >
            KNiHT Digital Solutions
          </a>
        </span>
      </div>
    </footer>
  );
}
