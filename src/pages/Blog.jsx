import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Calendar, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config';

export default function Blog() {
  return (
    <>
      <SEO title="Blog" description="Dicas, receitas e novidades sobre doces finos e confeitaria artesanal. Aprenda mais sobre o mundo dos doces de alto padrão." />
      <div className="min-h-screen bg-gradient-to-br from-primary-light/20 to-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-6xl mb-6 text-gray-800">Blog</h1>
              <p className="font-body text-xl text-gray-600">Dicas, tendências e novidades do mundo da confeitaria</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-light to-brown-light flex items-center justify-center">
                    <p className="font-body text-gray-400 text-sm">Imagem do post</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar size={16} />
                      <span className="font-body">{new Date(post.data).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <h2 className="font-display text-2xl mb-3 text-gray-800 group-hover:text-primary transition-colors">
                      {post.titulo}
                    </h2>
                    <p className="font-body text-gray-600 mb-4 line-clamp-2">
                      {post.resumo}
                    </p>
                    <div className="flex items-center text-primary font-body font-semibold">
                      <span>Ler mais</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
