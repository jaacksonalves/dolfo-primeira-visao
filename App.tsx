import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { Checklist } from './components/Checklist';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-dolfoRed selection:text-white">
      <Header />
      <main>
        <Hero />
        <Methodology />
        <Checklist />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;