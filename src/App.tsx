import Header     from './components/Header';
import Hero       from './components/Hero';
import Ticker     from './components/Ticker';
import About      from './components/About';
import Services   from './components/Services';
import Innovation from './components/Innovation';
import Footer     from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Innovation />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
