"use client";
import { useSignupMutation } from "@/lib/redux/api/authApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [signup] = useSignupMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signup(formData)
      .unwrap()
      .then((res) => {
        console.log(res);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:grid  bg-blue-400  place-content-center">
        <h1 className="text-2xl font-semibold mb-4">Parent Signup</h1>
      </div>


      {/* Right: Login Form */}
      <div className="lg:p-24 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <div className="text-gray-700 font-semibold">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-600">
              full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={(e : any) => handleSubmit(e)}
            className="bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Signup
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-blue-600 text-center">
          <p
            onClick={() => router.push("/")}
            className="hover:underline cursor-pointer"
          >
            Login Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
