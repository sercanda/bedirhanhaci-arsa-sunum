
import React from 'react';
import SectionWrapper from './SectionWrapper';

const SolutionCard: React.FC<{ title: string; text: string; comparison: string }> = ({ title, text, comparison }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-transform duration-300">
        <div className="text-green-500 text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{text}</p>
        <p className="mt-4 text-sm text-gray-500 italic">{comparison}</p>
    </div>
);


const Solution: React.FC = () => {
    return (
        <SectionWrapper className="bg-gray-50 text-gray-800">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Peki Ya Bu Sorunların Hiçbiri Olmasaydı?</h2>
            <p className="text-center text-lg md:text-xl text-gray-600 mb-12">Size özel hazırladığım profesyonel satış sistemi ile...</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SolutionCard title="30-60 Günde Satış" text="Ortalama satış sürem: 45 gün" comparison="Vs. bireysel: 8-12 ay" />
                <SolutionCard title="Doğru Fiyatla Satış" text="Profesyonel pazarlama = daha yüksek teklif" comparison="Vs. bireysel satış: Değerinde satış fırsatı" />
                <SolutionCard title="Sıfır Stres & Risk" text="Ben her şeyi hallederken, siz arkanıza yaslanın" comparison="Satış olmazsa tek kuruş ödemezsiniz" />
            </div>

            <div className="text-center mt-16 border-t border-gray-200 pt-6">
                <p className="text-gray-500">Birçok arsa sahibi bu sisteme güvendi → Hepsi başarıyla sattı</p>
            </div>
        </SectionWrapper>
    );
};

export default Solution;