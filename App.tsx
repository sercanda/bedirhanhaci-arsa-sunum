
import React from 'react';

import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Credibility from './components/Credibility';
import UniqueMechanism from './components/UniqueMechanism';
import SpecialPlan from './components/SpecialPlan';
import RiskReversal from './components/RiskReversal';
import Urgency from './components/Urgency';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import SocialProof from './components/SocialProof';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-800 antialiased">
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Credibility />
        <UniqueMechanism />
        <SpecialPlan />
        <RiskReversal />
        <Urgency />
        <FAQ />
        <FinalCTA />
        <SocialProof />
      </main>
    </div>
  );
};

export default App;
