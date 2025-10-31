import React from 'react';
import SectionWrapper from './SectionWrapper';

const Credibility: React.FC = () => {
    return (
        <SectionWrapper className="bg-gray-100">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Kimim Ben?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <img 
                        src="https://i.ibb.co/spwRFCgm/Whats-App-G-rsel-2025-10-30-saat-15-01-59-52a64fa1.jpg" 
                        alt="Bedirhan Hacı" 
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto md:mx-0 mb-6 shadow-2xl object-cover" 
                    />
                    <h3 className="text-3xl font-bold">Bedirhan Hacı</h3>
                    <p className="text-xl text-blue-600 font-semibold">RE/MAX Parla Gayrimenkul Danışmanı</p>
                    <p className="mt-2 text-gray-600">Lisanslı • +3 yıl deneyim • Atakum bölgesi uzmanı</p>
                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="bg-white p-3 rounded-lg shadow">🏆 RE/MAX Turkey 2024 - Başarı Ödülü</div>
                        <div className="bg-white p-3 rounded-lg shadow">🏆 Rapp sistem Ofis ciro üçüncüsü</div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-8 text-center">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-5xl md:text-6xl font-black text-blue-600">
                                📈
                            </div>
                            <p className="mt-2 text-gray-700 font-semibold">Birçok Başarılı Satış</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-5xl md:text-6xl font-black text-blue-600">
                                ⭐
                            </div>
                            <p className="mt-2 text-gray-700 font-semibold">Yüksek Müşteri Memnuniyeti</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-5xl md:text-6xl font-black text-blue-600">
                                🎯
                            </div>
                            <p className="mt-2 text-gray-700 font-semibold">Doğru Fiyat Stratejisi</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-5xl md:text-6xl font-black text-blue-600">
                                🤝
                            </div>
                            <p className="mt-2 text-gray-700 font-semibold">Bölge Uzmanlığı</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 text-center bg-white p-8 rounded-lg shadow-md border">
                <img src="https://i.ibb.co/5hXwxX2r/e92f870139b241e9820965c4ac5167b3.webp" alt="RE/MAX Parla Logo" className="h-20 mx-auto mb-4 object-contain" />
                <p className="text-xl font-semibold">"Dünyanın en büyük emlak ağının gücü arkamda"</p>
                <div className="mt-4 flex justify-center space-x-8 text-gray-600">
                    <span>• 140+ ülke</span>
                    <span>• 9,000+ ofis</span>
                    <span>• 140,000+ danışman</span>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Credibility;