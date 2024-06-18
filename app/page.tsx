"use client";
import DiscoverFeatures from "@/components/Main/DiscoverFeatures";
import PricingPackages from "@/components/Main/PricingPackages";
import Marquee from "@/components/MarqueCompo";
import NavBar from "@/components/NavBar";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function page() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const companies = [
    { id: 1, img: "/images/glimpse.svg" },
    { id: 2, img: "/images/designstudio.svg" },
    { id: 3, img: "/images/wayline.svg" },
    { id: 4, img: "/images/optimal.svg" },
    { id: 5, img: "/images/visualy.svg" },
    { id: 6, img: "/images/wayline.svg" },
    { id: 7, img: "/images/dexign.svg" },
    { id: 8, img: "/images/emblem.svg" },
  ];
  return (
    <div className="flex flex-col gap-5  min-h-screen bg-[#FFF8F0] text-slate-800">
      <NavBar />
      <section data-aos="fade-up" className="flex flex-col gap-12 px-4">
        <div className="flex flex-col gap-8 lg:flex-row bg-[rgb(235,255,116)] w-full items-center justify-center py-16 lg:rounded-3xl rounded-md px-6  lg:px-8">
          <div className="flex flex-col gap-8 lg:w-[70vw] ">
            <h2 className="text-[2rem]   lg:text-[4rem]  font-bold text-slate-800">
              Providing the fastest <br /> online transactions
            </h2>
            <p className="text-slate-800 ">
              Experience the unparalleled speed and efficiency of our online
              transaction platform. <br /> With our state-of-the-art technology.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <span>
                <p className="text-slate-800">Expert financial guidance</p>
              </span>
              <span>
                <p className="text-slate-800">24/7 Client support</p>
              </span>
            </div>
            <div className="flex gap-4">
              <button className="bg-[rgb(0,49,62)] hover:bg-[rgba(0,49,62,0.83)] py-2 px-4 text-gray-200 rounded-3xl">
                Get Started
              </button>
              <button className="flex bg-gray-100 hover:bg-transparent  border border-black py-2 px-4 gap-2 text-slate-800 rounded-3xl">
                Learn More
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="flex lg:w-[35vw] relative ">
            <div className="lg:flex hidden">
              <Image
                src="/images/totalspending.jpg"
                alt=""
                width={1080}
                height={1080}
                className="w-auto h-24 -right-12 top-3 object-cover absolute rounded-2xl"
              />
            </div>
            <Image
              src="/images/lady.jpg"
              alt=""
              width={1080}
              height={1080}
              className="object-cover lg:w-full  h-auto rounded-3xl "
            />
            <div className="lg:flex hidden">
              <Image
                src="/images/graph.jpg"
                alt=""
                width={1080}
                height={1080}
                className="w-60 rounded-3xl -left-32 bottom-14 h-auto absolute object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center">
          <p className="text-center ">
            Our experts collaborate with top-tier fortune 500 companies
          </p>
          <div className=" lg:marquee flex gap-6 overflow-hidden lg:max-w-full ">
            {companies.map((company, i) => (
              <Image
                key={i}
                width={1080}
                height={1080}
                className="w-20 bg-slate-100 py-2 px-2 rounded-full "
                src={company.img}
                alt=""
              />
            ))}
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="flex flex-col gap-10 items-center justify-center lg:py-28 py-4 px-4"
      >
        <DiscoverFeatures />
      </section>
      <section
        data-aos="fade-up"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center justify-center px-4"
      >
        <div className="flex flex-col gap-16 bg-slate-800 items-center justify-center py-12 px-12 rounded-2xl">
          <Image
            width={1080}
            height={1080}
            className="w-64"
            src="/images/sarahd.svg"
            alt=""
          />
          <span className="flex gap-3 items-center">
            <Image
              width={1080}
              height={1080}
              className="w-20"
              src="/images/lighticon.svg"
              alt=""
            />
            <p className="text-slate-100">
              Trusted by over 30,000 <br /> companies
            </p>
          </span>
        </div>
        <div className="flex flex-col gap-20 bg-[rgb(235,255,116)] items-center  py-14 px-12 rounded-2xl">
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-3xl">
              Start your plan and <br /> download it now!
            </h2>
            <span className="flex gap-3 items-center">
              <Image
                width={1080}
                height={1080}
                className="lg:w-40 w-32"
                src="/images/googleplay.svg"
                alt=""
              />
              <Image
                width={1080}
                height={1080}
                className="lg:w-40 w-32"
                src="/images/appstore.svg"
                alt=""
              />
            </span>
          </div>
          <div className="overflow-hidden w-full">
            <Marquee />
          </div>
        </div>
        <div className="flex flex-col gap-10 bg-slate-800 items-center  py-14 px-12 rounded-2xl">
          <h2 className="text-2xl font-semibold text-slate-100">
            Powerful Intergartion
          </h2>
          <span className="flex flex-col gap-20 items-center justify-center">
            <div className="flex gap-12">
              <Image
                width={1080}
                height={1080}
                className="w-12 bg-slate-100 py-2 px-2 rounded-full animate-pulse"
                src="/images/powerful1.svg"
                alt=""
              />
              <Image
                width={1080}
                height={1080}
                className="w-12 bg-slate-100 py-2 px-2 rounded-full animate-pulse"
                src="/images/powerful2.svg"
                alt=""
              />
              <Image
                width={1080}
                height={1080}
                className="w-12 bg-slate-100 py-2 px-2 rounded-full animate-pulse"
                src="/images/powerful3.svg"
                alt=""
              />
            </div>
            <div className="flex gap-12">
              <Image
                width={1080}
                height={1080}
                className="w-12 bg-slate-100 py-2 px-2 rounded-full animate-pulse"
                src="/images/powerful4.svg"
                alt=""
              />
              <Image
                width={1080}
                height={1080}
                className="w-12 bg-slate-100 py-2 px-2 rounded-full animate-pulse"
                src="/images/powerful5.svg"
                alt=""
              />
            </div>
          </span>
          <Link href="#" className="underline font-medium text-slate-100">
            View all Intelectuals
          </Link>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="flex flex-col lg:flex-row  lg:justify-between lg:px-28 lg:py-8 px-4"
      >
        <div className="flex justify-center gap-28 flex-col">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">
              We Measure Social <br /> Payments.
            </h2>
            <div>
              <div className="flex gap-4">
                <Image
                  width={1080}
                  height={1080}
                  className="w-5"
                  src="images/check2.svg"
                  alt=""
                />
                <p> Track Your Payment Method</p>
              </div>
              <div className="flex gap-4">
                <Image
                  width={1080}
                  height={1080}
                  className="w-5"
                  src="images/check2.svg"
                  alt=""
                />
                <p> Easy online Transaction</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">
              "Money is a tool, not a destination. drive your journey."
            </h2>
            <div>
              <h2 className="font-semibold">Winston churchill</h2>
              <p>Manager</p>
            </div>
          </div>
        </div>
        <div className="flex lg:w-[22vw] md:w-[22vw] w-auto py-8 relative ">
          <div className="">
            <Image
              src="/images/successful.svg"
              alt=""
              width={1080}
              height={1080}
              className="w-auto lg:h-24 -right-12 hidden lg:flex top-3 object-cover absolute rounded-2xl"
            />
          </div>
          <Image
            src="/images/phone.svg"
            alt=""
            width={1080}
            height={1080}
            className="object-cover  w-full h-auto rounded-3xl "
          />
          <div className="">
            <Image
              src="/images/1month.svg"
              alt=""
              width={1080}
              height={1080}
              className="lg:w-60  hidden lg:flex w-40 rounded-3xl -left-32 bottom-14 h-auto absolute object-cover"
            />
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className=" ">
        <PricingPackages />
      </section>
      <section
        data-aos="fade-up"
        className="flex items-center justify-center flex-col gap-8 px-4 py-4"
      >
        <h2 className="lg:text-3xl text-2xl font-semibold ">
          Intreseted? Request a demo
        </h2>
        <p>
          Experience the power of our solutions firsthand. Request a demo <br />
          today to see how our services can transform your financial journey.
        </p>
        <button className="py-1 px-4 bg-slate-800 text-slate-100 rounded-3xl">
          Request a demo
        </button>
      </section>
    </div>
  );
}

export default page;
