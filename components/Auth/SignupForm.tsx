"use client";
import { createUser } from "@/app/actions/user";
import { User, UserRole } from "@prisma/client";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function signupForm({ role = "USER" }: { role: UserRole }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  async function SubmitData(data: User) {
    setIsLoading(true);

    data.role = role;
    try {
      const user = await createUser(data);
      const userId = user?.data?.id;
      console.log(user);
      if (user) {
        console.log("User Created successfully");
        reset();
        setIsLoading(false);
        toast.success("Account Created successfully");
        router.push(`/verifyPage/${userId}`);
        // console.log(user);
      } else {
        // console.log(user.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="lg:container h-full  ">
      <div className="flex h-full flex-wrap items-center justify-center ">
        <div className="w-full">
          <div className="block rounded-lg shadow-lg bg-gradient-to-b from-[#F6FFC3] via-neutral-100 to-white bg-opacity-10 ">
            <div className="g-0 lg:flex lg:flex-wrap">
              {/* <!-- Left column container--> */}
              <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none  ">
                <div className="px-4 py-6  md:mx-6 md:p-12">
                  <Image
                    width={900}
                    height={1000}
                    src="/images/signup-image.jpg"
                    className="w-auto h-auto rounded-md"
                    alt=""
                  />
                </div>
              </div>
              <div className=" md:px-0 lg:w-6/12 ">
                <div className="md:mx-6 md:p-12 ">
                  <div className=" w-auto lg:bg-transparent md:bg-transparent py-8 px-8 h-auto rounded-md">
                    <div className="text-center">
                      <Image
                        src="/images/logoz.png"
                        alt=""
                        width={1080}
                        height={1080}
                        className="w-28 h-28 object-cover"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Create Account
                      </h4>
                    </div>
                    <form className="" onSubmit={handleSubmit(SubmitData)}>
                      <div className="mt-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 "
                        >
                          Full Names
                        </label>
                        <div className="">
                          <input
                            {...register("name", { required: true })}
                            id="name"
                            name="name"
                            type="name"
                            autoComplete="name"
                            placeholder="yournames"
                            className="block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                          />
                          {errors.name && (
                            <p className="text-red-600 ml-1 mt-1 text-sm">
                              Names are required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 "
                        >
                          Email
                        </label>
                        <div className="">
                          <input
                            {...register("email", { required: true })}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="youremail@gmail.com"
                            className="block w-full rounded-md border-0 py-2.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                          />
                          {errors.email && (
                            <p className="text-red-600 ml-1 mt-1 text-sm">
                              Email is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 "
                          >
                            Password
                          </label>
                        </div>
                        <div className="">
                          <input
                            {...register("password", { required: true })}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder=".........."
                            className="block w-full px-3 rounded-md border-0 py-2.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                          />
                          {errors.password && (
                            <p className="text-red-600 ml-1 mt-1 text-sm">
                              Password is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-6 pb-1 pt-1 text-center">
                        <div>
                          {isLoading ? (
                            <button
                              type="submit"
                              className="mb-3 flex gap-3 py-2 items-center w-full rounded-md px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 shadow-black/30 hover:shadow-dark-strong focus:shadow-dark-strong active:shadow-dark-strong bg-black"
                            >
                              Signing You{" "}
                              <span>
                                <Loader className="animate-spin text-yellow-300" />
                              </span>
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="mb-3 inline-block w-full rounded-md px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 shadow-black/30 hover:shadow-dark-strong focus:shadow-dark-strong active:shadow-dark-strong bg-black"
                            >
                              Signin
                            </button>
                          )}
                        </div>
                      </div>
                      {/* <!--Login button--> */}
                      <div className="flex items-center justify-between mt-4">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <Link
                          href="/login"
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 bg-black text-white"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                        >
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
