import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Início' },
    { to: '/doces-alto-padrao', label: 'Alto Padrão' },
    { to: '/doces-festas', label: 'Festas' },
    { to: '/brownies', label: 'Brownies' },
    { to: '/paes-mel', label: 'Pães de Mel' },
    { to: '/pacotes', label: 'Pacotes' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/contato', label: 'Contato' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-2xl md:text-3xl bg-gradient-to-r from-primary to-brown bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Ateliê Doce Mell
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm tracking-wide transition-colors relative group ${
                  location.pathname === link.to
                    ? 'text-primary font-semibold'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-body text-sm tracking-wide py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-gray-700 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
