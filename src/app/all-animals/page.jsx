import Animal from "@/components/Animal";
import React from "react";

const Allanimals = async () => {
  const response = await fetch("https://qurbani-hat-iota.vercel.app/animal.json");
  const data = await response.json();
  const sortedData = [...data].sort((a, b) => a.price - b.price);

  return (
    <div className="w-10/12 mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {sortedData.map((allanimals) => (
        <Animal key={allanimals.id} animal={allanimals} />
      ))}
    </div>
  );
};

export default Allanimals;
