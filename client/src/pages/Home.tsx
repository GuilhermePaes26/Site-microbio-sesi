import Hero from '@/components/Hero';
import MicroorganismsSection from '@/components/MicroorganismsSection';
import StudyAreasSection from '@/components/StudyAreasSection';
import GallerySection from '@/components/GallerySection';
import FactsSection from '@/components/FactsSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="microorganisms">
          <MicroorganismsSection />
        </section>

        <section id="gallery">
          <GallerySection />
        </section>

        <section id="study-areas">
          <StudyAreasSection />
        </section>

        <section id="facts">
          <FactsSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
