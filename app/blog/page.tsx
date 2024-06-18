import NavBar from "@/components/NavBar";
import { PaginationDemo } from "@/components/Pagination";

import React from "react";

function page() {
  return (
    <main className="flex flex-col gap-6 ">
      <NavBar />
      <section className="bg-[#8DE5E1] text-slate-800  ">
        <h2 className="text-6xl text-center lg:py-24 py-8 font-bold">Blog</h2>
      </section>
      <PaginationDemo />
    </main>
  );
}

export default page;
