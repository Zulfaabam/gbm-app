import React from "react";

interface TextBoxProps {
  content: string;
  color?: string;
  onClick?: () => void;
}

const TextBox = ({ content, color, onClick }: TextBoxProps) => (
  <div
    className={`border-2 border-${
      color || "black"
    } rounded-lg flex justify-center items-center max-w-[266px] px-7 py-14 cursor-pointer bg-white`}
    onClick={onClick}
  >
    <p className={`font-heading text-${color || "black"} text-center`}>
      {content}
    </p>
  </div>
);

const InformasiKesehatan = () => {
  return (
    <div className="py-7 w-full">
      <div className="max-w-8xl flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center mx-auto">
        <div className="px-4 space-y-6">
          <h2 className="font-heading text-dark text-5xl">
            Informasi Kesehatan
          </h2>
          <p className="max-w-2xl text-justify">
            Lorem ipsum dolor sit amet consectetur. Sagittis orci fermentum
            fermentum fermentum. Sollicitudin sem ut volutpat sed amet. Commodo
            urna dui proin turpis arcu cursus nec venenatis ut. Diam volutpat
            nec eget enim facilisis tempor. Mauris elementum porttitor sociis
            odio enim. Suscipit venenatis amet dolor montes est massa. Nisl
            justo fermentum hac tempus viverra eget. Urna erat turpis ultrices
            nibh sapien nulla enim pulvinar sollicitudin. Purus facilisi laoreet
            metus tempor massa. Nunc mi curabitur mauris in id id odio. Purus
            dignissim odio ut fusce id cum nisi in dui. In vitae massa mattis
            ipsum pellentesque phasellus. Mollis feugiat in egestas leo. Orci
            donec sollicitudin pulvinar lectus lectus aliquet posuere. Non massa
            pretium eu facilisis nulla at nunc. Aenean nunc sed etiam massa
            amet. Dictum ultrices risus lorem donec vel tellus odio. Lectus sed
            pretium orci eget fringilla nunc at.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <TextBox color="gbm-green-dark" content="Informasi Event GBM" />
          <TextBox color="maroon" content="Informasi Partnership Event" />
          <TextBox color="gbm-purple" content="Informasi Kesehatan dan Gizi" />
        </div>
      </div>
    </div>
  );
};

export default InformasiKesehatan;
