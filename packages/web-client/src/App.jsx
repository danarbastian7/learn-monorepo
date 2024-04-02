import React from "react";
import Navbar from "./components/Navbar";
import MobNavbar from "./components/MobNavbar";
import Hero from "./components/Hero";
import Category from "./components/Category/Category";
import FeaturedSectionFruits from "./components/FeaturedSection/FeaturedSectionFruits";
import Banner from "./components/Banner/Banner";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Treat from "./components/Treatment/Treat";

const App = () => {
  return (
    <main>
      <Navbar />
      <MobNavbar />
      <Hero />
      <Category />
      <FeaturedSectionFruits />
      <Banner />
      <NewsLetter />
      <Treat />
    </main>
  );
};

export default App;
