import Navigation from "../components/Navigation";
import PieCardSkeleton from "../components/PieCardSkeleton";

export default function Loading() {
  return (
    <>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PieCardSkeleton />
        <PieCardSkeleton />
        <PieCardSkeleton />
        <PieCardSkeleton />
        <PieCardSkeleton />
        <PieCardSkeleton />
      </div>
    </>
  );
}