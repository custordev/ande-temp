"use client";
import { loginProps } from "@/types/types";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [ShowNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginProps>();
  async function SubmitData(data: loginProps) {
    // console.log(data);
    try {
      setIsLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setIsLoading(false);
        toast.error("Sign-in error: Check your credentials");
        setShowNotification(true);
      } else {
        // Sign-in was successful
        setShowNotification(false);
        reset();
        setIsLoading(false);
        // toast.success("Login Successful");
        router.push("/");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
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
                {/* style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" */}

                <div className="px-4 py-6  md:mx-6 md:p-12">
                  <Image
                    width={900}
                    height={1000}
                    src="/images/login-image.jpg"
                    className="w-auto h-auto rounded-md"
                    alt=""
                  />
                </div>
              </div>

              {/* <!-- Right column container with background and description--> */}
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
                        Login to your account
                      </h4>
                    </div>
                    <form className="" onSubmit={handleSubmit(SubmitData)}>
                      <div className="mt-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 "
                        >
                          Email address
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
                              Logging in{" "}
                              <span>
                                <Loader className="animate-spin text-yellow-300" />
                              </span>
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="mb-3 inline-block w-full rounded-md px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 shadow-black/30 hover:shadow-dark-strong focus:shadow-dark-strong active:shadow-dark-strong bg-black"
                            >
                              Log in
                            </button>
                          )}
                        </div>

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>
                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between mt-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link
                          href="/signup"
                          type="button"
                          className="inline-block  border-2 rounded-2xl border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 bg-black text-white"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                        >
                          Register
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

export default LoginForm;
