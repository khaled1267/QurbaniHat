import Image from "next/image";

// src/components/TopBreeds.jsx
const TopBreeds = async () => {
  const response = await fetch("https://qurbani-hat-iota.vercel.app/topbreeds.json");
  const topanimal = await response.json();

  return (
    <section className="mt-12 w-10/12 mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#97C459]">
          Top <span className="text-[#97C459]">Breeds</span>
        </h2>
        <p className="text-xs text-[#639922] mt-1">এই বছরের জনপ্রিয় জাত</p>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {topanimal.breeds.map((breed) => (
          <div
            key={breed.id}
            className="bg-[#1a3a0a] border border-[#3B6D11] rounded-xl px-5 py-4 flex items-center gap-4 hover:border-[#97C459] transition"
          >
            {/* Rank */}
            <span className="text-xs font-bold text-[#639922] w-6 flex-shrink-0">
              {breed.rank}
            </span>

            {/* Icon */}
            <div className="w-10 h-10  rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              <Image
                src={breed.image}
                alt={breed.name}
                width={64}
                height={64}
                className="object-cover rounded"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-[#EAF3DE]">
                  {breed.name}
                </h3>
                <span className="text-[10px] text-[#639922] bg-[#0f2206] px-2 py-0.5 rounded-full">
                  {breed.type}
                </span>
              </div>
              <p className="text-[10px] text-[#639922] mt-0.5">
                {breed.desc} · {breed.price}
              </p>
            </div>

            {/* Tag */}
            {/* <span className={`text-[10px] font-semibold px-2 py-1 rounded-full flex-shrink-0 ${tagColors[breed.tag]}`}>
              {breed.tag}
            </span> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBreeds;
