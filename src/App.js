import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Dock from './components/Dock';

function App() {
  return (
    <div className="bg-ink-950 font-sans text-zinc-200 leading-normal min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Footer />
      <Dock />
    </div>
  );
}

export default App;
