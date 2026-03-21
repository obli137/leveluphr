import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';
import { resourcesArticlesList } from '../content/resourcesArticles';

type ResourcesTab = 'libros' | 'articulos';

const ResourcesPage: React.FC = () => {
  const location = useLocation();

  const tab: ResourcesTab = location.pathname.includes('/articulos')
    ? 'articulos'
    : 'libros';

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100 bg-white pt-28 md:pt-32">
        <div className="container-custom py-6">
          <Link
            to="/"
            className="inline-flex items-center text-dark-400 hover:text-primary-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      <div className="container-custom py-10 md:py-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-dark-500 mb-3">
              Recursos
            </h1>
            <p className="text-dark-400 text-lg">
              Libros y artículos para ayudar a founders y líderes de reclutamiento a profesionalizar el sistema.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/recursos/libros"
            className={[
              tab === 'libros'
                ? 'btn-primary'
                : 'btn-outline',
            ].join(' ')}
          >
            Libros
          </Link>
          <Link
            to="/recursos/articulos"
            className={[
              tab === 'articulos'
                ? 'btn-primary'
                : 'btn-outline',
            ].join(' ')}
          >
            Artículos
          </Link>
        </div>

        {tab === 'libros' && (
          <div className="mt-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <ScrollReveal direction="right">
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="/documents/donde-se-rompe-el-reclutamiento.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir el PDF del libro Dónde se rompe el reclutamiento"
                  >
                    <img
                      src="/Portada-dsrr.png"
                      alt="Dónde se rompe el reclutamiento - Portada"
                      className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
                    />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="pt-2">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-dark-500 mb-3">
                    Dónde se rompe el reclutamiento
                  </h2>
                  <p className="text-dark-400 leading-relaxed">
                    Cuando el proceso no tiene métricas ni un modelo operativo claro, el recruiting se vuelve
                    reactivo: se encarecen las vacantes, se pierde velocidad y baja la calidad. Este libro
                    propone una forma práctica de diagnosticar, rediseñar y sostener el sistema con criterios
                    operativos y tecnología aplicada.
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-sm text-dark-400 font-medium">
                      Si querés, podés descargar el PDF desde la portada.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}

        {tab === 'articulos' && (
          <div className="mt-10">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <div className="mb-8">
                  <h2 className="text-2xl font-display font-semibold text-dark-500 mb-3">
                    Artículos
                  </h2>
                  <p className="text-dark-400 leading-relaxed">
                    Ensayos y reflexiones sobre procesos, métricas, tecnología e IA aplicada con criterio.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                {resourcesArticlesList().map((article, i) => (
                  <ScrollReveal key={article.slug} delay={0.1 + i * 0.1}>
                    <Link
                      to={`/recursos/articulos/${article.slug}`}
                      className="block rounded-2xl border border-gray-100 p-8 bg-white hover:shadow-sm transition-shadow"
                    >
                      <h3 className="text-2xl font-display font-semibold text-dark-500 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-dark-400 mb-4">Autor: {article.author}</p>
                      <p className="text-dark-400 leading-relaxed">{article.excerpt}</p>
                      <span className="btn-outline mt-6 inline-flex">Leer artículo</span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              <div className="mt-10">
                <div className="rounded-2xl border border-gray-100 p-8 bg-white">
                  <p className="text-dark-400 leading-relaxed">
                    Si querés que escribamos sobre un tema puntual, escribinos por WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/5491136023471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 inline-flex items-center gap-2"
                  >
                    Escribinos por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;

