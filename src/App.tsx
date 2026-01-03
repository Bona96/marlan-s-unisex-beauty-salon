import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import { VantaCloudsHero, VantaBirdsHero, VantaDotsHero } from './components/VantaHero';

const App = () => {
  return (
    <main className="relative bg-black min-h-screen font-sans scroll-smooth antialiased text-white snap-y snap-mandatory">
      <Navbar />
      {/* for hero and services sections */}
      <VantaDotsHero />
      <Gallery />
      {/* for about and testimonials sections */}
      <VantaBirdsHero />
      {/* for contact and footer sections */}
      <VantaCloudsHero />
    </main>
  );
};

export default App;