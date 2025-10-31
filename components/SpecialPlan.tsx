import React from 'react';
import SectionWrapper from './SectionWrapper';

const DetailCard: React.FC<{ title: string; children: React.ReactNode; icon: string }> = ({ title, children, icon }) => (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm h-full">
        <h4 className="text-xl font-bold flex items-center text-yellow-300 mb-4"><span className="text-2xl mr-3">{icon}</span> {title}</h4>
        {children}
    </div>
);

const SpecialPlan: React.FC = () => {
    return (
        <SectionWrapper className="bg-gray-900 text-white" style={{backgroundImage: `radial-gradient(circle at top left, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 1)), url(https://picsum.photos/1920/1080?random=4&blur=2)`}}>
            <div className="text-center mb-12">
                <div className="inline-block bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-full text-sm uppercase tracking-widest mb-4">
                    🎯 SİZİN ARSANIZ İÇİN HAZIRLADIĞIM ÖZEL PLAN
                </div>
                <h2 className="text-3xl md:text-5xl font-black">Güzelyalı Mahallesi, 1547 Ada / 8 Parsel</h2>
                <h3 className="text-xl md:text-2xl text-white/80 mt-2">130 Metre Sahil, Ev + Meyve Bahçesi</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <DetailCard title="KONUM ANALİZİ" icon="📍">
                    <ul className="space-y-2 text-white/80">
                        <li><strong>İl/İlçe:</strong> Samsun / Atakum</li>
                        <li><strong>Mahalle:</strong> Güzelyalı Mahallesi</li>
                        <li><strong>Özellik:</strong> Ana Taşınmaz</li>
                        <li><strong>Mevcut Yapı:</strong> Arsa üzerinde tek katlı bina</li>
                    </ul>
                </DetailCard>
                <DetailCard title="KONUM AVANTAJLARI" icon="🏖️">
                     <ul className="list-inside space-y-2">
                        <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✅</span> Atakum sahiline sadece <strong>130 metre</strong></li>
                        <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✅</span> Ataköy'e <strong>80 metre</strong> mesafe</li>
                        <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✅</span> Merkezi konum, ulaşım kolay</li>
                        <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✅</span> Gelişen bölge, değer artış potansiyeli yüksek</li>
                    </ul>
                </DetailCard>
                 <DetailCard title="KULLANIM POTANSİYELİ" icon="🏡">
                     <ul className="list-inside space-y-2">
                        <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✅</span> Hazır yapı + bahçe (nadir fırsat)</li>
                        <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✅</span> Tatil evi dönüşümü</li>
                        <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✅</span> Kiralama geliri potansiyeli</li>
                        <li className="flex items-start"><span className="text-green-400 mr-2 mt-1">✅</span> Yatırım amaçlı değer artışı</li>
                    </ul>
                </DetailCard>
                <DetailCard title="HEDEF KİTLE PROFİLİ" icon="🎯">
                    <div>
                        <h5 className="font-bold">1. Tatil Evi Arayanlar</h5>
                        <p className="text-sm text-white/70 mb-2">Samsun dışından, sahile yakın, hazır ev isteyen aileler.</p>
                        <h5 className="font-bold">2. Yatırımcılar</h5>
                        <p className="text-sm text-white/70 mb-2">Atakum'un değer artışına ve kiralama gelirine odaklananlar.</p>
                        <h5 className="font-bold">3. Yerel Alıcılar</h5>
                        <p className="text-sm text-white/70">Sahil yakını, ev+bahçe kombinasyonu arayanlar, emeklilik planı yapanlar.</p>
                    </div>
                </DetailCard>
            </div>
            
             <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm mb-8">
                <h4 className="text-xl font-bold flex items-center text-yellow-300 mb-4"><span className="text-2xl mr-3">📢</span> TANITIM STRATEJİSİ</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p className="font-semibold">Ana Mesaj:</p>
                        <p className="text-lg text-white/90">"Atakum'un kalbinde, sahile 130m, hazır ev + meyve bahçesi"</p>
                        <p className="font-semibold mt-4">Vurgular:</p>
                        <ul className="list-decimal list-inside text-white/80">
                            <li>⭐ Nadir fırsat: Hazır yapı + bahçe</li>
                            <li>🏖️ Sahile yürüme mesafesi</li>
                            <li>📈 Yüksek değer artış potansiyeli</li>
                            <li>🏡 Hemen kullanıma hazır</li>
                        </ul>
                    </div>
                     <div>
                        <p className="font-semibold">Görsel İçerik Planı:</p>
                        <ul className="list-disc list-inside text-white/80">
                            <li><strong>Drone:</strong> Sahile mesafe vurgusu</li>
                            <li><strong>Zemin:</strong> Ev + bahçe detayları</li>
                            <li><strong>Video:</strong> "130 metre yürüyüşle sahil" teması</li>
                            <li><strong>360°:</strong> İç mekan + bahçe turu</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                 <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="text-xl font-bold flex items-center text-yellow-300 mb-4"><span className="text-2xl mr-3">💰</span> TAHMİNİ DEĞER & SATIM PLANI</h4>
                    <ul className="space-y-3">
                       <li><strong>Fiyat Stratejisi:</strong> Kademeli fiyatlandırma ile piyasa tepkisini ölçme.</li>
                       <li><strong>Hedef Satış Süresi:</strong> 30-60 gün</li>
                       <li><strong>Tahmini İlgi:</strong> İlk ay 15-25 ciddi soru, 5-10 görüşme ve 3-5 ciddi teklif hedefi.</li>
                    </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="text-xl font-bold flex items-center text-yellow-300 mb-4"><span className="text-2xl mr-3">📣</span> REKLAM KANALLARI</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="bg-green-500/20 text-green-300 p-2 rounded">✅ Sahibinden Vitrin</span>
                        <span className="bg-green-500/20 text-green-300 p-2 rounded">✅ Emlakjet Premium</span>
                        <span className="bg-green-500/20 text-green-300 p-2 rounded">✅ Facebook/Instagram</span>
                        <span className="bg-green-500/20 text-green-300 p-2 rounded">✅ Google Ads</span>
                        <span className="bg-green-500/20 text-green-300 p-2 rounded">✅ YouTube Reklamları</span>
                        <span className="bg-green-500/20 text-green-300 p-2 rounded">✅ RE/MAX Ağı</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center bg-green-900/50 border border-green-700 text-green-300 p-6 rounded-lg">
                <p className="text-lg font-semibold">✅ Satış olmazsa <span className="font-bold">0₺</span> ücret • ✅ Tüm hizmetler <span className="font-bold">ücretsiz</span> • ✅ Hizmet bedeli sadece satış olunca</p>
            </div>
        </SectionWrapper>
    );
};

export default SpecialPlan;