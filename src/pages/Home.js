import React from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
export default function Home() {

    return (
        <div>
          <Navbar /> 
          <Hero />
          <FeaturedProducts />
          <Testimonials />
          <Newsletter />
          <Footer />
        </div>
      );

}