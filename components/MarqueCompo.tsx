import Image from "next/image";
import React from "react";
function Marquee() {
  const companieSet1 = [
    { id: 1, img: "/images/glimpse.svg" },
    { id: 2, img: "/images/designstudio.svg" },
    { id: 3, img: "/images/wayline.svg" },
    { id: 4, img: "/images/optimal.svg" },
  ];
  const companieSet2 = [
    { id: 5, img: "/images/visualy.svg" },
    { id: 6, img: "/images/wayline.svg" },
    { id: 7, img: "/images/dexign.svg" },
    { id: 8, img: "/images/emblem.svg" },
  ];
  return (
    <div className="flex w-96 object-contain flex-col gap-1 ">
      <span className="marquee  grid grid-cols-4 gap-1">
        {" "}
        {companieSet1.map((company, i) => (
          <Image
            key={i}
            width={1080}
            height={1080}
            className="w-96  py-2 px-2 rounded-full"
            src={company.img}
            alt=""
          />
        ))}
      </span>
      <span className="marquee2 grid grid-cols-4 gap-6">
        {" "}
        {companieSet2.map((company, i) => (
          <Image
            key={i}
            width={1080}
            height={1080}
            className="w-96  py-2 px-2 rounded-full"
            src={company.img}
            alt=""
          />
        ))}
      </span>
    </div>
  );
}

export default Marquee;
