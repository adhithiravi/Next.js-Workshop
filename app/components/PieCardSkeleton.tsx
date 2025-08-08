export default function PieCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-material-1 p-6 animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div> {/* Image placeholder */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div> {/* Title placeholder */}
      <div className="h-4 bg-gray-200 rounded w-full mb-1"></div> {/* Description line 1 */}
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div> {/* Description line 2 */}
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div> {/* Price placeholder */}
      <div className="h-10 bg-gray-200 rounded w-full"></div> {/* Button placeholder */}
    </div>
  )
}
