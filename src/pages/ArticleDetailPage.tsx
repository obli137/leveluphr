import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';
import { getResourcesArticleBySlug } from '../content/resourcesArticles';

const estimateReadingTimeMinutes = (text: string): number => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  // Supuesto simple: 200 palabras/minuto para lectura general.
  return Math.max(1, Math.round(words / 200));
};

const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getResourcesArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <div className="border-b border-gray-100 bg-white pt-28 md:pt-32">
          <div className="container-custom py-6">
            <Link
              to="/recursos/articulos"
              className="inline-flex items-center text-dark-400 hover:text-primary-500 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={18} className="mr-2" />
              Volver a Artículos
            </Link>
          </div>
        </div>

        <div className="container-custom py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-dark-500 mb-3">
              Artículo no encontrado
            </h1>
            <p className="text-dark-400 leading-relaxed">
              El enlace al artículo puede estar incompleto o ya no existir.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const paragraphs = article.content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const readingTime = estimateReadingTimeMinutes(article.content);

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100 bg-white pt-28 md:pt-32">
        <div className="container-custom py-6">
          <Link
            to="/recursos/articulos"
            className="inline-flex items-center text-dark-400 hover:text-primary-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver a Artículos
          </Link>
        </div>
      </div>

      <div className="container-custom py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <h1 className="text-3xl md:text-5xl font-display font-semibold text-dark-500 mb-3">
                {article.title}
              </h1>
              <div className="flex flex-wrap gap-x-6 gap-y-2 items-center text-sm text-dark-400 mb-6">
                <span>
                  Autor: <span className="text-dark-500 font-medium">{article.author}</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span>{readingTime} min de lectura</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-7">
            {paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.02}>
                <p className="text-dark-400 text-base md:text-lg leading-relaxed">{p}</p>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <ScrollReveal>
              <div className="rounded-2xl border border-gray-100 p-8 bg-white">
                <h2 className="text-2xl font-display font-semibold text-dark-500 mb-2">
                  ¿Querés que lo bajemos a tu caso?
                </h2>
                <p className="text-dark-400 leading-relaxed mb-6">
                  Si estás armando un proceso de recruiting más predecible (diagnóstico, métricas, ATS e IA),
                  escribime y coordinamos una conversación estratégica.
                </p>
                <a
                  href="https://wa.me/5491136023471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Escribinos por WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;

