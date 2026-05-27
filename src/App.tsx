/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyInvest from "./components/WhyInvest";
import FeaturedCampaigns from "./components/FeaturedCampaigns";
import OurServices from "./components/OurServices";
import AboutAndWhy from "./components/AboutAndWhy";
import HowWeWork from "./components/HowWeWork";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import CampaignDetailModal from "./components/CampaignDetailModal";
import { Campaign } from "./types";

export default function App() {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCampaignSelect = (camp: Campaign) => {
    setSelectedCampaign(camp);
    setModalOpen(true);
  };

  const handleWatchShowreel = () => {
    const element = document.getElementById("work");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-gold-400 selection:text-black">
      {/* Absolute Noise Texture Layer for Film Authenticity */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] bg-[#000000] mix-blend-overlay" />

      {/* Primary Floating Header */}
      <Header />

      {/* Render Main Sections */}
      <main>
        {/* Page 1: Hero view with interactive showreel click */}
        <Hero onWatchShowreelClicked={handleWatchShowreel} />

        {/* Page 2: Pain points / good ad films / reflection circle */}
        <WhyInvest />

        {/* Page 3: Selected campaign grid with modal triggers */}
        <FeaturedCampaigns onCampaignSelect={handleCampaignSelect} />

        {/* Page 4: Services capability overview */}
        <OurServices />

        {/* Page 5: Left about panel + Right Why us 6-card grid */}
        <AboutAndWhy />

        {/* Page 6: Horizontal workflow connected pipeline */}
        <HowWeWork />

        {/* Page 7: Creator spotlight with handwritten badge */}
        <Founder />

        {/* Page 8: Contact Brief form, social coordinates, and legal footer */}
        <Contact />
      </main>

      {/* Full-Screen Cinema Simulator Modal */}
      <CampaignDetailModal
        campaign={selectedCampaign}
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedCampaign(null);
        }}
      />
    </div>
  );
}

