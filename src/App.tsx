import Navbar from './components/Navbar';
import HomeSlider from './pages/HomeSlider';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import { VantaCloudsHero, VantaBirdsHero } from './components/VantaHero';

const App = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <main>
        <HomeSlider />
        <Services />
        {/* for about us */}
        <VantaBirdsHero />
        <Gallery />
        {/* for contact */}
        <VantaCloudsHero />
      </main>
    </div>
  );
};

export default App;