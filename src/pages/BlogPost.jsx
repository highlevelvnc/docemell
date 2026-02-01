import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Calendar, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function BlogPost() {
  const { slug } = useParams();
  const post = siteConfig.blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-28 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl mb-4 text-gray-800">Post não encontrado</h1>
          <Link to="/blog" className="text-primary font-body hover:underline">Voltar para o blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={post.titulo} description={post.resumo} />
      <div className="min-h-screen bg-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center space-x-2 text-primary font-body hover:underline mb-8">
              <ArrowLeft size={20} />
              <span>Voltar para o blog</span>
            </Link>

            <div className="aspect-video bg-gradient-to-br from-primary-light to-brown-light rounded-2xl mb-8 flex items-center justify-center">
              <p className="font-body text-gray-400">Imagem do post</p>
            </div>

            <div className="flex items-center space-x-2 text-gray-500 mb-4">
              <Calendar size={18} />
              <span className="font-body">{new Date(post.data).toLocaleDateString('pt-BR')}</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl mb-6 text-gray-800">{post.titulo}</h1>
            
            <div className="prose prose-lg max-w-none font-body text-gray-700 leading-relaxed mb-12">
              <p className="text-xl text-gray-600 mb-6">{post.resumo}</p>
              <p>{post.conteudo}</p>
            </div>

            <div className="bg-gradient-to-br from-primary to-brown rounded-2xl p-8 text-center">
              <h3 className="font-display text-3xl mb-4 text-white">Gostou do conteúdo?</h3>
              <p className="font-body text-white/90 mb-6">Entre em contato e faça sua encomenda!</p>
              <a
                href={generateWhatsAppLink('Olá! Li o blog e gostaria de fazer uma encomenda!')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-8 py-3 rounded-full font-body font-semibold hover:shadow-xl transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
