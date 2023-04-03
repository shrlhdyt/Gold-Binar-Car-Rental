import React from "react";
import OffNav from "../assets/components/Navbar";
import Content from "../assets/components/content";
import Bestcar from "../assets/components/Bestcar";
import Whyus from "../assets/components/Whyus";
import Testimonial from "../assets/components/Testimonial";
import { FAQ } from "../assets/components/FAQ";
import Footer from "../assets/components/Footer";

export const Home = () => {
  return (
    <div>
      <OffNav />
      <Content />
      <Bestcar />
      <Whyus />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
