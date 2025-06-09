import React from 'react';

const techLogos = [
  'aws-logo.jpg',
  'azure-logo.jpg',
  'gcp-logo.jpg',
  'Gemini-Logo.jpg',
  'OpenAI-Logo-2022.png',
  'claude-logo.jpg',
  'python-logo.jpg',
  'java-logo.png',
  'javascript-logo.png',
  'react-logo.webp',
  'swift-logo.png',
  'kotlin-logo.jpeg',
];

const TechLogosCarousel: React.FC = () => {
  return (
    <div className="w-full py-8">
      <div className="mb-6 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-2 tracking-wide">Our Tech Stack</h3>
      </div>
      <div className="overflow-hidden relative">
        <div className="flex gap-8 animate-scroll-x items-center group hover:[animation-play-state:paused]" style={{animationDuration: '30s'}}>
          {/* Duplicate logos for infinite effect */}
          {[...techLogos, ...techLogos].map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 h-16 w-36 flex items-center justify-center">
              <img
                src={`/${logo}`}
                alt="Tech logo"
                className="max-h-12 max-w-[120px] w-auto h-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TechLogosCarousel; 