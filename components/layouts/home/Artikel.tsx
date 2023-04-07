import Card from "components/Card";
import React from "react";

const Artikel = () => {
  return (
    <div className="py-7 w-full">
      <div className="max-w-8xl mx-auto space-y-6">
        <h2 className="font-heading text-gbm-green-light text-5xl">Artikel</h2>
        <div className="flex justify-between">
          <Card img="images/bro.svg" title="Card 1" desc="Description" />
          <Card img="images/bro.svg" title="Card 1" desc="Description" />
          <Card img="images/bro.svg" title="Card 1" desc="Description" />
        </div>
      </div>
    </div>
  );
};

export default Artikel;
