import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-dark-500">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-primary-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿En qué se diferencia la consultoría de una agencia de reclutamiento?',
      answer: 'No hacemos búsquedas ni colocamos candidatos. Trabajamos sobre el sistema: procesos, métricas, herramientas y modelo operativo. El objetivo es que tu equipo pueda contratar bien de forma sostenida, con claridad y datos.'
    },
    {
      question: '¿Para qué tipo de empresas es adecuado este enfoque?',
      answer: 'Empresas en crecimiento que necesitan profesionalizar su proceso de selección: startups que escalan, scaleups que quieren métricas claras, y equipos que buscan implementar o mejorar un ATS y un modelo de recruiting alineado al negocio.'
    },
    {
      question: '¿Cómo es el proceso desde el primer contacto?',
      answer: 'Revisamos tu contexto, agendamos una conversación estratégica para alinear expectativas y alcance, y te enviamos una propuesta con entregables y plazos. Si hay fit, arrancamos con un kickoff y seguimos el método: diagnóstico, diseño, implementación, medición y mejora continua.'
    },
    {
      question: '¿Trabajan con empresas fuera de Argentina?',
      answer: 'Sí. Trabajo principalmente con empresas en LatAm. Las sesiones son por videollamada y el trabajo se organiza de forma remota, con entregables y seguimiento definidos.'
    },
    {
      question: '¿Qué resultados puedo esperar?',
      answer: 'Depende del alcance del proyecto. En diagnósticos: claridad sobre el estado actual y un roadmap. En implementaciones: procesos definidos, ATS en uso y equipo capacitado. En advisory: métricas visibles y decisiones basadas en datos. El foco está en que el recruiting sea un sistema predecible y escalable.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-dark-500">Preguntas frecuentes</h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Dudas habituales sobre consultoría en procesos de recruiting.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
