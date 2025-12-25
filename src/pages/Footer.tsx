
import MarlanLogo from '../assets/images/marlan-unisex-beauty-salon-logo-white-bg.jpeg';
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-black via-yellow-800 to-black text-gray-300 py-10 px-4 mt-16 shadow-2xl border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {/* Brand & Contact */}
        <div className="flex items-center gap-5">
            <div className="bg-gradient-to-br from-black to-yellow-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                <img src={MarlanLogo} alt="Marlan's Unisex Beauty Salon Logo" className="w-20 h-20 ml-2 inline-block" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white">Marlan's Unisex Beauty Salon</h2>
                    <p className="text-base text-gray-400 mt-1">Your beauty, our passion.</p>
                <div className="mt-3">
                    <span className="block text-xs font-semibold text-gray-400">Email</span>
                    <a href="mailto:info@marlanssalon.com" className="text-cyan-400 text-sm hover:underline">info@marlanssalon.com</a>
                    <span className="block text-xs font-semibold mt-2 text-gray-400">Phone</span>
                    <span className="text-sm text-cyan-400">+256 </span>
                </div>
            </div>
        </div>
        {/* Delivery Info */}
        <div className="text-center md:text-left">
          <span className="block text-lg font-semibold text-gray-100 mb-2">From 09:00am - 08:00pm</span>
          <span className="block text-3xl font-bold text-white mb-2">You can book your session now!</span>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition flex items-center justify-center gap-2">
            Book now <span className="ml-2">→</span>
          </button>
        </div>
        {/* Subscribe */}
        <div className="text-center md:text-left">
          <span className="block text-lg font-semibold text-gray-100 mb-2">Subscribe</span>
          <span className="block text-sm mb-2 text-gray-400">Get specials and updates straight to your inbox.</span>
          <form className="flex gap-2 mt-2">
            <input type="email" placeholder="Email address" className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-48" />
            <button type="submit" className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center">
        <span className="text-xs text-gray-400">© {new Date().getFullYear()} Marlan's Unisex Beauty Salon</span>
        <span className="text-xs mt-2 md:mt-0 flex items-center gap-2">
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
