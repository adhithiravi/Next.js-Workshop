// React Server Component
import React, { Suspense } from "react";
import HeroCarousel from "./components/HeroCarousel";
import Navigation from "./components/Navigation";
import PiesOfTheMonth from "./components/PiesOfTheMonth";
import dynamic from "next/dynamic";
import PieCardSkeleton from "./components/PieCardSkeleton";

const LocationMap = dynamic(() => import("./components/LocationMap"), { ssr: true });

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <section className="py-12 bg-white">
        <Suspense fallback={<PieCardSkeleton />}>
          <PiesOfTheMonth />
        </Suspense>
      </section>
      <LocationMap />
    </div >
  );
}
