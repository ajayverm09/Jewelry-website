import { useEffect } from 'react';
import HeroSection from '../Components/HomeHero';
import FeaturedPropertiesSection from '../Components/HomeFeatures';
import AboutUsPreviewSection from '../Components/HomeAbout';
import ServicesSection from '../Components/HomeService';
import TestimonialsSection from '../Components/HomeTestimonial';
import WhyChooseUsSection from '../Components/HomeChoose';
import RecentBlogsSection from '../Components/HomeBlogs';
import ContactFormPreviewSection from '../Components/HomeForm';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturedPropertiesSection />
      <AboutUsPreviewSection />
      <ServicesSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <RecentBlogsSection />
      <ContactFormPreviewSection />
    </div>
  );
};

export default Home;