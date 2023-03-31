import Image from "next/image";
import React from "react";

export interface CardProps {
  img: string;
  title: string;
  desc: string;
}

const Card = ({ img, title, desc }: CardProps) => {
  return (
    <div className="card card-compact w-[440px] h-[420px] bg-base-100 shadow-xl">
      <figure>
        {/* <Image src={img} alt={img} fill /> */}
        <img src={img} alt={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
