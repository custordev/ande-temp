"use client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function page() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="bg-[#8DE5E1] text-slate-800 flex flex-col gap-4">
      <NavBar />
      <div className="flex flex-col items-center justify-center  ">
        <div data-aos="fade-up" className="flex flex-col gap-4 items-center">
          <h2 className="lg:text-[3.5rem] text-3xl text-center font-semibold">
            Effortless financial management
          </h2>
          <p className="flex text-center ">
            Streamline your finances, track expenses, set budgets, and achieve
            <br />
            your financial goals.
          </p>
          <div>
            <Image
              width={1080}
              height={1080}
              className="lg:w-[75vw] lg:h-[85vh] w-auto rounded-2xl"
              src="/images/aboutimage1.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="bg-slate-100 flex flex-col gap-16 py-20 items-center justify-center w-screen "
        >
          <div className="flex flex-col lg:py-20 lg:flex-row gap-6 lg:gap-20 items-center justify-center">
            <div className="flex items-center justify-center flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-16 h-16 bg-gray-300 rounded-full py-3 px-3"
                src="/images/credit.svg"
                alt=""
              />
              <h2 className="font-bold">Credit score monitoring</h2>
              <p className="text-center">
                Invoice smarter simplify your process, get <br /> paid faster!
              </p>
            </div>
            <div className="flex items-center justify-center flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-16 h-16 bg-gray-300 rounded-full py-3 px-3"
                src="/images/secure.svg"
                alt=""
              />
              <h2 className="font-bold">Secure data encryption</h2>
              <p className="text-center">
                Effortlessly track your cash flow with our <br /> intuitive
                tools
              </p>
            </div>
            <div className="flex items-center justify-center flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-16 h-16 bg-gray-300 rounded-full py-3 px-3"
                src="/images/retirement.svg"
                alt=""
              />
              <h2 className="font-bold">Retirement planning</h2>
              <p className="text-center">
                Farewell to late payments and stay financially <br /> organized.
              </p>
            </div>
          </div>
          <div className="flex lg:w-[95vw] lg:h-48 rounded-3xl bg-[#EBFF74] lg:px-16 py-10 w-[23rem]  flex-col lg:flex-row gap-6 items-center lg:justify-between justify-center text-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">500</h3>
              <p>Trusted Patners</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">20+</h3>
              <p>Active Users</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">200+</h3>
              <p>Completed Projects</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">100+</h3>
              <p>Total reviews</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex  flex-col lg:flex-row items-center justify-between w-screen lg:px-28 px-4"
          >
            <div className="relative ">
              <Image
                width={1080}
                height={1080}
                className="lg:w-96  lg:h-auto rounded-2xl"
                src="/images/aboutimage2.jpg"
                alt=""
              />
              <div className=" -right-44 -bottom-12 absolute">
                <Image
                  data-aos="fade-up"
                  width={1080}
                  height={1080}
                  className="w-96 hidden lg:flex h-72 "
                  src="/images/aboutimage3.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <Image
                  width={1080}
                  height={1080}
                  className="  w-8 h-16"
                  src="/images/bullseye.svg"
                  alt=""
                />
                <h2 className="font-bold">Our Mission</h2>
                <p>
                  At Fynas, our mission is to empower individuals and businesses
                  to <br />
                  achieve financial success by providing innovative solutions,
                  personalized <br /> guidance, and exceptional service.
                </p>
              </div>
              <div>
                <Image
                  width={1080}
                  height={1080}
                  className="w-8 h-16"
                  src="/images/vision.svg"
                  alt=""
                />
                <h2 className="font-bold">Our Vision</h2>
                <p>
                  Our vision is to be the leading provider of financial
                  services, known for <br /> our commitment to excellence,
                  integrity, and customer satisfaction. We <br /> aspire to be
                  the trusted partner that our clients rely on to navigate their{" "}
                  <br /> financial journey with confidence and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="bg-gradient-to-t from-slate-100 via-slate-100 to-[#EBFF74] flex flex-col gap-16 items-center justify-center lg:h-[80vh] h-[50vh] w-screen"
        >
          <div className="bg-[#00313E] text-slate-100 h-80 lg:py-8  rounded-3xl flex flex-col lg:items-center items-start  justify-between lg:px-20 lg:flex-row lg:w-[80vw] w-[90vw] px-4 py-4">
            <div className="flex flex-col gap-8">
              <h2 className="font-bold lg:text-[3rem] text-2xl text-slate-100">
                Join thousands of <br /> satisfied users!
              </h2>
              <div>
                <button className="flex items-center justify-center py-2 px-6 rounded-3xl bg-cyan-500 hover:bg-[#EBFF74] hover:text-slate-800">
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex gap-2 text-center">
                  <Image
                    width={1080}
                    height={1080}
                    className="w-6 h-6"
                    src="/images/check.svg"
                    alt=""
                  />
                  Bill Management
                </div>
                <div className="flex gap-2 text-center">
                  <Image
                    width={1080}
                    height={1080}
                    className="w-6 h-6"
                    src="/images/check.svg"
                    alt=""
                  />
                  Debt Management
                </div>
                <div className="flex gap-2 text-center">
                  <Image
                    width={1080}
                    height={1080}
                    className="w-6 h-6"
                    src="/images/check.svg"
                    alt=""
                  />
                  Income Tracking
                </div>
                <div className="flex gap-2 text-center">
                  <Image
                    width={1080}
                    height={1080}
                    className="w-6 h-6"
                    src="/images/check.svg"
                    alt=""
                  />
                  Tax preparation
                </div>
              </div>
              {/* <div className="relative">
                <Image
                  width={1080}
                  height={1080}
                  className=" -rotate-45 w-40 object-left-bottom flex absolute  "
                  src="/images/dashboard.svg"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex bg-slate-100 w-screen flex-col items-center gap-3"
        >
          <div className="flex flex-col gap-3 items-center text-center">
            <h2 className="font-semibold lg:text-4xl  text-xl">
              Meet Our Team
            </h2>
            <p className="lg:w-96">
              Our team comprises talented professionals committed to delivering
              exceptional financial services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:py-14 py-4">
            <div className="flex flex-col gap-3 ">
              <Image
                width={1080}
                height={1080}
                className="w-80 h-80 rounded-2xl"
                src="/images/samuelbishopjpg.jpg"
                alt=""
              />
              <div>
                <h3 className="font-semibold">Samuel Bishop</h3>
                <p>Head Manager</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-80 h-80 rounded-2xl"
                src="/images/carolynortiz.jpg"
                alt=""
              />
              <div>
                <h3 className="font-semibold">Carolyn Otyz</h3>
                <p>Marketing Manager</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-80 h-80 rounded-2xl"
                src="/images/amandareed.jpg"
                alt=""
              />
              <div>
                <h3 className="font-semibold">Ande Vasquez</h3>
                <p>CEO ANDE</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-80 h-80 rounded-2xl"
                src="/images/billyvasquez.jpg"
                alt=""
              />
              <div>
                <h3 className="font-semibold">Amanda reed</h3>
                <p>Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
