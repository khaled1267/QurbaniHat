
import Animal from "./Animal";

const FeaturedAnimals = async() => {
    const response = await fetch(
    "https://qurbani-hat-iota.vercel.app/animal.json",
  );
  const data = await response.json();
  
  const featured = data.slice(0, 4);
  
    

  return (
    <section className="mt-12 w-10/12 mx-auto">
     
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#639922] ">
            Featured <span className="text-[#639922]">Animals</span>
          </h2>
          <p className="text-xs text-[#639922] mt-1">এই সপ্তাহের সেরা পশু</p>
        </div>
        
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featured.map((animal) => (
         <Animal key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedAnimals;
