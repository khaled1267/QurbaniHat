import AnimalDetails from '@/components/AnimalDetails';


// params থেকে id নিতে হবে
const AllAnimalsdetails = async ({ params }) => {
    // ১. আইডিটি রিসিভ করুন
    const { id } =await params;

    // ২. পুরো লিস্ট ফেচ করুন
    const response = await fetch("https://qurbani-hat-iota.vercel.app/animal.json");
    const allAnimals = await response.json();

    // ৩. আইডি অনুযায়ী নির্দিষ্ট পশুটি খুঁজে বের করুন
    // যদি আপনার JSON-এ আইডিটি string থাকে তবে == ব্যবহার করুন
    const animal = allAnimals.find((item) => item.id == id);
console.log("Found animal:", animal); // ডিবাগিংয়ের জন্য
  

    return (
        <div>
            {/* ৫. এখন কেবল একটি পশুর অবজেক্ট পাঠানো হচ্ছে */}
            <AnimalDetails animal={animal} />
        </div>
    );
};

export default AllAnimalsdetails;