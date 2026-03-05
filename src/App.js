import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 font-sans leading-normal tracking-normal text-gray-800">
      <Hero />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
