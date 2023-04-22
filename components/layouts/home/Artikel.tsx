import ActionAreaCard from "@/components/ActionAreaCard";
import React from "react";

const dummyData = [1, 2, 3, 4, 5, 6, 7];

const Artikel = () => {
  return (
    <div className="py-7 w-full">
      <div className="max-w-8xl mx-auto space-y-6">
        <h2 className="font-heading text-gbm-green-light text-5xl">Artikel</h2>
        <div className="carousel carousel-center w-full p-4 space-x-4 bg-cream">
          {dummyData.map((d) => (
            <div className="carousel-item" key={d}>
              <ActionAreaCard
                img="images/bro.svg"
                title="Card 1"
                desc="Description"
                className="w-[400px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;
