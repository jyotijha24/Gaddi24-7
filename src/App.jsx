import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FeaturedCars from './components/FeaturedCars';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <SearchBar />
      <FeaturedCars />
      <About />
      <Footer />
    </div>
  );
}

export default App;
