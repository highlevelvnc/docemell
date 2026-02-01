import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-primary-light/30 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-display text-2xl mb-4 bg-gradient-to-r from-primary to-brown bg-clip-text text-transparent">
              Ateliê Doce Mell
            </h3>
            <p className="text-gray-600 font-body text-sm mb-4">
              Doces artesanais de alto padrão com decoração manual. 
              Do simples ao sofisticado, sempre com acabamento impecável.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-primary hover:text-primary-dark transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary-dark transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gray-800">Links Rápidos</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><Link to="/doces-alto-padrao" className="text-gray-600 hover:text-primary transition-colors">Doces de Alto Padrão</Link></li>
              <li><Link to="/doces-festas" className="text-gray-600 hover:text-primary transition-colors">Doces para Festas</Link></li>
              <li><Link to="/brownies" className="text-gray-600 hover:text-primary transition-colors">Brownies</Link></li>
              <li><Link to="/paes-mel" className="text-gray-600 hover:text-primary transition-colors">Pães de Mel</Link></li>
              <li><Link to="/pacotes" className="text-gray-600 hover:text-primary transition-colors">Pacotes</Link></li>
              <li><Link to="/simulador" className="text-gray-600 hover:text-primary transition-colors">Simulador de Orçamento</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gray-800">Contato</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start space-x-2 text-gray-600">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{siteConfig.localizacao.endereco}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>{siteConfig.whatsappFormatado}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>contato@docemell.com.br</span>
              </li>
            </ul>
          </div>

          {/* Área de Atendimento */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gray-800">Região dos Lagos</h4>
            <ul className="space-y-1 font-body text-sm text-gray-600">
              <li>• Iguaba Grande</li>
              <li>• Araruama</li>
              <li>• São Pedro da Aldeia</li>
              <li>• Cabo Frio</li>
              <li>• Saquarema</li>
              <li>• Bacaxá</li>
              <li className="mt-3 text-primary font-semibold">+ Todo o estado do RJ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 font-body">
            <p>© {currentYear} Ateliê Doce Mell - Renata Tavares. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              <Link to="/entrega" className="hover:text-primary transition-colors">Entrega</Link>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
