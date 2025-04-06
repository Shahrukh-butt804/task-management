"use client";
import { useKidLoginMutation } from "@/lib/redux/api/kidApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [loginKid] = useKidLoginMutation();

  const [formData, setFormData] = useState({
    username: "",
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
    loginKid(formData)
      .unwrap()
      .then((res) => {
        if (res?.status == 200) {
          alert("logged in succssfulyy");
          router.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:grid  bg-blue-400  place-content-center">
        <h1 className="text-2xl font-semibold mb-4">Login As A Kid</h1>
      </div>

      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 text-gray-700 font-semibold">
        <form  onSubmit={handleSubmit}>
          {/* email Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
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
            type="submit"
            className="bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-blue-600 text-center">
          <p
            onClick={() => router.push("/")}
            className="hover:underline cursor-pointer"
          >
            Parent Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
