import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const FinalCTA: React.FC = () => {
  return (
    <SectionWrapper className="bg-gray-900 text-white" style={{backgroundImage: `radial-gradient(circle at center, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 1))`}}>
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter" style={{textShadow: '0 0 15px rgba(255, 255, 255, 0.1)'}}>
          Arsanızın Potansiyelini Birlikte Ortaya Çıkaralım
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          Detaylı bilgi ve ücretsiz analiz raporu için hemen benimle iletişime geçin.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto flex justify-center items-center">
        <div className="text-center">
          <img src="https://i.ibb.co/spwRFCgm/Whats-App-G-rsel-2025-10-30-saat-15-01-59-52a64fa1.jpg" alt="Bedirhan Hacı" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
          <h3 className="text-2xl font-bold">Bedirhan Hacı</h3>
          <div className="mt-6 flex justify-center space-x-4">
             {/* Social media icons can be placed here */}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-green-400">
              <span className="bg-green-500/10 p-2 rounded">✅ 24 saat içinde geri dönüş</span>
              <span className="bg-green-500/10 p-2 rounded">✅ Hiçbir bağlayıcılık yok</span>
              <span className="bg-green-500/10 p-2 rounded">✅ 100% gizlilik garantisi</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FinalCTA;