import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section className="bg-[rgb(0,49,62)] ">
      <div className="bg-[rgb(235,255,116)] flex justify-evenly items-center rounded-b-[2.5rem] py-8 px-6 ">
        <div className="flex flex-col gap-4">
          <h2>Social media</h2>
          <div className="flex gap-5 ">
            <span className="py-4 bg-[rgb(255,248,240)] px-4 rounded-full">
              <FaFacebookF />
            </span>
            <span className="py-4 bg-[rgb(255,248,240)] px-4 rounded-full">
              <FaInstagram />
            </span>
            <span className="py-4 bg-[rgb(255,248,240)] px-4 rounded-full">
              <FaXTwitter />
            </span>
            <span className="py-4 bg-[rgb(255,248,240)] px-4 rounded-full">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2>Subscribe to new settler</h2>
          <form className="bg-[rgb(255,248,240)] py-1.5 flex gap-6 px-3 focus-within:bg-sky-50 rounded-3xl ">
            <input
              type="text"
              placeholder="Enter your email"
              className="outline-none bg-transparent  border-none"
            />
            <button className="bg-[rgb(0,49,62)] hover:bg-[rgba(0,49,62,0.92)] py-2 px-6 rounded-3xl text-gray-100">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className=" px-8 flex justify-between  gap-4 ">
        <div>
          <Image
            src="/images/logof.png"
            alt=""
            width={1080}
            height={1080}
            className="w-28 h-28 object-cover"
          />

          <div className="text-gray-200 flex flex-col gap-2 px-5">
            <h2 className="font-bold">Contact</h2>
            <p>+44 (0) 161808123</p>
            <p>
              Chicago HQ Estica Cop.Macomb,
              <br />
              MI 48042
            </p>
          </div>
        </div>
        <div className="flex gap-6 py-12">
          <div className="text-gray-200 flex flex-col gap-4 px-5">
            <h2 className="font-bold">Contact</h2>
            <div className="flex flex-col gap-2">
              <p>Home </p>
              <p>Home 2</p>
              <p>Home 3</p>
              <p>Feature 1</p>
              <p>Feature 2</p>
              <p>Feature 3</p>
              <p>About</p>
              <p>Services</p>
            </div>
          </div>
          <div className="text-gray-200 flex flex-col gap-4 px-5">
            <h2 className="font-bold"></h2>
            <div className="flex flex-col gap-2">
              <p>Style Guide</p>
              <p>Instructions</p>
              <p>Changelog</p>
              <p>Lisense</p>
              <p>Link in Bio</p>
            </div>
          </div>
          <div className="text-gray-200 flex flex-col gap-4 px-5">
            <h2 className="font-bold">Utility Pages</h2>
            <div className="flex flex-col gap-2">
              <p>Style Guide</p>
              <p>Instructions</p>
              <p>Changelog</p>
              <p>Lisense</p>
              <p>Link in Bio</p>
            </div>
          </div>
          <div className="text-gray-200 flex flex-col gap-4 px-5">
            <h2 className="font-bold"></h2>
            <div className="flex flex-col gap-2">
              <p>coming soon</p>
              <p>Error 404</p>
              <p>Password Protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
