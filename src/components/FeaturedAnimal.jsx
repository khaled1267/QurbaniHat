

// import Image from "next/image";
// import Link from "next/link";
// import Animal from "./Animal";

// const FeaturedAnimals =   async() => {
//     const response = await fetch(
//     "/animal.json",
//   );
//   const data = await response.json();
//   console.log(data);
//   const featured = data.slice(0, 4);
//   console.log(featured);
    

//   return (
//     <section className="mt-12 w-10/12 mx-auto">
//       {/* Section Header */}
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h2 className="text-2xl font-semibold text-[#639922] ">
//             Featured <span className="text-[#639922]">Animals</span>
//           </h2>
//           <p className="text-xs text-[#639922] mt-1">এই সপ্তাহের সেরা বাছাই</p>
//         </div>
//         <Link
//           href="/animals"
//           className="text-sm text-[#97C459] border border-[#3B6D11] px-4 py-1.5 rounded-lg hover:bg-[#2d5a14] transition"
//         >
//           সব দেখুন →
//         </Link>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {featured.map((animal) => (
//          <Animal key={animal.id} animal={animal} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedAnimals;
