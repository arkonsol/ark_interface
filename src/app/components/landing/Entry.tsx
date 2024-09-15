import Header from './Header';
import HeroSection from './Hero'
import FeatureCard from './Features'
import PAOCards from './PAOSlides'

export default function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureCard />
      <PAOCards />
      {/* Other sections will go here */}
    </div>
  );
}