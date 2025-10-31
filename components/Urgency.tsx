import React from 'react';
import SectionWrapper from './SectionWrapper';

const UrgencyCard: React.FC<{ title: string; children: React.ReactNode; icon: string; }> = ({ title, icon, children }) => (
    <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm text-center">
        <div className="text-5xl mb-4 inline-block">{icon}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-2 text-white/80">{children}</div>
    </div>
);

const Urgency: React.FC = () => {
    return (
        <SectionWrapper className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <UrgencyCard title="Zaman Kaybı = Para Kaybı" icon="⏰">
                        <p>Emlak piyasası sürekli değişiyor. Her ay beklemek = değer kaybı riski.</p>
                        <div className="mt-4 bg-black/20 p-3 rounded-lg text-sm">
                            <p>💡 Bahar sezonu = alıcı talebi en yüksek = en yüksek fiyat</p>
                        </div>
                    </UrgencyCard>
                    <UrgencyCard title="Piyasa Fırsatı" icon="📈">
                        <p>Atakum bölgesi son 6 ayda <strong>%18 değer kazandı.</strong></p>
                        <div className="mt-4 bg-black/20 p-3 rounded-lg text-sm">
                        <p>💡 Şimdi satış = piyasanın zirvesinden satış!</p>
                        </div>
                    </UrgencyCard>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Urgency;