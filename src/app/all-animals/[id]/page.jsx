import AnimalDetails from '@/components/AnimalDetails';



const AllAnimalsdetails = async ({ params }) => {
   
    const { id } =await params;

    
    const response = await fetch("https://qurbani-hat-iota.vercel.app/animal.json");
    const allAnimals = await response.json();

    
    const animal = allAnimals.find((item) => item.id == id);
console.log("Found animal:", animal);

    return (
        <div>
            
            <AnimalDetails animal={animal} />
        </div>
    );
};

export default AllAnimalsdetails;