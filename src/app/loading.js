export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
      
      <div className="flex flex-col items-center gap-5">

        {/* Glow Spinner */}
        <div className="relative w-14 h-14">
          
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md"></div>

          <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin relative z-10"></div>

        </div>

        {/* Text */}
        <p className="text-gray-600 text-sm font-medium tracking-wide">
          Loading your experience...
        </p>

      </div>

    </div>
  );
}