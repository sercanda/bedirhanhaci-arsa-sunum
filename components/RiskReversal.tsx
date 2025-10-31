import React from 'react';
import SectionWrapper from './SectionWrapper';

const GuaranteeCard: React.FC<{ title: string; children: React.ReactNode; icon: string }> = ({ title, icon, children }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-200 text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="text-5xl mb-4 inline-block">{icon}</div>
        <h3 className="text-2xl font-bold text-blue-800">{title}</h3>
        <div className="mt-2 text-gray-600">{children}</div>
    </div>
);

const RiskReversal: React.FC = () => {
    return (
        <SectionWrapper className="bg-blue-50 text-gray-800">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Hiçbir Risk Almıyorsunuz - <span className="text-blue-600">Garantilerim:</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <GuaranteeCard title="Sıfır Ön Ödeme" icon="💸">
                    <p>Arsanızı listelemek için <strong>tek kuruş ödemezsiniz.</strong></p>
                    <ul className="text-sm mt-2 text-gray-500">
                        <li>Değerleme: Ücretsiz</li>
                        <li>Drone Çekimi: Ücretsiz</li>
                        <li>Pazarlama: Ücretsiz</li>
                    </ul>
                    <p className="font-bold mt-2 text-blue-700">Hizmet bedeli sadece satış gerçekleşirse!</p>
                </GuaranteeCard>
                <GuaranteeCard title="RE/MAX Garantisi" icon="🔒">
                    <p>Dünyanın en büyük emlak ağının güvencesi arkanızda.</p>
                     <ul className="text-sm mt-2 text-gray-500">
                        <li>Sigortalı İşlemler</li>
                        <li>Hukuki Destek</li>
                        <li>Kurumsal Sorumluluk</li>
                    </ul>
                </GuaranteeCard>
                <GuaranteeCard title="7/24 İletişim" icon="📞">
                    <p>Satış sürecinde her an bana ulaşabilirsiniz.</p>
                     <ul className="text-sm mt-2 text-gray-500">
                        <li>Telefon</li>
                        <li>WhatsApp</li>
                        <li>Email & Yüz yüze</li>
                    </ul>
                </GuaranteeCard>
            </div>
        </SectionWrapper>
    );
};

export default RiskReversal;