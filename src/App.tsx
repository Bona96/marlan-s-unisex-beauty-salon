import Navbar from './components/Navbar';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import { VantaCloudsHero, VantaBirdsHero, VantaDotsHero } from './components/VantaHero';

const App = () => {
  return (
    <main className="bg-black h-screen font-sans">
      <Navbar />
      <VantaDotsHero />
      <section className="flex flex-col gap-20 mt-20">
        <Services />
        {/* for about us */}
        <VantaBirdsHero />
        <Gallery />
        {/* for contact */}
        <VantaCloudsHero />
      </section>
    </main>
  );
};

export default App;