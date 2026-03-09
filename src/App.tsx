import Header     from './components/Header';
import Hero       from './components/Hero';
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
        <About />
        <Services />
        <Innovation />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
