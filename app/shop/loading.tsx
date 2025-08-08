import PieCardSkeleton from "../components/PieCardSkeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PieCardSkeleton />
        <PieCardSkeleton />
        <PieCardSkeleton />
        <PieCardSkeleton />
        <PieCardSkeleton />
        <PieCardSkeleton />
      </div>
    </div>
  );
}