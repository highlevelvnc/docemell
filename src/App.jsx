import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Simulador from './pages/Simulador';
import Pacotes from './pages/Pacotes';
import DocesAltoPadrao from './pages/DocesAltoPadrao';
import DocesFestas from './pages/DocesFestas';
import Brownies from './pages/Brownies';
import PaesMel from './pages/PaesMel';
import Sobre from './pages/Sobre';
import Depoimentos from './pages/Depoimentos';
import Entrega from './pages/Entrega';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contato from './pages/Contato';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}
      
      {!loading && (
        <Router>
          <ScrollToTopOnMount />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doces-alto-padrao" element={<DocesAltoPadrao />} />
                <Route path="/doces-festas" element={<DocesFestas />} />
                <Route path="/brownies" element={<Brownies />} />
                <Route path="/paes-mel" element={<PaesMel />} />
                <Route path="/pacotes" element={<Pacotes />} />
                <Route path="/simulador" element={<Simulador />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/depoimentos" element={<Depoimentos />} />
                <Route path="/entrega" element={<Entrega />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contato" element={<Contato />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
          </div>
        </Router>
      )}
    </HelmetProvider>
  );
}

export default App;
