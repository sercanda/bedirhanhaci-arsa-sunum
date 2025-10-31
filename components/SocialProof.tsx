import React from 'react';
import SectionWrapper from './SectionWrapper';

const SocialProof: React.FC = () => {
  return (
    <SectionWrapper className="bg-white py-8">
       <footer className="text-center text-gray-400 text-sm pt-8 border-t">
            <p>&copy; {new Date().getFullYear()} Bedirhan Hacı - RE/MAX Parla. Tüm hakları saklıdır.</p>
            <p>Bu sunum Güzelyalı Mahallesi 1547/8 Parsel Sahibi'ne özel olarak hazırlanmıştır.</p>
        </footer>
    </SectionWrapper>
  );
};

export default SocialProof;