import React from "react";
import Navbar from "./components/Navbar";
import MobNavbar from "./components/MobNavbar";
import Hero from "./components/Hero";
import Category from "./components/Category/Category";
import FeaturedSectionFruits from "./components/FeaturedSection/FeaturedSectionFruits";

const App = () => {
  return (
    <main>
      <Navbar />
      <MobNavbar />
      <Hero />
      <Category />
      <FeaturedSectionFruits />
    </main>
  );
};

export default App;
