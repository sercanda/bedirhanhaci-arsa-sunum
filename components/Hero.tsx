import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex flex-col items-center justify-center text-white text-center p-4">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://picsum.photos/1920/1080?blur=5&random=1)` }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>
      
      <div className="absolute top-0 left-0 right-0 bg-black/50 p-4 text-lg md:text-xl font-bold tracking-widest animate-pulse">
        <p>🔒 Gizli • Sadece Sizin İçin Hazırlandı • Güzelyalı Mahallesi 1547/8 Parsel Sahibi</p>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight" style={{textShadow: '0 4px 15px rgba(0,0,0,0.5)'}}>
          Arsanızın Gerçek Değerini Biliyor musunuz?
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-2xl font-light" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
          Bu sunum, 1547 ada 8 parsel numaralı arsanızın nasıl 30-60 gün içinde <strong className="font-bold text-yellow-300">hak ettiği en yüksek fiyata</strong> satılabileceğini gösteriyor.
        </p>
        
        <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 text-lg font-semibold">
          Ücretsiz Analiz • Sıfır Risk
        </div>
        
        <div className="absolute bottom-[-100px] sm:bottom-[-150px] flex flex-col items-center space-y-2 text-white/80">
          <p className="text-sm">↓ Aşağı kaydırın ve 3 dakikada öğrenin</p>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;