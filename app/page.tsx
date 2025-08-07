"use client";

import React, { useEffect, useState } from "react";
import HeroCarousel from "./components/HeroCarousel";
import Navigation from "./components/Navigation";
import PiesOfTheMonth from "./components/PiesOfTheMonth";
import LocationMap from "./components/LocationMap";
import { Pie } from "./lib/types";
import { getPiesOfTheMonth } from "./lib/getPiesOfTheMonth";

export default function Home() {

  const [pies, setPies] = useState<Pie[]>([]);

  useEffect(() => {
    async function loadPies() {
      try {
        const data = await getPiesOfTheMonth();
        setPies(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadPies();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <section className="py-12 bg-white">
        <PiesOfTheMonth pies={pies} />
        <LocationMap />
      </section>
    </div>
  );
}
