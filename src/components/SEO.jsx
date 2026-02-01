import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config';

export default function SEO({ 
  title, 
  description, 
  keywords,
  type = 'website',
  image = '/og-image.jpg'
}) {
  const siteTitle = title ? `${title} | ${siteConfig.nome}` : siteConfig.seo.titulo;
  const siteDescription = description || siteConfig.seo.descricao;
  const siteKeywords = keywords || siteConfig.seo.palavrasChave.join(', ');
  const siteUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={siteConfig.nome} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content={siteConfig.proprietaria} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
}
