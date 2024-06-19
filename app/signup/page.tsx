// import SignupForm from "@/components/Auth/SignupForm";
// import SignupForm from "@/components/Auth/SignupForm";
import SignupForm from "@/components/Auth/SignupForm";
import NavBar from "@/components/NavBar";

import React from "react";

function page() {
  return (
    <main className="flex flex-col gap-6  bg-[#FFF8F0] text-slate-800">
      <NavBar />
      <SignupForm role="USER" />
    </main>
  );
}

export default page;
