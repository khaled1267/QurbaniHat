import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimal";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";


export default function Home() {
  return ( 
    <div>
      <Banner />
      <FeaturedAnimals />
      <QurbaniTips />
      <TopBreeds />
    </div>
  );
}
