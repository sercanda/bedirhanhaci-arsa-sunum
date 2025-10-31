import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <div className="text-gray-600 pr-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
    const faqs = [
        { q: "Hizmet bedeli oranınız nedir?", a: "Standart piyasa oranı: %2-4 (satış fiyatına göre). Tek fark: Ben bu hizmet bedelinden drone, reklam, pazarlama vs. hepsini karşılıyorum. Siz ek bir şey ödemiyorsunuz." },
        { q: "Arsam satılmazsa ne olur?", a: "Hiçbir ücret ödemezsiniz. Tüm risk bende. İsterseniz istediğiniz zaman çıkabilirsiniz." },
        { q: "Neden sizinle çalışayım, başka danışman değil?", a: <div>3 faktör: <ol className="list-decimal list-inside mt-2"><li>RE/MAX küresel ağı ve garantisi</li><li>Atakum bölge uzmanlığım (5+ yıl)</li><li>Kanıtlanmış sonuçlar (24 satış, %98 memnuniyet)</li></ol></div> },
        { q: "Drone ve video çekimi gerçekten ücretsiz mi?", a: "Evet, %100 ücretsiz. Profesyonel tanıtım benim işimin bir parçası. Sadece satış gerçekleşirse hizmet bedelinden karşılanıyor." },
        { q: "Ne kadar sürede satarsınız?", a: "Ortalama 30-60 gün, lokasyon ve fiyata göre değişir. Sizin arsanız için: premium konum + hazır yapı = 45 gün hedefim." },
        { q: "RE/MAX hizmet bedeli alıyor mu?", a: "RE/MAX, benim çalıştığım şirket. Hizmet bedeli içinde, size ek maliyet yok. Faydanız: Küresel ağ erişimi, güvence, sigorta." },
    ];

  return (
    <SectionWrapper className="bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Aklınızdaki Sorular</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map(faq => <FAQItem key={faq.q} question={faq.q} answer={faq.a} />)}
      </div>
    </SectionWrapper>
  );
};

export default FAQ;