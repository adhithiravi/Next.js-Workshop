// React Server Component

import React from "react";
import HeroCarousel from "./components/HeroCarousel";
import Navigation from "./components/Navigation";
import PiesOfTheMonth from "./components/PiesOfTheMonth";
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./components/LocationMap"), { ssr: true });

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <section className="py-12 bg-white">
        <PiesOfTheMonth />
      </section>
      <LocationMap />
    </div >
  );
}
