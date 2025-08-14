import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Innovation from './components/Innovation';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from "./components/Terms.tsx";

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Innovation />
      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />
      <Privacy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <Terms isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
}

export default App;