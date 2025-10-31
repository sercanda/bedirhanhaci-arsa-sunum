
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useInView } from '../hooks/useInView';

const ProblemCard: React.FC<{ icon: string; title: string; text: string; loss: string; delay: string }> = ({ icon, title, text, loss, delay }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`bg-gray-800 p-6 rounded-lg border border-gray-700 transition-all duration-700 ${delay} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold flex items-center">
                <span className="text-red-500 text-2xl mr-3">{icon}</span> {title}
            </h3>
            <p className="mt-2 text-gray-400">{text}</p>
            <p className="mt-3 text-red-400 font-semibold text-sm"><em>{loss}</em></p>
        </div>
    );
}

const Problem: React.FC = () => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
    const problems = [
        { icon: '❌', title: '1. Yanlış Fiyatlandırma', text: "Çoğu arsa sahibi, piyasa analizini yanlış yapıyor. Ya çok ucuza satıyor, ya da aylarca satamıyor.", loss: "Kayıp: Potansiyel gelirden önemli kayıp" },
        { icon: '❌', title: '2. Yetersiz Tanıtım', text: "Telefon fotoğrafları ve sahibinden.com ilanı yeterli değil. Arsanız potansiyel alıcıların %95'ine ulaşamıyor.", loss: "Kayıp: 10-15 potansiyel alıcı" },
        { icon: '❌', title: '3. Güvenlik Riski', text: "Birebir görüşmeler, dolandırıcılık riski, ödeme sorunları... Stresli ve riskli bir süreç.", loss: "Risk: Zaman + Para + Emniyet" },
        { icon: '❌', title: '4. Zaman Kaybı', text: "Ortalama bireysel satış süresi: 8-12 ay. Her ay beklemek = değer kaybı.", loss: "Kayıp: Her ay emlak değer artışından geri kalma" },
        { icon: '❌', title: '5. Pazarlık Gücü Kaybı', text: "Profesyonel olmayan sunum = pazarlık masasında zayıflık = daha düşük fiyat.", loss: "Kayıp: %10-20 daha az satış fiyatı" },
    ];

    return (
        <SectionWrapper className="bg-black text-white">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Arsanızı Satarken Karşılaşacağınız <span className="text-red-500">5 Büyük Sorun</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problems.map((p, i) => (
                    <ProblemCard key={p.title} {...p} delay={`delay-${i*100}`} />
                ))}
            </div>
            <div ref={ref} className={`mt-12 bg-red-900/50 border border-red-700 text-red-300 p-6 rounded-lg text-center transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-xl font-bold">⚠️ Bu sorunların her biri sizi <span className="underline">yüz binlerce lira zarara</span> uğratabilir.</p>
            </div>
        </SectionWrapper>
    );
};

export default Problem;