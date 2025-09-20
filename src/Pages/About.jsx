import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutMission from "../Components/AboutMission";
import AboutTeam from "../Components/AboutTeam";
import AboutMilestone from "../Components/AboutMilestone";
import AboutHero from "../Components/AboutHero";
import AboutStory from "../Components/AboutStory";
import AboutStats from "../Components/AboutStats";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AboutHero/>

      {/* Our Story Section */}
      <AboutStory/>

      {/* Our Mission & Values Section */}
      <AboutMission/>

      {/* Our Team Section */}
      <AboutTeam/>

      {/* Our Milestones Section */}
      <AboutMilestone/>
      {/* Stats Section */}
      <AboutStats/>
    </div>
  );
};

export default About;
