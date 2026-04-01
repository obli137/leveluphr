import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingWhatsAppButton from './components/common/FloatingWhatsAppButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import About from './pages/About';
import HandbookPage from './pages/HandbookPage';
import ResourcesPage from './pages/ResourcesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import TrainingPage from './pages/TrainingPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/handbook" element={<HandbookPage />} />
          <Route path="/formacion" element={<TrainingPage />} />
          <Route path="/recursos" element={<ResourcesPage />} />
          <Route path="/recursos/libros" element={<ResourcesPage />} />
          <Route path="/recursos/articulos" element={<ResourcesPage />} />
          <Route
            path="/recursos/articulos/:slug"
            element={<ArticleDetailPage />}
          />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;