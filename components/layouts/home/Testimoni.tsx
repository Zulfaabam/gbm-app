import React from "react";

const TestimoniCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src="/images/bro.svg" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

const Testimoni = () => {
  return (
    <div className="py-7">
      <div className="max-w-8xl mx-auto">
        <TestimoniCard />
      </div>
    </div>
  );
};

export default Testimoni;
