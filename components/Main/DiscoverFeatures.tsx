import { CircleHelp } from "lucide-react";
import Image from "next/image";
import React from "react";

function DiscoverFeatures() {
  return (
    <div>
      <h2 className="lg:text-6xl text-2xl font-bold text-center ">
        Discover powerful features for <br /> financial success
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-6 bg-[#8DE5E1] py-8 px-8 rounded-2xl">
        <div className="lg:w-[50%]">
          <Image
            width={1080}
            height={1080}
            src="/images/maindiscover.svg"
            alt=""
            className="lg:w-[40vw] object-contain"
          />
        </div>
        <div className="lg:w-[50]% flex flex-col gap-6">
          <h2 className="lg:text-3xl text-md font-semibold">
            Discover the endless possibilities <br /> with fynas.
          </h2>
          <p>
            Unlock a world of endless possibilities with Fynas. Explore
            innovative solutions <br /> tailored to your unique needs.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-6">
            <div className="flex gap-2 items-center">
              <Image
                width={1080}
                height={1080}
                className="w-6"
                src="/images/investment.svg"
                alt=""
              />
              <p>Investment portifolio</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                width={1080}
                height={1080}
                className="w-6"
                src="/images/financial.svg"
                alt=""
              />
              <p>Finacial Goal</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                width={1080}
                height={1080}
                className="w-6"
                src="/images/bill.svg"
                alt=""
              />
              <p>Bill payment market remainders</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                width={1080}
                height={1080}
                className="w-6"
                src="/images/budget.svg"
                alt=""
              />
              <p>Budget tracking</p>
            </div>
          </div>
          <span className="flex gap-3 bg-slate-50 px-3 py-2 rounded-lg">
            <CircleHelp />
            precision valued ,convictions strong. Demands met, obstacles <br />
            overcome.
          </span>
        </div>
      </div>
    </div>
  );
}

export default DiscoverFeatures;
