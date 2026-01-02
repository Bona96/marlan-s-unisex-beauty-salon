import Navbar from './components/Navbar';
import HomeSlider from './pages/HomeSlider';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import VantaHero from './components/VantaHero';

const App = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <main>
        <HomeSlider />
        <Services />
        <VantaHero />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;