import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useInView } from '../hooks/useInView';

const TimelineStep: React.FC<{
  step: number;
  icon: string;
  title: string;
  duration: string;
  actions: { title: string; items: string[] };
  benefit: { title: string; text: string };
  children?: React.ReactNode;
}> = ({ step, icon, title, duration, actions, benefit, children }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div ref={ref} className={`relative pl-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-800 text-2xl font-black shadow-lg">
        {icon}
      </div>
      <div className="absolute left-6 top-12 bottom-0 w-px bg-white/30"></div>
      
      <div className="bg-black/20 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
        <p className="text-sm font-bold text-yellow-300">{duration}</p>
        <h3 className="text-2xl font-bold mt-1">{step}. {title}</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
                <h4 className="font-semibold text-white/90">{actions.title}</h4>
                <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                    {actions.items.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-300">{benefit.title}</h4>
                <p className="mt-1 text-white/90">{benefit.text}</p>
            </div>
        </div>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
};

const UniqueMechanism: React.FC = () => {
  return (
    <SectionWrapper className="bg-gradient-to-br from-blue-900 via-indigo-900 to-red-900 text-white">
      <h2 className="text-4xl md:text-6xl font-black text-center mb-4">6 Adımlı Profesyonel Satış Sistemi</h2>
      <p className="text-center text-lg md:text-xl text-white/80 mb-16">Arsanızı En Yüksek Fiyata, En Hızlı Şekilde Satmanın Formülü</p>
      
      <div className="space-y-12">
        <TimelineStep
            step={1} icon="📊" title="PROFESYONEL DEĞERLEME" duration="Gün 1-2"
            actions={{ title: "Ne yapıyorum:", items: ["Detaylı piyasa analizi", "Benzer satışlar incelemesi", "Bölge değer artış trendi", "Optimal fiyat stratejisi"] }}
            benefit={{ title: "💰 Sizin kazancınız:", text: "Doğru fiyat = Maksimum gelir potansiyeli" }}
        />

        <TimelineStep
            step={2} icon="📹" title="GÖRSEL ŞÖLEN" duration="Gün 3-5"
            actions={{ title: "Ne yapıyorum:", items: ["4K profesyonel drone çekimi", "Zemin fotoğraf seansı (gün batımı/gün doğumu)", "HD tanıtım videosu (45-60 saniye)", "360° sanal tur", "Profesyonel edit ve renklendirme"] }}
            benefit={{ title: "💡 Sizin kazancınız:", text: "Sinematik tanıtım = %300 daha fazla ilgi" }}
        >
            <div className="mt-4 bg-yellow-400/10 border border-yellow-500 text-yellow-300 p-3 rounded-lg text-sm">
                <p>💸 Profesyonel drone çekimi maliyeti: ₺3,500-5,000</p>
                <p className="font-bold">✅ Sizin için: TAMAMEN ÜCRETSİZ</p>
            </div>
        </TimelineStep>
        
        <TimelineStep
            step={3} icon="📱" title="DİJİTAL PAZARLAMA" duration="Gün 5-10"
            actions={{ title: "Ne yapıyorum:", items: ["Facebook & Instagram reklamları (hedefli kitle)", "Google Ads (arama + harita)", "Emlakjet, Sahibinden, Hepsiemlak PREMIUM ilanlar", "YouTube video reklamı", "500+ alıcı database'ine e-posta"] }}
            benefit={{ title: "📈 Erişim metriği:", text: "Ortalama 15,000-20,000 kişiye ulaşım (ilk 2 hafta)" }}
        >
            <div className="bg-yellow-400/10 border border-yellow-500 text-yellow-300 p-3 rounded-lg text-sm mb-4">
                <p>💰 Reklam bütçesi: ₺8,000-12,000 aylık reklam harcaması</p>
                <p className="font-bold">✅ Sizin için: TAMAMEN ÜCRETSİZ</p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-white/90 bg-white/5 rounded-lg">
                    <thead className="bg-white/10">
                        <tr><th className="p-3"></th><th className="p-3">Bireysel</th><th className="p-3">Benimle</th></tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-white/10"><td className="p-3 font-semibold">Erişim</td><td className="p-3">50-100</td><td className="p-3 text-green-400 font-bold">15,000+ ✅</td></tr>
                        <tr className="border-t border-white/10"><td className="p-3 font-semibold">Maliyet</td><td className="p-3">₺0 (ama satmıyor)</td><td className="p-3 text-green-400 font-bold">₺0 (ben karşılıyorum)</td></tr>
                    </tbody>
                </table>
            </div>
        </TimelineStep>
        
        <TimelineStep
            step={4} icon="🌍" title="RE/MAX AĞI AKTİVASYONU" duration="Gün 1-30"
            actions={{ title: "Ne yapıyorum:", items: ["RE/MAX Turkey network'e duyuru (850+ ofis)", "Kurumsal yatırımcı erişimi", "Diğer danışmanlarla iş birliği", "Emlak fuarlarında sunum"] }}
            benefit={{ title: "🤝 Sizin kazancınız:", text: "Yerel + ulusal + kurumsal alıcılar aynı anda" }}
        />
        <TimelineStep
            step={5} icon="🔍" title="NİTELİKLİ ALICI FİLTRESİ" duration="Gün 10-45"
            actions={{ title: "Ne yapıyorum:", items: ["İlk telefon filtrelemesi (ben yapıyorum)", "Finansal yeterlilik kontrolü", "Ciddiyet testi", "Profesyonel görüşme planlama"] }}
            benefit={{ title: "✅ Sizin kazancınız:", text: "Siz sadece CİDDİ, HAZIR alıcılarla görüşürsünüz. Zaman kaybı = 0" }}
        />
        <TimelineStep
            step={6} icon="🤝" title="PROFESYONEL KAPANIŞ" duration="Gün 30-60"
            actions={{ title: "Ne yapıyorum:", items: ["Pazarlık stratejisi koçluğu", "Sözleşme danışmanlığı", "Noter süreç yönetimi", "Ödeme garantisi koordinasyonu", "Tapu devir tamamlama"] }}
            benefit={{ title: "🎯 Sizin kazancınız:", text: "En yüksek teklif + güvenli ödeme + stressiz devir" }}
        />
      </div>

       <div className="mt-16 text-center bg-white/10 p-6 rounded-lg border border-white/20">
            <p className="text-xl">⏱️ Toplam süreç: Ortalama 45 gün</p>
            <p className="text-2xl font-bold text-yellow-300">💰 Hedef: Piyasa değerinde hızlı satış</p>
        </div>
    </SectionWrapper>
  );
};

export default UniqueMechanism;