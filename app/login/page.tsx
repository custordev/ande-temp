import LoginForm from "@/components/Auth/LoginForm";
import NavBar from "@/components/NavBar";

import React, { useState } from "react";

function page() {
  return (
    <main className="flex flex-col gap-6  bg-[#FFF8F0] text-slate-800">
      <NavBar />
      <LoginForm />
    </main>
  );
}

export default page;
